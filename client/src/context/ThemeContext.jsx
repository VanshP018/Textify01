import React,{createContext,useState} from 'react'

export const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
  // true = light && false = dark
    const [theme, setTheme] = useState(true) 
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider