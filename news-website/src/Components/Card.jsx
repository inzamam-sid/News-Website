import React from 'react';

function Card({ data }) {
  const featured = data[0];
  const sideCards = data.slice(1, 5);

  return (
    <div className="newsWrapper">
      <div className="featuredArticle">
        <img src={featured?.urlToImage} alt="" />
        <h2 onClick={() => window.open(featured?.url)}>{featured?.title}</h2>
        <p>{featured?.description}</p>
      </div>

      <div className="gridArticles">
        {sideCards.map((item, index) => (
          <div
            className="gridCard"
            key={index}
            onClick={() => window.open(item.url)}
          >
            <img src={item.urlToImage} alt="" />
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;




