import { Link } from 'react-router-dom'
import './Card.css'
import { React, useContext } from 'react'
import { AppContext } from '../context/context'

export default function Card ({ countriesToRender }) {
  const { lightMode } = useContext(AppContext)

  return (
        <>
            {countriesToRender.map(country => (
                <Link
                    to={`country-details/:${country.name}`}
                    state={{
                      country
                    }}
                    className={`cards ${lightMode ? 'light' : ''}`}
                    key={country.numericCode}
                >
                <img
                        src={country.flag}
                        alt={`${country.name} flag`} className="flags"
                />
                <div className="cards-info">
                    <h2 className={`cards-h2 ${lightMode ? 'light' : ''}`}>
                            {country.name}
                    </h2>
                    <p
                        className={`population ${lightMode ? 'light' : ''}`}
                    >
                        <span className={lightMode ? 'light' : ''}>Population:</span> {country.population.toLocaleString()}
                    </p>
                    <p
                        className={`population ${lightMode ? 'light' : ''}`}
                    >
                        <span className={lightMode ? 'light' : ''}>Region:</span> {country.region}
                    </p>
                    <p
                        className={`population ${lightMode ? 'light' : ''}`}
                    >
                        <span className={lightMode ? 'light' : ''}>Capital:</span> {country.capital}
                    </p>
                </div>
            </Link>
            ))}
        </>
  )
}
