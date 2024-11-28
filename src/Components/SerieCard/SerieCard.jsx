import React from 'react'
import './SerieCard.css'
import { Link } from 'react-router-dom'

const SerieCard = ({ serie }) => {
  return (
    <div className='seriecard'>
      <li>
        <Link to={`/serie/${serie.id}`}>
          <img src={serie.image?.medium} alt={serie.name} />
        </Link>
        <h2>{serie.name}</h2>
        <h3>Géneros: {serie.genres.join(', ')}</h3>
      </li>
    </div>
  )
}

export default SerieCard
