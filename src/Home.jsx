//import React from 'react'
import { Link} from 'react-router-dom'
import './home.css'

function Home() {
  return (
    <div className='total-container'>
        <Link to={'./todo'}>
            <div className="TODOAPP"><span>ToDo</span></div>
        </Link>

        <Link to={'./candycrush'}>
            <div className="CANDY"><span>Candycrush</span></div>
        </Link>
      
    </div>
  )
}

export default Home

