import React from 'react'
import {Grid} from '@material-ui/core/';
import './styles/App.css'

import {Link} from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

function CountryCard({
    name,
    population,
    flag,
    region,
    capital,
    background
}) {
    return (
        <div data-aos="zoom-in-right" data-aos-duration="1000">
            <Grid item md={3} xs={12}>
                <Link
                    to={`/country/${name}`}
                    style={{
                    textDecoration: 'none'
                }}>
                    <Grid
                        container
                        direction='column'
                        className='card-cont'
                        style={{
                        backgroundColor: background
                            ? 'hsl(209, 23%, 22%)'
                            : 'hsl(0, 0%, 100%)',
                        color: background
                            ? 'hsl(0, 0%, 100%)'
                            : 'hsl(200, 15%, 8%)'
                    }}>
                        <img src={flag} alt="flag"/>

                        <Grid container direction='column' className='text-cont'>
                            <h3>{name}</h3>
                            <h4>
                                <strong>Population: </strong>
                                {population}</h4>
                            <h4>
                                <strong>Region: </strong>
                                {region}</h4>
                            <h4>
                                <strong>Capital: </strong>
                                {capital}</h4>
                        </Grid>
                    </Grid>
                </Link>
            </Grid>
        </div>
    )
}

export default CountryCard;
