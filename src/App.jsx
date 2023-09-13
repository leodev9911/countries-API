import Home from "./Components/Home"
import { useEffect } from "react"
import data from "../data.json"

export default function App() {
    return (
        <>
            <header>
                <h1>Hello World!</h1>
            </header>
            <main>
                {data.map(country => {
                    return <Home 
                        key={country.numericCode} 
                        name={country.name} 
                        flag={country.flag} 
                        population={country.population} 
                        region={country.region} 
                        capital={country.capital} 
                    />
                })}
            </main>
        </>
    )
}