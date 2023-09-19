import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import Card from '../Components/Card'
import data from '../../data.json'
import { useFilters } from '../hooks/useFilters.js'

export default function PaginatedItems ({ itemsPerPage }) {
  const countries = data

  const { filterCountries } = useFilters()
  const filteredCountries = filterCountries(countries)
  console.log(filteredCountries.length)

  const [itemOffset, setItemOffset] = useState(0)
  const endOffset = itemOffset + itemsPerPage
  console.log(`Loading items from ${itemOffset} to ${endOffset}`)
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
        <Card
               countriesToRender={currentItems}
        />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      </>
  )
}
