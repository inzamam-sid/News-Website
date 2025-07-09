import React from 'react'
// import Newsapp from './Newsapp'

function Card({data}) {
    console.log(data);
      if (!data) return <p>Loading news...</p>;
    const readMore = (url) =>{
        window.open(url)
     }
  return (
    <div className='cardContainer'>

        {data.map((curItem,index)=>{
            return(
              <div className='card'> 
              <img src={curItem.urlToImage}/>
              <div className='cardContent'>
                <a className='title' onClick={()=>window.open(curItem.url)}>{curItem.title}</a>
                <p>{curItem.description}</p>
                <button onClick={()=>window.open(curItem.url)}>Read More</button>
                 </div>


              </div>

            )
        })}
        
    </div>
  )
}

export default Card