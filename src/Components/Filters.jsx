
export default function Filters({ changeFilter }) {
  
    const handleCountry = (event) => {
        changeFilter(prev => ({
            ...prev,
            country: event.target.value
        }))
    }

    const handleRegion = (event) => {
        changeFilter(prev => ({
            ...prev,
            region: event.target.value
        }))
    }

    return (
        <section className="filters-section">
            <div>
                <label htmlFor="search-country">Search</label>
                <img src="" alt="" />
                <input 
                    id="search-country"
                    type="text" 
                    placeholder="country" 
                    onChange={handleCountry}
                />
            </div>
            <div>
                <label htmlFor="region">Filter by region</label>
                <select id="region" onChange={handleRegion}>
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