type ResultsCountProps = {
  totalNumberOfResults: number;
}

export function ResultsCount({ totalNumberOfResults }: ResultsCountProps) {
  return (
    <p className="count">
      <span className="u-bold">{totalNumberOfResults}</span> results
    </p>
  );
}
