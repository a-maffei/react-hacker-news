import React from "react";
import Searchbar from "./Searchbar";
import "./header.css";

export default function Header() {
  return (
    <div id="header-container">
      <div id="header-logo">
        <p>Y</p>
      </div>
      <h1 id="header-title">Hacker News</h1>
      <ul id="header-links">
        <li>alessandra</li>
        <li>ve</li>
        <li>dola</li>
      </ul>
      <Searchbar />
    </div>
  );
}
