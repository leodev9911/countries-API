import { useContext, useEffect, useState } from "react"
import data from "../../data.json"
import Card from "../Components/Card"
import Filters from "../Components/Filters"
import { useFilters } from "../hooks/useFilters.js"
import { AppContext } from "../context/context"

export default function Home() {
    const [countries] = useState(data)
    const { filterCountries } = useFilters()
    
    const filteredCountries = filterCountries(countries)

    return (
        <>
            <Filters /> 
            <section className="cards-section">
                <Card 
                    countriesToRender={filteredCountries}
                />
            </section>
        </>
    )
}