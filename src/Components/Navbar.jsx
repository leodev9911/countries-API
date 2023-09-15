import { useContext } from 'react'
import darkModeIcon from '../assets/icons/dark-mode.svg'
import lightModeIcon from '../assets/icons/light-mode.svg'
import './Navbar.css'
import { AppContext } from '../context/context'

export default function Navbar() {
    const { lightMode, setLightMode } = useContext(AppContext)
    const toggleLightMode = () => {
        setLightMode(!lightMode)
    }

    console.log(lightMode)

    return (
        <nav>
            <h1>Where in the world?</h1>
            <div onClick={toggleLightMode}>
                <img src={lightModeIcon} alt="Light mode icon" />
                <p>Dark Mode</p>
            </div>
        </nav>
    )
} 