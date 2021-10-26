import axios from 'axios';
import React, {useState, useEffect} from 'react'
import MovieCard from './components/MovieCard';
import styles from './styles'

const Body = () => {

    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const data  = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=8af822da7e32b7d57bdf02929316b468&language=en-US&page=1')
        setMovies(data.data.results);
    };

    useEffect(() => {
        fetchMovies()
    }, [])

    

    return (
        <div style={styles.block}>
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    )
}

export default Body
