import React, { useState, useEffect } from 'react'
import './HeroSection.css'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const missions = [
    {
      title: "India's Cosmic Leap",
      description: "The Gaganyaan mission is the cornerstone of India's human spaceflight programme. Scheduled for launch in 2025-2026, it aims to send up to a three-member crew into low-Earth orbit for up to three days.",
      buttonText: "Explore Gaganyaan",
      link: "https://www.isro.gov.in/Gaganyaan.html",
      image: "/images/Gaganyaan.webp"
    },
    {
      title: "Chandrayaan Success",
      description: "Chandrayaan-3's successful lunar landing marked India as the fourth country to achieve this feat and the first to land near the Moon's south pole, opening new frontiers in lunar exploration.",
      buttonText: "Discover Chandrayaan",
      link: "https://www.isro.gov.in/Chandrayaan3.html",
      image: "/images/Chandrayaan3.PNG"
    },
    {
      title: "Aditya-L1 Solar Mission",
      description: "India's first dedicated solar mission to study the Sun's corona and solar wind, positioned at the L1 Lagrange point for continuous solar observations without eclipses.",
      buttonText: "Learn About Aditya-L1",
      link: "https://www.isro.gov.in/Aditya_L1.html",
      image: "/images/Aditya_L1.webp"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % missions.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [missions.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="hero-section">
      <div className="background-container">
        {missions.map((mission, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `linear-gradient(rgba(80, 101, 216, 0.3), rgba(0, 8, 33, 0.4)), url(${mission.image})`
            }}
          >
            <div className="mission-content">
              <h1 className="mission-header">{mission.title}</h1>
              <p className="mission-description">{mission.description}</p>
              <a href={mission.link} target="_blank" rel="noopener noreferrer">
                <button className="mission-details-button">
                  {mission.buttonText}
                </button>
              </a>
            </div>
          </div>
        ))}
        
        <div className="slide-indicators">
          {missions.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroSection