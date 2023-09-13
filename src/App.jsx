import { useEffect, useState } from "react"
import data from "../data.json"
import Card from "./Components/Card"
import Filters from "./Components/Filters"

export default function App() {
    const [countries] = useState(data)

    const [filters, setFilters] = useState({
        country: "",
        region: "all"
    })

    const filterCountries = (countries) => {
        return (
            countries.filter(country => {
                if (filters.country === "") {
                    return filters.region === "all" || country.region === filters.region
                            
                } else if (filters.country !== "") {
                    return country.name.toLowerCase().includes(filters.country.toLowerCase())  && 
                    (
                        filters.region === "all" ||
                        country.region === filters.region
                    )
                }
            })
        )
    }

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