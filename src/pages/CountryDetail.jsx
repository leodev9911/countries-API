import { Link, useLocation } from 'react-router-dom'
import { useId } from 'react'
import './CountryDetail.css'
import arrowBack from '../assets/icons/arrow-back.svg'
import Navbar from '../Components/Navbar'
import data from '../../data.json'

export default function CountryDetails() {

    const location = useLocation()
    const { 
        flag, 
        name, 
        nativeName, 
        population, 
        region, 
        subregion, 
        capital, 
        topLevelDomain, 
        currencies, 
        languages, 
        borders 
    } = location.state.country

    const bordersCountries = []
    const languagesArr = languages.map(language => language.name)
    const currenciesArr = currencies.map(currencie => currencie.name)

    data.map(country => {
        borders?.map(borderCountry => {
            if (country.alpha3Code === borderCountry) {
                bordersCountries.push(country)
            }
        })
    })

    return (
        
        <>
            <header>
                <Navbar />
            </header>
            <section className='country-details__section'>
                <Link to={`/`}>
                    <div className='home-link'>
                        <img src={arrowBack} alt="Arrow back icon" />
                        Back
                    </div>
                </Link>
                <div className="country">
                    <figure>
                        <img src={flag} alt={`${name} flag`} />
                    </figure>
                    <div className='country-detail'>
                        <h1>{name}</h1>
                        <div className='columns'>
                            <div className='left-details'>
                                <p><span>Native Name:</span> {nativeName}</p>
                                <p><span>Population:</span> {population.toLocaleString()}</p>
                                <p><span>Region:</span> {region}</p>
                                <p><span>Sub Region:</span> {subregion}</p>
                                <p><span>Capital:</span> {capital}</p>
                            </div>
                            <div className='right-details'>
                                <p><span>Top Level Domain:</span> {topLevelDomain}</p>
                                <p><span>Currencies:</span> {currenciesArr.join(', ')}</p>
                                <p><span>Languages: </span>{languagesArr?.join(', ')}</p>
                            </div>
                        </div>
                        <p className='borders'>Border Countries: {
                        Array.isArray(borders) ? 
                            bordersCountries.map(country => {
                                return (
                                    <Link 
                                        key={country.alpha2Code} 
                                        to={`/country-details/:${country.name}`}
                                        state={{
                                            country
                                        }}
                                    >
                                        {country.name}
                                    </Link>
                                )
                            }) : 
                            "None"
                        }
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}