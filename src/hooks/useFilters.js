import { useContext } from 'react'
import { AppContext } from '../context/context'

export function useFilters () {
  const { filters, setFilters } = useContext(AppContext)
  console.log(filters)

  const filterCountries = (countries) => {
    return (
      countries.filter(country => {
        return country.name.toLowerCase().includes(filters.country.toLowerCase()) &&
            (
              filters.region === 'all' ||
              country.region === filters.region
            )
      })
    )
  }

  return { filterCountries, setFilters }
}
