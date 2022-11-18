import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Articles from "./components/Articles";
import Pagination from "./components/Pagination";
import { SpinnerDotted } from "spinners-react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(30);
  const [error, setError] = useState(null);

  const url = `http://hn.algolia.com/api/v1/search?query=${userInput}&tags=story&hitsPerPage=100`;

  const fetchData = () => {
    setLoading(true);
    const timer = setTimeout(
      () =>
        axios.get(url).then((response) => {
          setArticles(response.data.hits);
          setLoading(false);
          console.log(response);
        }),
      2000
    );
    return () => clearTimeout(timer);
  };

  useEffect(() => fetchData(), [userInput]);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return loading ? (
    <div id="loading">
      <Header userInput={userInput} setUserInput={setUserInput} />
      <div id="spinner">
        <SpinnerDotted color="000000" />
      </div>
    </div>
  ) : (
    <div id="everything">
      <Header userInput={userInput} setUserInput={setUserInput} />
      <Articles articles={currentArticles} />
      <Pagination
        articlesPerPage={articlesPerPage}
        totalArticles={articles.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
