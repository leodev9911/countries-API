import { Link, useLocation } from 'react-router-dom'
import { useId } from 'react'
import './CountryDetail.css'
import arrowBack from '../assets/icons/arrow-back.svg'
import Navbar from '../Components/Navbar'

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
        languages, borders 
    } = location.state.country

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
                                <p><span>Population:</span> {population}</p>
                                <p><span>Region:</span> {region}</p>
                                <p><span>Sub Region:</span> {subregion}</p>
                                <p><span>Capital:</span> {capital}</p>
                            </div>
                            <div className='right-details'>
                                <p><span>Top Level Domain:</span> {topLevelDomain}</p>
                                <p><span>Currencies:</span> {currencies.map(currencie => currencie.name)}</p>
                                <p><span>Languages: </span> {languages.map(language => language.name)}</p>
                            </div>
                        </div>
                        <p className='borders'>Border Countries: {
                        Array.isArray(borders) ? 
                            borders.map(country => {
                                const id = useId()
                                return (
                                    <span key={id}>{country}</span>
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