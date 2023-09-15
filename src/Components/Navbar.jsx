import darkModeIcon from '../assets/icons/dark-mode.svg'
import lightModeIcon from '../assets/icons/light-mode.svg'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <h1>Where in the world?</h1>
            <div>
                <img src={lightModeIcon} alt="Light mode icon" />
                <p>Dark Mode</p>
            </div>
        </nav>
    )
} 