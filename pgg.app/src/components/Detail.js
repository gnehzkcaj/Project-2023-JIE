import './Detail.css';
import { useState, useEffect } from "react";

export default function Detail() {
    const [movie, setMovie] = useState({});
    const MOVIE_KEY = process.env.REACT_APP_MOVIE_KEY;


    console.log(MOVIE_KEY);
    useEffect(() => {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${MOVIE_KEY}`)
            .then(response => response.json())
            .then(data => setMovie(data));
    }, [MOVIE_KEY]);

    return (
        <div className="detail">
            <h1>{movie.Title}</h1>
            <img src={movie.Poster} alt={movie.Title} />
            <p>{movie.Plot}</p>
        </div>
    );
}