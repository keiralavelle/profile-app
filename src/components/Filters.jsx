import { memo } from "react";
import styles from "../styles/filters.module.css";

const Filters = memo(({ titles, title, name, handleChange, handleSearch, handleClick }) => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterDropdown}>
        <label htmlFor="title">Select a title</label>
        <select id="title" onChange={handleChange} value={title}>
          <option value="">All</option>
          {titles.map(title => (
            <option key={title} value={title}>{title}</option>
          ))}
        </select>
      </div>

      <div className={styles.filterSearch}>
        <label htmlFor="search">Search a name</label>
        <input id="search" onChange={handleSearch} value={name}/>
      </div>

      <button onClick={handleClick}>Clear</button>
    </div>
  );
});

export default Filters;