import React from 'react'
import { Image } from '../App'
interface Props{
    img:Image
    closeDet:()=>void
}
const CardDetails = ({img,closeDet}:Props) => {
  return (
    <div className='det'>
      <h2>img details</h2>
      <p>{img.id}</p>
      <button onClick={closeDet}>closeDetails</button>
    </div>
  )
}

export default CardDetails
