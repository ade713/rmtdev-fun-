import { useJobItemsContext } from "../lib/hooks";

export function SortingControls() {
  const { handleChangeSortBy, sortBy } = useJobItemsContext();

  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>

      <SortingButton
        isActive={sortBy === 'relevant'}
        onClick={() => handleChangeSortBy('relevant')}
      >
        Relevant
      </SortingButton>
      <SortingButton
        isActive={sortBy === 'recent'}
        onClick={() => handleChangeSortBy('recent')}
      >
        Recent
      </SortingButton>
    </section>
  );
}

type SortingButtonProps = {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

function SortingButton({
  children,
  isActive,
  onClick,
}: SortingButtonProps) {
  return (
    <button
      className={`
        sorting__button sorting__button--recent
        ${isActive ? 'sorting__button--active' : ''}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
