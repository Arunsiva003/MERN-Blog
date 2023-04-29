import React, { useContext } from "react"
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { About } from './pages/about/About'
import { Regsiter } from "./pages/login/Regsiter"
import { DetailsPages } from "./pages/details/DetailsPages"
import { Account } from "./pages/account/Account"
import { Create } from "./components/create/Create"
import { Context } from "./context/Context"
import { BrowserRouter,Routes,Route } from "react-router-dom"

const App = () => {
  //after login
  const { user } = useContext(Context)
  return (
    <>
    <BrowserRouter>
        <Header />
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Regsiter/>} />
          <Route path='/post/:id' element={<DetailsPages/>} />
          <Route path='/account' element={<Account/>} />
          <Route path='/create' element={<Create/>} />
          <Route path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
