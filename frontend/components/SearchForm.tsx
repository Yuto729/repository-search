import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import React  from "react";
import styles from "../styles/Home.module.css";
interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
}
interface SearchFormProps {
  onSearch: (repositories: Repository[]) => void;
}
const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  const [keyword, setKeyword] = useState("");
  const router = useRouter();


  const searchRepositories = async () => {
    if (!username || !keyword) {
        //usernameかkeywordが入力されないときは、APIリクエストを送らない
        //こうすることで、一旦githubのurlにとび、元のページに戻ってきたときにエラーが生じないで済む。
        return;
    }
    try {
    const response = await axios.get(`http://127.0.0.1:8000/search/${username}/${keyword}`);
    onSearch(response.data);
    // Save search results to local storage
    //localStorage.setItem('searchResults', JSON.stringify(response.data));
    //localStorage.removeItem("searchResults");
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.status === 500) {
                // Redirect to /500 page if the error was a 500 error
                router.replace('/500');
              } 
            else if (error.response && error.response.status === 404) {
                // Redirect to /404 page if the error was a 404 error
                router.replace('/404');
              } 
            console.error(error.message);
          } 
          
          else {
            // Handle generic errors here
            console.error(error);
    }
  }
};

  return (
    <div className={styles.form}>
      <input
        type="text"
        placeholder="GitHub username"
        onChange={(event) => setUsername(event.target.value)}
      />

      <input
        type="text"
        placeholder="Keyword"
        onChange={(event) => setKeyword(event.target.value)}
      />

      <button onClick={searchRepositories}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;
