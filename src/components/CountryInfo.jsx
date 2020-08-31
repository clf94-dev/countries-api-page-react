import React, {useState, useEffect} from 'react'
import {Grid} from '@material-ui/core/';
import axios from 'axios'

import './styles/App.css'

function CountryInfo({name, background}) {
    const [infoCountry,
        setInfo] = useState([]);
    const infoUrl = `https://restcountries.eu/rest/v2/name/${name}?fullText=true`;
    console.log(infoUrl);
    useEffect(() => {
        axios
            .get(infoUrl)
            .then(res => {
                setInfo(res.data);
                console.log(res.data);

            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            {infoCountry.map(info => {
                return (
                    <Grid
                        container
                        direction='row'
                        className='country-info-cont'
                        style={{
                        color: background
                            ? 'hsl(0, 0%, 100%)'
                            : 'hsl(200, 15%, 8%)',
                        backgroundColor: background
                            ? 'hsl(207, 26%, 17%)'
                            : 'hsl(0, 0%, 100%)'
                    }}>
                        <Grid item md={6} xs={12}>
                            <img src={info.flag} alt="flag"/>
                        </Grid>
                        <Grid item md={6} xs={12} className='text-cont'>
                            <h2>{info.name}</h2>
                            <Grid container direction='row'>
                                <Grid item md={6} xs={12}>
                                    <h4>
                                        <strong>Native Name: </strong>
                                        {info.nativeName}</h4>

                                    <h4>
                                        <strong>Population: </strong>
                                        {info.population}</h4>
                                    <h4>
                                        <strong>Region: </strong>
                                        {info.region}</h4>
                                    <h4>
                                        <strong>Sub Region: </strong>
                                        {info.subregion}</h4>
                                    <h4>
                                        <strong>Capital: </strong>
                                        {info.capital}</h4>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <h4><strong>Top Level Domain: </strong>{info.topLevelDomain}</h4>
                                    <h4 style={{marginRight: '5px'}}><strong>Currencies: </strong>{info.currencies.map(currency => {
                                                return currency.name
                                            })}</h4>
                                    <h4 style={{marginRight: '5px'}}><strong>Languages: </strong>{info
                                            .languages
                                            .map(language => {
                                                return language.name + ", "
                                            })}</h4>
                                </Grid>
                            </Grid>

                            <Grid container direction='row' style={{marginTop: '45px'}}>
                                <Grid item md={4} xs={12}>
                                    <h4>
                                        <strong>Border Countries:
                                        </strong>
                                    </h4>

                                </Grid>
                                <Grid container md={8} xs={12}>
                                    {info
                                        .borders
                                        .map(border => {
                                            return <h4
                                                className='border-countries'
                                                style={{
                                                color: background
                                                    ? 'hsl(0, 0%, 100%)'
                                                    : 'hsl(200, 15%, 8%)',
                                                backgroundColor: background
                                                    ? 'hsl(209, 23%, 22%)'
                                                    : 'hsl(0, 0%, 100%)',
                                                border: background
                                                    ? ''
                                                    : '1px solid hsl(0, 0%, 52%)'
                                            }}>{border}</h4>
                                        })}

                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                )
            })}

        </div>
    )
}

export default CountryInfo;
