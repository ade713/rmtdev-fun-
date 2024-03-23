import { TJobItem } from "../lib/types";
import { BookmarkIcon } from "./BookmarkIcon";

type JobListItemProps = {
  jobItem: TJobItem;
  isActive: boolean;
}

export function JobListItem({ jobItem, isActive }: JobListItemProps) {
  const {
    badgeLetters,
    company,
    daysAgo,
    id,
    title,
  } = jobItem;
  
  return (
    <li className={`job-item ${isActive ? 'job-item--active' : ''}`}>
      <a href={`#${id}`} className="job-item__link">
        <div className="job-item__badge">{badgeLetters}</div>

        <div className="job-item__middle">
          <h3 className="third-heading">{title}</h3>
          <p className="job-item__company">{company}</p>
        </div>

        <div className="job-item__right">
          <BookmarkIcon id={id}/>
          <time className="job-item__time">{daysAgo}d</time>
        </div>
      </a>
    </li>
  );
}
