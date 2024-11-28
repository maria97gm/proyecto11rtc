import React, { useEffect, useState } from 'react'
import './SerieInfo.css'
import { useNavigate, useParams } from 'react-router-dom'

const SerieInfo = ({ serieInfo }) => {
  const navigate = useNavigate()
  const { id } = useParams()

  return (
    <div>
      <li key={serieInfo?.id}>
        <div className='serie'>
          <img src={serieInfo?.image.medium} />
          <div className='serie-info'>
            <h1>{serieInfo?.name}</h1>
            <p>
              <strong>Puntuación por la audiencia:</strong>{' '}
              {serieInfo?.rating.average}
            </p>
            <p>
              <strong>Fecha de estreno:</strong> {serieInfo?.premiered}
            </p>
            <p>
              <strong>Breve resumen:</strong>{' '}
              {serieInfo?.summary.replace(/<[^>]+>/g, '')}
            </p>
            <button
              className='elenco'
              onClick={() => navigate(`/elenco/${id}`)}
            >
              Ver elenco
            </button>
            <button className='return' onClick={() => navigate(`/series`)}>
              Volver a todas las series
            </button>
          </div>
        </div>
      </li>
    </div>
  )
}

export default SerieInfo
