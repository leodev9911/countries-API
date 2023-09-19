import Filters from '../Components/Filters'
import React from 'react'
import PaginatedItems from '../Components/PaginatedItems'



export default function Home () {


  return (
    <>
        <Filters />
        <section className="cards-section">
            <PaginatedItems itemsPerPage={20} />
        </section>
    </>
  )
}
