import React from 'react';

function NewsSection({ data }) {
  return (
    <div className="newsRow">
      {data.map((item, i) => (
        <div className="newsCard" key={i} onClick={() => window.open(item.url)}>
          <img src={item.urlToImage} alt="" />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsSection;

