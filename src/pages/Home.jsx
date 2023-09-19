import Card from "../Components/Card"
import data from "../../data.json"
import Filters from "../Components/Filters"
import { useFilters } from "../hooks/useFilters.js"

export default function Home() {

    const countries = data

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