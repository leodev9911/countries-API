import { useState, useEffect } from "react"

export function useCountries() {
    const [data, setData] = useState([])

    useEffect(() => {
        console.log("hola")
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => {
                const data1 = data
                setData(data1)
            })
    }, [])

    return data 
}