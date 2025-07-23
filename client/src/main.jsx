import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UserProvider from './context/UserContext.jsx'
import ThemeProvider from './context/ThemeContext.jsx'
import SelectedPersonProvider from './context/SelectedPersonContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider>
        <SelectedPersonProvider>
        <App />
      </SelectedPersonProvider>
      </ThemeProvider>
    </UserProvider>
  </StrictMode>,
)
