import React from 'react'
import './styles/App.css'
import {Link} from 'react-router-dom'

function BackPage({background}) {
    return (
        <div className='back-btn-cont' style={{color: background?'hsl(0, 0%, 100%)' :'hsl(200, 15%, 8%)',backgroundColor: background?'hsl(207, 26%, 17%)' :'hsl(0, 0%, 100%)' }}>
           <Link to='/'> 
           <button className='back-btn' style={{color: background?'hsl(0, 0%, 100%)' :'hsl(200, 15%, 8%)',backgroundColor: background?'hsl(209, 23%, 22%)' :'hsl(0, 0%, 100%)',border: background? '':'1px solid hsl(0, 0%, 52%)'}}><i className="fas fa-arrow-left"></i> Back</button>
           </Link>
        </div>
    )
}

export default BackPage
