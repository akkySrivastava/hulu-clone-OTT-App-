import React, { useState } from "react";
import requests from "./Request";
import "./css/Navbar.css";

function Navbar({ setSelectedOption }) {
  const [activeKey, setActiveKey] = useState(1);
  return (
    <div className="navbar">
      <h3
        className={activeKey === 1 && `active`}
        onClick={() => {
          setActiveKey(1);
          setSelectedOption(requests.fetchTrending);
        }}
      >
        Trending
      </h3>
      <h3
        className={activeKey === 2 && `active`}
        onClick={() => {
          setActiveKey(2);
          setSelectedOption(requests.fetchTopRated);
        }}
      >
        Top Rated
      </h3>
      <h3
        className={activeKey === 3 && `active`}
        onClick={() => {
          setActiveKey(3);
          setSelectedOption(requests.fetchActionMovies);
        }}
      >
        Action
      </h3>
      <h3
        className={activeKey === 4 && `active`}
        onClick={() => {
          setActiveKey(4);
          setSelectedOption(requests.fetchComedyMovies);
        }}
      >
        Comedy
      </h3>
      <h3
        className={activeKey === 5 && `active`}
        onClick={() => {
          setActiveKey(5);
          setSelectedOption(requests.fetchHorroMovies);
        }}
      >
        Horror
      </h3>
      <h3
        className={activeKey === 6 && `active`}
        onClick={() => {
          setActiveKey(6);
          setSelectedOption(requests.fetchRomanticMovies);
        }}
      >
        Romance
      </h3>
      <h3
        className={activeKey === 7 && `active`}
        onClick={() => {
          setActiveKey(7);
          setSelectedOption(requests.fetchMystery);
        }}
      >
        Mystery
      </h3>
      <h3
        className={activeKey === 8 && `active`}
        onClick={() => {
          setActiveKey(8);
          setSelectedOption(requests.fetchSciFi);
        }}
      >
        Sci-fi
      </h3>
      <h3
        className={activeKey === 9 && `active`}
        onClick={() => {
          setActiveKey(9);
          setSelectedOption(requests.fetchWestern);
        }}
      >
        Western
      </h3>
      <h3
        className={activeKey === 10 && `active`}
        onClick={() => {
          setActiveKey(10);
          setSelectedOption(requests.fetchAnimation);
        }}
      >
        Animation
      </h3>
      <h3
        className={activeKey === 11 && `active`}
        onClick={() => {
          setActiveKey(11);
          setSelectedOption(requests.fetchTV);
        }}
      >
        Movie
      </h3>
    </div>
  );
}

export default Navbar;
