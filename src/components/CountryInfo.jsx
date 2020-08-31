import React, {useState, useEffect} from 'react'
import {Grid} from '@material-ui/core';
import axios from 'axios'

function CountryInfo(props) {
    const [infoCountry,
        setInfo] = useState([]);
    const infoUrl = `https://restcountries.eu/rest/v2/name/${props.name}?fullText=true`;
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
                    <Grid container direction='row'>
                        <Grid item md={6} xs={12}>
                            <img src={info.flag} alt="flag"/>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <h2>{info.name}</h2>
                            <Grid item md={6} xs={12}>
                                <h4>
                                    <strong>Native Name:
                                    </strong>
                                    {info.nativeName}</h4>

                                <h4>
                                    <strong>Population:
                                    </strong>
                                    {info.population}</h4>
                                <h4>
                                    <strong>Region:
                                    </strong>
                                    {info.region}</h4>
                                <h4>
                                    <strong>Sub Region:
                                    </strong>
                                    {info.subregion}</h4>
                                <h4>
                                    <strong>Capital:
                                    </strong>
                                    {info.capital}</h4>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <h4>
                                    <strong>Top Level Domain:
                                    </strong>
                                    {info.topLevelDomain}</h4>
                                <h4>
                                    <strong>Currencies:
                                    </strong>
                                    {info
                                        .currencies
                                        .map(currency => {
                                            return currency.name
                                        })}</h4>
                                <h4>
                                    <strong>Languages:
                                    </strong>
                                    {info
                                        .languages
                                        .map(language => {
                                            return language.name
                                        })}</h4>
                            </Grid>

                            <Grid container direction='row'>
                                <Grid item md={3} xs={12}>
                                    <h4><strong>Border Countries</strong></h4>

                                </Grid>
                                <Grid container md={9} xs={12}>
                                    {info.borders.map(border =>{
                                        return <h4>{border}</h4>
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
