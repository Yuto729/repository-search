import styles from '../styles/Home.module.css';
import React, { useState, useEffect }  from "react";
import Link from 'next/link';
//import SearchForm from '..components/SearchForm';
interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
}
interface SearchResultProps {
  repositories: Repository[];
}

const SearchResult: React.FC<SearchResultProps> = ({ repositories }) => {
    const [Results, setResults] = useState<Repository[]>([]);
    
      useEffect(() => {
        // 新しい検索結果が得られたときにそれを保存
        localStorage.setItem('searchResults', JSON.stringify(repositories));
      }, [repositories]);
//console.log(repositories);
  return (
    <div className={styles.grid}>
        {repositories.length > 0 ? (
      repositories.map((repo) => (
        <div key={repo.id} className={styles.card}>
          <h2 className={styles.heading}>{repo.name} </h2>
          <Link href={repo.html_url} className={styles.url}>{repo.html_url}</Link>
          <p>{repo.description}</p>
        </div>
      ))
        ):(
        <p className={styles.noResult}>No Result</p> 
        )}
    </div>
  );
};

export default SearchResult;
