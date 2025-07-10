import React, { useEffect, useState, useCallback } from "react";
import Card from "./Card";
import NewsSection from "./NewsSection";

function Newsapp() {
  const [search, setSearch] = useState("india");
  const [newData, setNewsData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  // const getData = async () => {
  //   const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    
  //   const jsonData = await response.json();
  //   setNewsData(jsonData.articles);
  // };

  const getData = async () => {
  try {
    const response = await fetch(`/api/news?query=${search}`);
    const jsonData = await response.json();
    setNewsData(jsonData.articles);
  } catch (error) {
    console.error("Error fetching from backend:", error);
    setNewsData([]);
  }
};


  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const userInput = (event) => {
    setSearch(event.target.value);
    getData();
  };

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >=
      document.documentElement.offsetHeight
    ) {
      setVisibleCount((prev) => prev + 3);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div>
      <nav>
        <h1>Trendy News</h1>
        <div className="navCenter">
          <div className="navTitle">Stay with TrendyNews</div>
          <div className="navCategoryBtns">
            <button value="sports" onClick={userInput}>Sports</button>
            <button value="politics" onClick={userInput}>Politics</button>
            <button value="entertainment" onClick={userInput}>Entertainment</button>
            <button value="health" onClick={userInput}>Health</button>
            <button value="fitness" onClick={userInput}>Fitness</button>
          </div>
        </div>
        <div className="searchBar">
          <input type="text" value={search} onChange={handleInput} placeholder="Search News" />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <div className="date">
        {new Date().toLocaleDateString("en-GB", {
          weekday: "long",
          day: "2-digit",
          month: "long",
        })}
      </div>

      {newData.length > 0 && <Card data={newData.slice(0, 5)} />}
      <h2 style={{ margin: "20px 0 10px 40px" }}>News</h2>
      <NewsSection data={newData.slice(5, 5 + visibleCount)} />
    </div>
  );
}

export default Newsapp;



