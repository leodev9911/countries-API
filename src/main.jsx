import './style.css'
import App from './routes/App'
import { createRoot } from "react-dom/client"
import { ContextProvider } from './context/context'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import CountryDetails from './pages/CountryDetail';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "country-details/:name",
        element: <CountryDetails />
    }
])


createRoot(document.getElementById('app')).render(
    <ContextProvider>
        <RouterProvider router={router}/>
    </ContextProvider>
)