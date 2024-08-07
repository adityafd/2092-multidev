import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Home/>
      <Services/>
      <About/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App