import { useEffect } from "react"

export default function Home(props) {
    return (
        <article>
            <img src={props.flag} alt={`${props.name} flag`} />
            <div>
                <h2>{props.name}</h2>
                <p>Population: {props.population}</p>
                <p>Region: {props.region}</p>
                <p>Capital: {props.capital}</p>
            </div>
        </article>
    )
}