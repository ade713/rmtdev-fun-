import { createContext, useState } from "react";
import { RESULTS_PER_PAGE } from "../lib/constants";
import { useSearchQuery, useSearchTextContext } from "../lib/hooks";
import { SortBy, PageDirection, TJobItem } from "../lib/types";

type TJobItemsContext = {
  currentPage: number;
  isLoading: boolean;
  jobItems: TJobItem[] | undefined;
  jobItemsSortedAndSliced: TJobItem[];
  sortBy: SortBy;
  totalNumberOfPages: number;
  totalNumberOfResults: number;
  handleChangePage: (direction: PageDirection) => void;
  handleChangeSortBy: (newSortBy: SortBy) => void;
};

export const JobItemsContext = createContext<TJobItemsContext | null>(null);

export function JobItemsContextProvider({ children }: {
  children: React.ReactNode
}) {
  // dependency on other context
  const { debouncedSearchText } = useSearchTextContext();

  // state
  const { jobItems, isLoading } = useSearchQuery(debouncedSearchText);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortBy>('relevant');

  // derived / computed state
  const totalNumberOfResults = jobItems?.length || 0;
  const totalNumberOfPages = totalNumberOfResults / RESULTS_PER_PAGE;
  const sliceStartIndex = currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE;
  const sliceEndIndex = currentPage * RESULTS_PER_PAGE;
  const jobItemsSorted = [...(jobItems || [])].sort((a, b) => {
    if (sortBy === 'relevant') {
      return b.relevanceScore - a.relevanceScore;
    } else {
      return a.daysAgo - b.daysAgo;
    }
  }) || [];
  const jobItemsSortedAndSliced = jobItemsSorted?.slice(sliceStartIndex, sliceEndIndex);

  // event handlers / actions
  const handleChangePage = (direction: PageDirection) => {
    if (direction === 'next') {
      setCurrentPage(prev => prev + 1);
    } else if (direction === 'previous') {
      setCurrentPage(prev => prev - 1);
    }
  };
  const handleChangeSortBy = (newSortBy: SortBy) => {
    setCurrentPage(1);
    setSortBy(newSortBy);
  };

  return (
    <JobItemsContext.Provider
      value={{
        currentPage,
        isLoading,
        jobItems,
        jobItemsSortedAndSliced,
        sortBy,
        totalNumberOfPages,
        totalNumberOfResults,
        handleChangePage,
        handleChangeSortBy,
      }}
    >
      {children}
    </JobItemsContext.Provider>
  );
}
