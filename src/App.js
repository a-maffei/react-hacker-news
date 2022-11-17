import "./App.css";
import Header from "./components/Header";
import {useState, useEffect} from 'react';
import axios from "axios";
import Articles from "./components/Articles";


function App() {
  const [userInput, setUserInput] = useState('');
  const [articles, setArticles] = useState([]);
  const url = `http://hn.algolia.com/api/v1/search?query=${userInput}&tags=story`
  
  const fetchData = () => {
    axios.get(url).then((response) => {
      setArticles(response.data.hits);
      console.log(response.data.hits)})}

    useEffect(() => {
      fetchData();
    }, [userInput]);

  return (
    <>
      <Header userInput={userInput} setUserInput={setUserInput}/>
      <Articles articles={articles}/>
    </>
  );
}

export default App;
