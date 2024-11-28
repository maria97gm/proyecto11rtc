import React, { useEffect, useState } from 'react'
import Loading from '../../Components/Loading/Loading'
import SerieCard from '../../Components/SerieCard/SerieCard'
import Pagination from '../../Components/Pagination/Pagination'
import './Series.css'

const Series = () => {
  const [series, setSeries] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const itemsPerPage = 12

  useEffect(() => {
    setLoading(true)
    fetch('https://api.tvmaze.com/shows')
      .then((res) => res.json())
      .then((res) => {
        setSeries(res)
        setTimeout(() => {
          setLoading(false)
        }, '1000')
      })
  }, [])

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentSeries = series.slice(startIndex, endIndex)

  return (
    <>
      <h1 className='titulo-series'>Todas nuestras series</h1>
      <div className='series'>
        {currentSeries.map((serie) => (
          <SerieCard key={serie.id} serie={serie} />
        ))}
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        totalItems={series.length}
        itemsPerPage={itemsPerPage}
      />
    </>
  )
}

export default Series
