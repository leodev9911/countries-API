import { useContext, useEffect, useState } from "react"
import data from "../../data.json"
import Card from "../Components/Card"
import Filters from "../Components/Filters"
import { useFilters } from "../hooks/useFilters.js"
import Navbar from "../Components/Navbar"
import { AppContext } from "../context/context"



export default function App() {
    const [countries] = useState(data)
    const { filterCountries } = useFilters()
    const { lightMode } = useContext(AppContext)
    
    const filteredCountries = filterCountries(countries)

    

    return (
        <>
            <header className={lightMode ? "light" : ""}>
                <Navbar />
            </header>
            <main className={lightMode ? "light" : ""}>
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