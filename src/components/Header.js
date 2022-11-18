import React from "react";
import "./header.css";
import {useState, useEffect} from 'react';
import axios from "axios";

export default function Header(props) {
  
  return (
    <div id="header-container">
      <div id="header-main"><div id="header-logo">
        <p>Y</p>
      </div>
      <h1 id="header-title">Hacker News</h1>
      </div> 
      <div id="header-search">
      <input type="text"
       value={props.userInput}
       onChange = {(e) => props.setUserInput(e.target.value)  }
      placeholder="Search.."></input>
    </div>
    </div>
  );
}
