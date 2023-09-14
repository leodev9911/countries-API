import { useEffect, useState } from "react"
import data from "../data.json"
import Card from "./Components/Card"
import Filters from "./Components/Filters"
import { useFilters } from "./hooks/useFilters.js"



export default function App() {
    const [countries] = useState(data)
    const { filterCountries, setFilters } = useFilters()
    
    const filteredCountries = filterCountries(countries)

    return (
        <>
            <header>
                <h1>Hello World!</h1>
            </header>
            <main>
                <Filters changeFilter={setFilters}/>
                <Card 
                    countriesToRender={filteredCountries}
                />
            </main>
        </>
    )
}