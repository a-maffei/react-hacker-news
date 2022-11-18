import {useState, useEffect} from 'react';

export default function StupidURL(props) {

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

    return (
    <h3>({props.articles.url})</h3>

    )
}