import React, { useState,  useEffect  } from 'react'
import Card from './Card';

function Newsapp() {

    const[search, setSearch] = useState("india");
    const[newData, setNewsData] = useState(null);

    const API_KEY="ec1b8744c00147e8874fbff89016f250";
    // const API_KEY="81782751e0004b1a9024bd2086761e56";
    useEffect(() => {
        getData();
    }, []);
    const getData = async () =>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles)

    }
    const handleInput = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value);
    }

     const userInput = (event) =>{
        setSearch(event.target.value)
    }


  return (
    <div>
        <nav>
            <div>
                <h1>Trendy News</h1>
            </div>
            <ul>
                <a>News</a>
                <a>Trebding</a>
            </ul>
            <div className='searchBar'>
                <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
                <button onClick={getData}>Search</button>

            </div>
        </nav>
        <div className='head'>Stay with TrendyNews</div>
        <div className='categoryBtn'>
            <button onClick={userInput} value="sports">Sports</button>
            <button onClick={userInput} value="politics">Politics</button>
            <button onClick={userInput} value="entertainment">Entertainment</button>
            <button onClick={userInput} value="health">Health</button>
            <button onClick={userInput} value="fitness">Fitness</button>
        </div>
        <div>
            {newData? <Card data={newData}/>:null}
        </div>
    </div>
  )
}

export default Newsapp