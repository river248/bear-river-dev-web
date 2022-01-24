import LoginLayout from 'layouts/LoginLayout'
import MainLayout from 'layouts/MainLayout'
import { Routes, Route } from 'react-router-dom'

import './App.scss'


function App() {
  return (
    <Routes>
      <Route path='/account/*' element={<LoginLayout/>}/>
      <Route path='/*' element={<MainLayout/>}/>
    </Routes>
  )
}

export default App
