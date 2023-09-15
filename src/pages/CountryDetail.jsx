import { Link, useLocation } from 'react-router-dom'
import { useId } from 'react'
import './CountryDetail.css'

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
        <section>
            <Link to={`/`}><button>Back</button></Link>
            <div className="country">
                <figure>
                    <img src={flag} alt="" />
                </figure>
                <div className='country-detail'>
                    <h1>{name}</h1>
                    <div className='columns'>
                        <div>
                            <p><span>Native Name:</span> {nativeName}</p>
                            <p><span>Population:</span> {population}</p>
                            <p><span>Region:</span> {region}</p>
                            <p><span>Sub Region:</span>{subregion}</p>
                            <p><span>Capital:</span> {capital}</p>
                        </div>
                        <div>
                            <p><span>Top Level Domain:</span> {topLevelDomain}</p>
                            <p><span>Currencies:</span> {currencies.map(currencie => currencie.name)}</p>
                            <p><span>Languages: </span> {languages.map(language => language.name)}</p>
                        </div>
                    </div>
                </div>
                <p>Border Countries: {
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
        </section>
    )
}