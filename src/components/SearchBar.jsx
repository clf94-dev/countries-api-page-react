import React, {useState} from 'react'
import {Grid, FormControl, InputLabel, Select} from '@material-ui/core'
import './styles/App.css'

function SearchBar({background}) {
    const [state,
        setState] = useState('');

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value
        });
    };
    return (
        <div>
            <div className="search-cont">
                <input type="text" placeholder='Search'/>
                <FormControl variant="filled" >
                    <InputLabel htmlFor="filled-age-native-simple">Filter by Region</InputLabel>
                    <Select
                        native
                        value={state.age}
                        onChange={handleChange}
                        inputProps={{
                        name: 'age',
                        id: 'filled-age-native-simple'
                    }}>
                        <option aria-label="None" value=""/>
                        <option value={10}>Africa</option>
                        <option value={20}>America</option>
                        <option value={30}>Asia</option>
                        <option value={40}>Europe</option>
                        <option value={50}>Oceania</option>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default SearchBar
