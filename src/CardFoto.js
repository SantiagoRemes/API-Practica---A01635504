import React from 'react'

function CardFoto(props) {
  return (
    <div>
        <img src={props.url} alt='' width='500px' height='500px'/> {props.title}
    </div>
  )
}

export default CardFoto