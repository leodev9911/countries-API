import { createContext } from "react";
import { useState } from "react";


export const AppContext = createContext()


export function ContextProvider({ children }) {
    const [filters, setFilters] = useState({
        country: "",
        region: "all"
    })

    return (
        <AppContext.Provider
            value={{
                filters,
                setFilters, 
            }}
        >
            {children}
        </AppContext.Provider>
    )
}