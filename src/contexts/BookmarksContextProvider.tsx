import { createContext, useEffect } from "react";
import { useLocalStorage } from "../lib/hooks";

export const BookmarksContext = createContext(null);

export function BookmarksContextProvider({ children }) {
  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<number[]>("bookmarkedIds", []);

  const handleToggleBookmark = (id: number) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(prev => (prev.filter(item => item !== id)));
    } else {
      setBookmarkedIds(prev => ([...prev, id]));
    }
  }

  useEffect(() => {
    localStorage.setItem("bookmarkedIds", JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  return (
    <BookmarksContext.Provider
      value={{
        bookmarkedIds,
        handleToggleBookmark,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}
