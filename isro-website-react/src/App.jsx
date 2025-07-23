import React from 'react'
import Header from './components/Header/Header'
import SubHeader from './components/SubHeader/SubHeader'
import HeroSection from './components/HeroSection/HeroSection'
import MainContent from './components/MainContent/MainContent'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <HeroSection />
      <MainContent />
    </div>
  )
}

export default App