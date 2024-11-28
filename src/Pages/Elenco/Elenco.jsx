import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Elenco.css'
import Cast from '../../Components/Cast/Cast'

const Elenco = () => {
  const { id } = useParams()
  const [elenco, setElenco] = useState([])
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}/cast`)
      .then((res) => res.json())
      .then((res) => {
        setElenco(res)
      })
  }, [])
  return (
    <div>
      {elenco.map((personaje) => (
        <Cast key={personaje?.person.id} personaje={personaje} />
      ))}
    </div>
  )
}

export default Elenco
