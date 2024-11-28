import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Serie.css'
import SerieInfo from '../../Components/SerieInfo/SerieInfo'

const Serie = () => {
  const { id } = useParams()
  const [serieInfo, setserieInfo] = useState()
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setserieInfo(res)
      })
  }, [])

  return <SerieInfo serieInfo={serieInfo} />
}

export default Serie
