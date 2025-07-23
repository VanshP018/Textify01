import React,{createContext, useState} from 'react'

export const SelectedPersonContext = createContext()

const SelectedPersonProvider = ({children}) => {
    const [person,setPerson] = useState(null)
    
  return (
    <SelectedPersonContext.Provider value={{person,setPerson}}>
        {children}
    </SelectedPersonContext.Provider>
)
}

export default SelectedPersonProvider