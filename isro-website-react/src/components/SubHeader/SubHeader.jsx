import React, { useState, useEffect } from 'react'
import './SubHeader.css'

const SubHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  const navigationItems = [
    {
      title: 'About',
      items: [
        { name: 'Profile', url: 'https://www.isro.gov.in/profile.html' },
        { name: 'Vision-Mission-Objectives', url: 'https://www.isro.gov.in/Vision-Mission-Objectives.html' },
        { name: 'Citizen Charter', url: 'https://www.isro.gov.in/citizencharter.html' },
        { name: 'Organisational Structure', url: 'https://www.isro.gov.in/organisation.html' },
        { name: 'DoS Centers/Units/Enterprises', url: 'https://www.isro.gov.in/isro_centre.html' },
        { name: 'Secretary, DoS/ Chairman, ISRO', url: 'https://www.isro.gov.in/leadership.html' }
      ]
    },
    {
      title: 'Activities',
      items: [
        { name: 'Missions Accomplished', url: 'https://www.isro.gov.in/Mission.html' },
        { name: 'Upcoming Mission', url: 'https://www.isro.gov.in/FutureMissions.html' },
        { name: 'Science', url: 'https://www.isro.gov.in/Science.html' },
        { name: 'Launchers', url: 'https://www.isro.gov.in/Launchers.html' },
        { name: 'Satellites', url: 'https://www.isro.gov.in/Satellites.html' },
        { name: 'Research & Development', url: 'https://www.isro.gov.in/researchdevelopment.html' }
      ]
    },
    {
      title: 'Services',
      items: [
        { name: 'Launch Service', url: 'https://www.isro.gov.in/launchservices.html' },
        { name: 'Satellite: System, Bus, Sub-system, Testing', url: 'https://www.isro.gov.in/SatelliteSystemBusSubSystemTesting.html' },
        { name: 'Mission Support', url: 'https://www.isro.gov.in/missionsupport.html' },
        { name: 'Ground Systems Support', url: 'https://www.isro.gov.in/GroundSystemSupport.html' },
        { name: 'Satellite Communication & Lease of Transponders', url: 'https://www.isro.gov.in/SatelliteCommunicationApplications.html' },
        { name: 'Space based Earth observation: Bhuvan & Bhoonidhi', url: 'https://www.isro.gov.in/SpaceBasedEarthObservationServices.html' }
      ]
    },
    {
      title: 'Programmes',
      items: [
        { name: 'Academic Courses', url: 'https://www.isro.gov.in/AcademicCourses.html' },
        { name: 'Conference Grants', url: 'https://www.isro.gov.in/Conference_Grants.html' },
        { name: 'Fellowships', url: 'https://www.isro.gov.in/Fellowships.html' },
        { name: 'Space Merchandise', url: 'https://www.isro.gov.in/Merchandise.html' },
        { name: 'Space Tutor', url: 'https://www.isro.gov.in/spacetutor.html' },
        { name: 'Space on Wheels', url: 'https://www.isro.gov.in/SpaceOnWheels.html' }
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Atlases: River Basic', url: '#' },
        { name: 'Bhuvan', url: '#' },
        { name: 'Database for Emergency Management', url: '#' },
        { name: 'FEAST Tool', url: '#' },
        { name: 'I-grasp', url: '#' },
        { name: 'Info for Climate & Environment studies', url: '#' }
      ]
    },
    {
      title: 'Engagements',
      items: [
        { name: 'Academia', url: 'https://www.isro.gov.in/academia.html' },
        { name: 'Ask an Expert', url: 'https://www.isro.gov.in/ISROAPP/login.jsp' },
        { name: 'Educators', url: 'https://www.isro.gov.in/Educators.html' },
        { name: 'Industry', url: 'https://www.isro.gov.in/Industry.html' },
        { name: 'Internship & Projects', url: 'https://www.isro.gov.in/InternshipAndProjects.html' },
        { name: 'Join ISRO', url: 'https://www.isro.gov.in/Careers.html' }
      ]
    }
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
    // Implement search functionality here
  }

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight; // assumes HeroSection is 100vh
      setScrolledPastHero(window.scrollY > heroHeight - 100); // adjust the offset as needed
    };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className={`subheader ${scrolledPastHero ? 'scrolled' : ''}`}>
      <div className="left-section">
        <a
          className="isro-logo-link"
          href="https://www.isro.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="isro-logo"
            src="/images/isroLogo.png"
            alt="ISRO Logo"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        </a>
        <img
          className="emblem-of-india-logo"
          src="/images/emblemIndia.png"
          alt="Emblem of India"
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />
      </div>

      <div className="middle-section">
        <form onSubmit={handleSearch} className="search-form">
          <input
            className="search-bar"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </form>
      </div>

      <div className="right-section">
        <a className="home-hyperlink" href="#home">Home</a>
        <nav className="nav">
          {navigationItems.map((section, index) => (
            <div key={index} className={`nav-item nav${index + 1}`}>
              <p>{section.title} ⬇</p>
              <div className="drop-down-menu">
                {section.items.map((item, itemIndex) => (
                  <a
                    key={itemIndex}
                    href={item.url}
                    target={item.url.startsWith('http') ? '_blank' : '_self'}
                    rel={item.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default SubHeader
