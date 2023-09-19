import './style.css'
import App from './routes/App'
import { createRoot } from "react-dom/client"
import { ContextProvider } from './context/context'
import {
    BrowserRouter,
  } from "react-router-dom";

createRoot(document.getElementById('app')).render(
    <ContextProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ContextProvider>
)