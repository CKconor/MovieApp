import React from 'react'
import styles from './styles'

const MovieCard = ({movie}) => {
    return (
        <div style={styles.card}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <span>{movie.vote_average}</span>
        </div>
    )
}

export default MovieCard
