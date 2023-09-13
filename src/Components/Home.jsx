import "./Home.css"


export default function Home(props) {
    return (
        <article className="cards">
            <img src={props.flag} alt={`${props.name} flag`} className="flags"/>
            <div className="cards-info">
                <h2 className="cards-h2">{props.name}</h2>
                <p className="population"><span>Population:</span> {props.population}</p>
                <p className="region"><span>Region:</span>{props.region}</p>
                <p className="capital"><span>Capital:</span> {props.capital}</p>
            </div>
        </article>
    )
}