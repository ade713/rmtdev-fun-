import { TriangleDownIcon } from "@radix-ui/react-icons";
import { BookmarksPopover } from "./BookmarksPopover";
import { useState } from "react";

export function BookmarksButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickBookmarksButton = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <section>
      <button className="bookmarks-btn" onClick={handleClickBookmarksButton}>
        Bookmarks <TriangleDownIcon />
      </button>

      {isOpen ? <BookmarksPopover /> : null}
    </section>
  );
}
