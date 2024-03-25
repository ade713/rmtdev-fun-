import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useBookmarksContext } from "../lib/hooks";

type BookmarkIconProps = {
  id: number;
}

export function BookmarkIcon({
  id,
}: BookmarkIconProps) {
  const { bookmarkedIds, handleToggleBookmark } = useBookmarksContext();

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
