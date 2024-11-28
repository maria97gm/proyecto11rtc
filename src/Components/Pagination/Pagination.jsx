import React from 'react'
import './Pagination.css'

const Pagination = ({ page, setPage, totalItems, itemsPerPage }) => {
  const totalPages = totalItems / itemsPerPage

  return (
    <div className='paginacion'>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        {'<'}
      </button>

      <p>
        Página {page} de {totalPages}
      </p>

      <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
        {'>'}
      </button>
    </div>
  )
}

export default Pagination
