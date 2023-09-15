import { createContext } from "react";
import { useState } from "react";


export const AppContext = createContext()


export function ContextProvider({ children }) {
    const [filters, setFilters] = useState({
        country: "",
        region: "all"
    })

    const [lightMode, setLightMode] = useState(false)

    return (
        <AppContext.Provider
            value={{
                filters,
                setFilters, 
                lightMode, 
                setLightMode
            }}
        >
            {children}
        </AppContext.Provider>
    )
}