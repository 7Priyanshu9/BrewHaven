import React from 'react'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Menu from './Components/Menu'
import About from './Components/About'
import Products from './Components/Products'
import Review from './Components/Review'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Menu/>
      <About/>
      <Products/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default App
