import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { PageDirection } from "../lib/types";

type PaginationControlsProps = {
  currentPage: number;
  onClick: (direction: PageDirection) => void;
  totalNumberOfPages: number;
};

export function PaginationControls({
  currentPage,
  onClick,
  totalNumberOfPages,
}: PaginationControlsProps) {
  return (
    <section className="pagination">
      { currentPage > 1 &&
        <PaginationButton
          currentPage={currentPage}
          direction="previous"
          onClick={() => onClick("previous")}
        />
      }
      { currentPage < totalNumberOfPages &&
        <PaginationButton
          currentPage={currentPage}
          direction="next"
          onClick={() => onClick("next")}
        />
      }
    </section>
  );
}

type PaginationButtonProps = {
  currentPage: number;
  direction: string;
  onClick: () => void;
};

function PaginationButton({
  currentPage,
  direction,
  onClick,
}: PaginationButtonProps) {
  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick();
    e.currentTarget.blur();
  };

  return (
    <button
      className={`pagination__button pagination__button--${direction}`}
      onClick={handleClickButton}
    >
      { direction === 'previous' &&
        <>
          <ArrowLeftIcon />
          Page {currentPage - 1}
        </>
      }
      { direction === 'next' &&
        <>
          <ArrowRightIcon />
          Page {currentPage + 1}
        </>
      }
    </button>
  );
}
