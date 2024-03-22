export type TJobItem = {
  badgeLetters: number;
  company: string;
  daysAgo: number;
  id: number;
  relevanceScore: number;
  title: string;
};

export type TJobItemExpanded =  TJobItem & {
  companyURL: string;
  coverImgURL: string;
  description: string;
  duration: string;
  location: string;
  qualifications: string[];
  reviews: string[];
  salary: string;
};

export type PageDirection = 'next' | 'previous';

export type SortBy = 'relevant' | 'recent';
