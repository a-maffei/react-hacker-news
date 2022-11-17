import {useState, useEffect} from 'react';

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


  
  return props.articles.length===0 ? (
    <div>No articles found</div>
    ) : (
    props.articles.map((article) => (
    <div id="articles">
      <h2
        style={{ cursor: "pointer", display: "inline-block" }}
        onClick={() => window.open(article.url, "_blank")}
      >
        {article.title}
      </h2>
      <p>
        {article.points} points by {article.author} on {article.created_at} |
        hide | {article.num_comments} comments
      </p>
    </div>
  ))
  )
}
