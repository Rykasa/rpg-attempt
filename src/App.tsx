import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Map } from './pages/Map'

import { AuthContextProvider } from './contexts/AuthContext'

export function App(){
  return(
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
    
  )
}