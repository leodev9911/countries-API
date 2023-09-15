import { useEffect, useState } from "react"
import data from "../../data.json"
import Card from "../Components/Card"
import Filters from "../Components/Filters"
import { useFilters } from "../hooks/useFilters.js"
import Navbar from "../Components/Navbar"



export default function App() {
    const [countries] = useState(data)
    const { filterCountries } = useFilters()
    
    const filteredCountries = filterCountries(countries)

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Filters />
                <section className="cards-section">
                    <Card 
                        countriesToRender={filteredCountries}
                    />
                </section>
            </main>
        </>
    )
}