import "./Card.css"

export default function Card( {countriesToRender} ) {
    console.log(countriesToRender)

    return (
        <>
        {countriesToRender.map(country => (
            <article className="cards" key={country.numericCode}>
               <img src={country.flag} alt={`${country.name} flag`} className="flags"/>
               <div className="cards-info">
                   <h2 className="cards-h2">{country.name}</h2>
                   <p className="population"><span>Population:</span> {country.population}</p>
                   <p className="region"><span>Region:</span>{country.region}</p>
                   <p className="capital"><span>Capital:</span> {country.capital}</p>
               </div>
           </article>
        ))}
        </>
    )
}