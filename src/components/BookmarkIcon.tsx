import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { BookmarksContext } from "../contexts/BookmarksContextProvider";
import { useContext } from "react";

type BookmarkIconProps = {
  id: number;
}

export function BookmarkIcon({
  id,
}: BookmarkIconProps) {
  const {
    bookmarkedIds,
    handleToggleBookmark,
  } = useContext(BookmarksContext);

  const handleClickBookmark = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    handleToggleBookmark(id);
  }

  return (
    <button className="bookmark-btn" onClick={handleClickBookmark}>
      <BookmarkFilledIcon
        className={`
          ${bookmarkedIds.includes(id) ? "filled" : ""}
        `}
      />
    </button>
  );
}
