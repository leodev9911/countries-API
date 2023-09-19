import React, { useState, useContext } from 'react'
import ReactPaginate from 'react-paginate'
import Card from '../Components/Card'
import data from '../../data.json'
import { useFilters } from '../hooks/useFilters.js'
import './PaginatedItems.css'
import { AppContext } from '../context/context'

export default function PaginatedItems ({ itemsPerPage }) {
  const countries = data
  const { lightMode } = useContext(AppContext)

  const { filterCountries } = useFilters()
  const filteredCountries = filterCountries(countries)
  console.log(filteredCountries.length)

  const [itemOffset, setItemOffset] = useState(0)
  const endOffset = itemOffset + itemsPerPage
  const currentItems = filteredCountries.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(filteredCountries.length / itemsPerPage)

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredCountries.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    setItemOffset(newOffset)
  }

  return (
      <>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          breakClassName="break"
          containerClassName={`pagination ${lightMode ? 'light' : ''}`}
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
        <section className="cards-section">
            <Card
                countriesToRender={currentItems}
            />
        </section>
      </>
  )
}
