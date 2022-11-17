import "./App.css";
import Header from "./components/Header";
import {useState, useEffect} from 'react';
import axios from "axios";
import Articles from "./components/Articles";
import { SpinnerDotted } from 'spinners-react'


function App() {
  const [userInput, setUserInput] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
 
  const url = `http://hn.algolia.com/api/v1/search?query=${userInput}&tags=story`
  
  const fetchData = () => {
    setLoading(true);
    const timer = setTimeout(() => axios.get(url).then((response) => {
      setArticles(response.data.hits);
      setLoading(false);
      console.log(response.data.hits)}), 2000);
      return () => clearTimeout(timer)}

    useEffect(() => fetchData(), [userInput]);

  return loading ? (
      <div id="loading">
        <Header userInput={userInput} setUserInput={setUserInput}/>
        <div id="spinner"><SpinnerDotted color="000000"/></div>
      </div> 
  ) : (
    <div id="everything">
      <Header userInput={userInput} setUserInput={setUserInput}/>
      <Articles articles={articles}/>
    </div>
  );
}

export default App;
