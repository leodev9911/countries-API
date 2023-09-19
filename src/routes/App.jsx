import Navbar from '../Components/Navbar'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import CountryDetails from '../pages/CountryDetail'
import { AppContext } from '../context/context'
import { React, useContext } from 'react'

export default function App () {
  const { lightMode } = useContext(AppContext)

  return (
        <>
            <header className={lightMode ? 'light' : ''}>
                <Navbar />
            </header>
            <main className={lightMode ? 'light' : ''}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/country-details/:name" element={<CountryDetails />} />
                </Routes>
            </main>
        </>
  )
}
