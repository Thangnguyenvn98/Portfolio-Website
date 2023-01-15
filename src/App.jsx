import React from 'react'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import FloatingNav from './components/floating-nav/FloatingNav'
import Portfolio from './components/portfolio/Porfolio'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <main>
    
    <Navbar/>
    <FloatingNav/>
    
    <Header/>
    <Experience/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </main>
  )
}

export default App