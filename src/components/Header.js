import React from "react";
import Searchbar from "./Searchbar";
import "./header.css";
import {useState, useEffect} from 'react';
import axios from "axios";

export default function Header(props) {
  
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
      <div>
      <input type="text"
       value={props.userInput}
       onChange = {(e) => props.setUserInput(e.target.value)  }
      placeholder="Search.."></input>
    </div>
    </div>
  );
}
