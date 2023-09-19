import { useContext } from 'react'
import darkModeIcon from '../assets/icons/dark-mode.svg'
import lightModeIcon from '../assets/icons/light-mode.svg'
import './Navbar.css'
import { AppContext } from '../context/context'

export default function Navbar () {
  const { lightMode, setLightMode } = useContext(AppContext)
    const toggleLightMode = () => {
        setLightMode(!lightMode)
    }

    return (
        <nav>
            <h1 className={lightMode ? "light" : ""}>Where in the world?</h1>
            <div onClick={toggleLightMode}>
                <img 
                    src={lightMode ? darkModeIcon : lightModeIcon} 
                    className={lightMode ? "light" : ""} alt="Light mode icon" 
                />
                <p className={lightMode ? "light" : ""} >{lightMode ? 'Dark Mode' : 'Light Mode'}</p>
            </div>
        </nav>
    )
} 