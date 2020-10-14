import React,{useState,useEffect} from 'react';
import axios from './axios';
import requests from './requests';

function Banner() {
    const [movie,setMovie] = useState([]);
    useEffect(() => {
        async function fetchData(){
const request = await axios.get(requests.fetchOriginals); 
setMovie(request.data.results[
    Math.floor(Math.random()*request.data.results.length -1)
])  
        }
        fetchData();
    }, [])

    console.log(movie); 
    return (
        <header className="banner">
            <div className="banner_contents"></div>
            {/* Background image */}
            {/* {Tittle} */}
            {/* Div > 2 buttons */}
            {/* Description */}
        </header>
    )
}

export default Banner
