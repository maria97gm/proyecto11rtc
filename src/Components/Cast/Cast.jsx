import React from 'react'

const Cast = ({ personaje }) => {
  return (
    <div>
      <li>
        <div className='vs'>
          <div className='real'>
            <h2>Realidad</h2>
            <img src={personaje?.person.image?.medium} />
            <h3>Nombre real</h3>
            <p>{personaje?.person.name}</p>
          </div>
          <div className='fiction'>
            <h2>Ficción</h2>
            <img src={personaje?.character.image?.medium} />
            <h3>Nombre en la serie</h3>
            <p>{personaje?.character.name}</p>
          </div>
        </div>
      </li>
    </div>
  )
}

export default Cast
