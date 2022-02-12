import { Routes, Route } from 'react-router-dom'

import './App.scss'
import MainLayout from 'layouts/MainLayout'
import AccountPage from 'pages/AccountPage/AccountPage'
import PublicRoute from 'components/Auth/PublicRoute'

function App() {
  return (
    <Routes>
      <Route element={<PublicRoute/>}>
        <Route path='/account/*'>
          <Route path='sign-in' element={<AccountPage/>}/>
          <Route path='sign-up' element={<AccountPage/>}/>
        </Route>
      </Route>
      <Route path='/*' element={<MainLayout/>}/>
    </Routes>
  )
}

export default App
