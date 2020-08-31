import React from 'react'
import {Grid} from '@material-ui/core/'
import {Link} from 'react-router-dom'
import './styles/App.css'

function TopBar({background, setDarkMode}) {
    return (
        <nav style={{backgroundColor: background?'hsl(209, 23%, 22%)' :''}}>
            <div className="topbar-cont" style={{color: background?'hsl(0, 0%, 100%)' :'hsl(200, 15%, 8%)' }} >
                <Link to='/' className='navbar-logo' style={{color: background?'hsl(0, 0%, 100%)' :'hsl(200, 15%, 8%)'}}>
                    Where in the world?
                </Link>
                <div
                style={{backgroundColor: background?'hsl(209, 23%, 22%)' :'hsl(0, 0%, 100%)', border: background? '':'1px solid hsl(0, 0%, 52%)' }} 
                    className="dark-mode dark-mode-btn"
                    onClick={setDarkMode}>
                    <Grid container direction='row'>
                        {background?<i className= 'fas fa-moon'></i> :<i className='far fa-moon'></i>}
                        
                        <h3>Dark Mode</h3>
                    </Grid>
                </div>
            </div>
        </nav>
    )
}

export default TopBar;
