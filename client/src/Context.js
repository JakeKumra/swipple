import {React, useEffect, useState, createContext} from 'react'

const myContext = createContext('')

function ContextProvider({children}) {

    const[beverages, setBeverages] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3001/api/beverages")
        .then(res => res.json())
        .then(data => setBeverages(data))
    }, [])

    return (
        <myContext.Provider value={{beverages}}>
            {children}
        </myContext.Provider>
    )
}

export {ContextProvider, myContext}