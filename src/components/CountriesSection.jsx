import React, {useState, useEffect} from 'react';
import axios from 'axios'
import CountryCard from './CountryCard'
import {Grid} from '@material-ui/core';

function CountriesSection({background, searchState, filterState}) {
    const [countries,
        setCountries] = useState([]);



    const infoUrl = 'https://restcountries.eu/rest/v2/all';

    useEffect(() => {
        axios
            .get(infoUrl)
            .then(res => {
                setCountries(res.data);
                console.log(res.data);

            })
            .catch(error => console.log(error));
    }, []);


    const filteredCountries = (searchState !="") ? countries.filter(country => country.name.toLowerCase().includes(searchState.toLowerCase())) : countries.filter(country => country.region.includes(filterState))

    return (
        <div className='countries-cont'>
            <Grid container direction='row'>

                {filteredCountries.map(country => {
                    return (<CountryCard
                        key={country.numericCode}
                        name={country.name}
                        population={country.population}
                        flag={country.flag}
                        region={country.region}
                        capital={country.capital}
                        background={background}/>)
                })}
                {console.log(filteredCountries)}

            </Grid>
        </div>
    )
}

export default CountriesSection
