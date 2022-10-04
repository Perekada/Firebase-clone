import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({children}) => {
    const [isSidebar, setIsSidebar] = useState(false);
    const [isSubmenu, setIsSubmenu] = useState(false)
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({page:'', links:[]})

    const openSidebar = () =>{
        setIsSidebar(true)
    }

    const closeSidebar = () =>{
        setIsSidebar(false)
    }

    const openSubmenu = (text,coordinates) =>{
        const page = sublinks.find((link)=> link.page === text)
        setPage(page)
        setLocation(coordinates)
        setIsSubmenu(true)
    }

    const closeSubmenu = () =>{
        setIsSubmenu(false)
    }
    return <AppContext.Provider value={{
        isSidebar,
        isSubmenu,
        openSubmenu,
        openSidebar,
        closeSubmenu,
        closeSidebar,
        location,
        page
    }}>{children}</AppContext.Provider>
}

export const useGlobal = () =>{
    return useContext(AppContext)
}