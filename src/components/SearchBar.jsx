import React, {useState, useEffect} from 'react'
import {Grid, FormControl, InputLabel, Select} from '@material-ui/core'
import './styles/App.css'

function SearchBar({background}) {
    const [state,
        setState] = useState('');

   function handleChange (e) {
    
    setState(e.target.value);
        
    };
  useEffect(() => {
    console.log(state);
  }, [state]);
    return (
        <div>
            <div className="search-cont" >
                <input type="text" style="font-family: ‘Font Awesome 5 Brands’;" placeholder='&#xf002;  Search for your country...'  style={{color: background?'hsl(0, 0%, 100%)' :'hsl(200, 15%, 8%)',backgroundColor: background?'hsl(209, 23%, 22%)' :'hsl(0, 0%, 100%)',border: background? 'none':'1px solid hsl(0, 0%, 52%)' }}
                  />
                <FormControl variant="filled"  style={{minWidth: 200, border: background? '':'1px solid hsl(0, 0%, 52%)'}} className='select'>
                    <InputLabel style={{color: background?'hsl(0, 0%, 100%)' :'hsl(200, 15%, 8%)'}} >Filter by Region</InputLabel>
                    <Select
                   style={{color: background?'hsl(0, 0%, 100%)' :'hsl(200, 15%, 8%)',backgroundColor: background?'hsl(209, 23%, 22%)' :'hsl(0, 0%, 100%)' }}
                        native
                        value={state}
                        onChange={handleChange}
                        >
                        <option style={{backgroundColor: background?'hsl(209, 23%, 22%)' :'hsl(0, 0%, 100%)' }} aria-label="None" value=""/>
                        <option style={{backgroundColor: background?'hsl(209, 23%, 22%)' :'hsl(0, 0%, 100%)' }}  value='Africa'>Africa</option>
                        <option style={{backgroundColor: background?'hsl(209, 23%, 22%)' :'hsl(0, 0%, 100%)' }}  value='America'>America</option>
                        <option style={{backgroundColor: background?'hsl(209, 23%, 22%)' :'hsl(0, 0%, 100%)' }}   value='Asia'>Asia</option>
                        <option style={{backgroundColor: background?'hsl(209, 23%, 22%)' :'hsl(0, 0%, 100%)' }} value='Europe'>Europe</option>
                        <option style={{backgroundColor: background?'hsl(209, 23%, 22%)' :'hsl(0, 0%, 100%)' }} value='Oceania'>Oceania</option>
                    </Select>
                </FormControl>

            </div>
        </div>
    )
}

export default SearchBar
