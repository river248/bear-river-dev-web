import { Routes, Route } from 'react-router-dom'

import './App.scss'
import LoginLayout from 'layouts/LoginLayout'
import MainLayout from 'layouts/MainLayout'

function App() {
  return (
    <Routes>
      <Route path='/account/*' element={<LoginLayout/>}/>
      <Route path='/*' element={<MainLayout/>}/>
    </Routes>
  )
}

export default App
