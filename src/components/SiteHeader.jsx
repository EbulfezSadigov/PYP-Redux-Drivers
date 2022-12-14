import React from 'react'
import { Link } from 'react-router-dom'

const SiteHeader = () => {
  return (
    <div>
        <ul style={{ display: 'flex', justifyContent: 'space-evenly', listStyle:'none'}}>
            <li><Link to='/' style={{fontSize:40}}>Home</Link></li>
            <li><Link to='/cart' style={{fontSize:40}}>Cart</Link></li>
        </ul>
    </div>
  )
}

export default SiteHeader