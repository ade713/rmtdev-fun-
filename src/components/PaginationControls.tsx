import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

type PaginationControlsProps = {
  currentPage: number;
  onClick: (direction: 'next' | 'previous') => void;
};

export function PaginationControls({
  currentPage,
  onClick
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
      <PaginationButton
        currentPage={currentPage}
        direction="next"
        onClick={() => onClick("next")}
      />
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
  return (
    <button
      className={`pagination__button pagination__button--${direction}`}
      onClick={onClick}
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
