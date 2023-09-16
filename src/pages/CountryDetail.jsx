import { Link, useLocation } from 'react-router-dom'
import './CountryDetail.css'
import arrowBack from '../assets/icons/arrow-back.svg'
import Navbar from '../Components/Navbar'
import data from '../../data.json'
import { useContext } from 'react'
import { AppContext } from '../context/context'

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

    const { lightMode } = useContext(AppContext)

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
            <header className={lightMode ? "light" : ""}>
                <Navbar />
            </header>
            <section className={`country-details__section ${lightMode ? "light" : ""}`}>
                <Link to={`/`}>
                    <div className={`home-link ${lightMode ? "light" : ""}`}>
                        <img 
                            className={lightMode ? "light" : ""}
                            src={arrowBack} 
                            alt="Arrow back icon" 
                        />
                        Back
                    </div>
                </Link>
                <div className="country">
                    <figure>
                        <img src={flag} alt={`${name} flag`} />
                    </figure>
                    <div className='country-detail'>
                        <h1 className={lightMode ? "light" : ""}>{name}</h1>
                        <div className='columns'>
                            <div className='left-details'>
                                <p className={lightMode ? "light" : ""}><span className={lightMode ? "light" : ""}>Native Name:</span> {nativeName}</p>
                                <p className={lightMode ? "light" : ""}><span className={lightMode ? "light" : ""}>Population:</span> {population.toLocaleString()}</p>
                                <p className={lightMode ? "light" : ""}><span className={lightMode ? "light" : ""}>Region:</span> {region}</p>
                                <p className={lightMode ? "light" : ""}><span className={lightMode ? "light" : ""}>Sub Region:</span> {subregion}</p>
                                <p className={lightMode ? "light" : ""}><span className={lightMode ? "light" : ""}>Capital:</span> {capital}</p>
                            </div>
                            <div className='right-details'>
                                <p className={lightMode ? "light" : ""}><span className={lightMode ? "light" : ""}>Top Level Domain:</span> {topLevelDomain}</p>
                                <p className={lightMode ? "light" : ""}><span className={lightMode ? "light" : ""}>Currencies:</span> {currenciesArr.join(', ')}</p>
                                <p className={lightMode ? "light" : ""}><span className={lightMode ? "light" : ""}>Languages: </span>{languagesArr?.join(', ')}</p>
                            </div>
                        </div>
                        <p className={`borders ${lightMode ? "light" : ""}`}>Border Countries: {
                        Array.isArray(borders) ? 
                            bordersCountries.map(country => {
                                return (
                                    <Link
                                        className={lightMode ? "light" : ""} 
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