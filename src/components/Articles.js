import "./articles.css";
import {useState, useEffect} from 'react';
import up from "./up.png";
import Doggo from "./Doggo"
/* import StupidURL from "./StupidURL"; */

export default function Articles(props) {
  
  const formattedDate = props.articles.map(
    (article) =>
      (article.created_at = new Date(article.created_at).toLocaleDateString(
        "en-us",
        {
          year: "numeric",
          month: "short",
          day: "numeric",
        }
      ))
  );
  
  function isValidHttpUrl(string) {
    try {
      return Boolean(new URL(string));
    } catch (e) {
      return false;
    }
  }
 
 const articleUrl = props.articles.map(
    (article) => {
    if (isValidHttpUrl(article.url) === true) {
      article.url = new URL(article.url).hostname
    } else {
      return "no link";
      delete article.url;
    } }
  );

  return props.articles.length===0 ? (
    <div id="notfound">No articles found. Enjoy this picture of a cute dog instead!
    <Doggo />
    </div>
    ) : (
    props.articles.map((article) => (
    <div id="articles">
      <div id="articles-title">
      <p id="articles-number">{props.articles.indexOf(article)+1}.</p>
      <img src={up}></img>
      <h2
        style={{ cursor: "pointer", display: "inline-block" }}
        onClick={() => window.open(article.url, "_blank")}
      >
        {article.title}
      </h2>
      <h3>{article.url}</h3>
      </div>
      <div id="articles-stats">
      <p>{article.points} points by {article.author} on {article.created_at} |</p>
      <p
        id="hide"
        style={{ cursor: "pointer", display: "inline-block" }}
        > hide </p>
      <p>| {article.num_comments} comments</p>
      </div>
    </div>
  ))
  )
}
