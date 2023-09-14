import './style.css'
import App from './App'
import { createRoot } from "react-dom/client"
import { ContextProvider } from './context/context'

createRoot(document.getElementById('app')).render(
    <ContextProvider>
        <App/>
    </ContextProvider>
)