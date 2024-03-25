import { TriangleDownIcon } from "@radix-ui/react-icons";
import { BookmarksPopover } from "./BookmarksPopover";
import { useRef, useState } from "react";
import { useOnClickOutside } from "../lib/hooks";

export function BookmarksButton() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  useOnClickOutside([buttonRef, popoverRef], () => setIsOpen(false));

  const handleClickBookmarksButton = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <section>
      <button
        className="bookmarks-btn"
        onClick={handleClickBookmarksButton}
        ref={buttonRef}
      >
        Bookmarks <TriangleDownIcon />
      </button>

      {isOpen ? <BookmarksPopover ref={popoverRef} /> : null}
    </section>
  );
}
