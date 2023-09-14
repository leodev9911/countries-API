import { useState } from "react"

export function useFilters() {
    const [filters, setFilters] = useState({
        country: "",
        region: "all"
    })

    const filterCountries = (countries) => {
        return (
            countries.filter(country => {
                return country.name.toLowerCase().includes(filters.country.toLowerCase()) && 
                (
                    filters.region === "all" ||
                    country.region === filters.region
                )
            })
        )
    }

    return { filterCountries, setFilters }
}