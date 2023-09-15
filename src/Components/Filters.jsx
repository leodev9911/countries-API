import { useContext } from 'react'
import { AppContext } from '../context/context'
import searchIcon from '../assets/icons/search.svg'
import arrowDown from '../assets/icons/expand-more.svg'
import './Filters.css'

export default function Filters() {

    const { setFilters } = useContext(AppContext)

    const handleCountry = (event) => {
        setFilters(prev => ({
            ...prev,
            country: event.target.value
        }))
    }

    const handleRegion = (event) => {
        setFilters(prev => ({
            ...prev,
            region: event.target.value
        }))
    }

    return (
        <section className="filters-section">
            <div className='search-div'>
                <img src={searchIcon} alt="Search icon" />
                <input 
                    id="search-country"
                    type="text" 
                    placeholder="Search for a country..." 
                    onChange={handleCountry}
                />
            </div>
            <div className='select-div'>
                <select id="region" onChange={handleRegion} defaultValue="">
                    <option value="" disabled>Filter by region</option>
                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    )
}