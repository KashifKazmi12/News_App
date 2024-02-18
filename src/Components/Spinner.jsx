import React from 'react'
import spinner from '../images/Pulse-1s-200px.gif'

const Spinner = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"70vh"}}>
      <img style={{borderRadius:'50%'}} src={spinner} alt="" />
    </div>
  )
}

export default Spinner
