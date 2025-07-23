import React, { useState, useEffect } from 'react'
import './MainContent.css'

const MainContent = () => {
  const [news, setNews] = useState([])
  const [highlights, setHighlights] = useState([])
  const [loading, setLoading] = useState(true)

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    const mockNews = [
      {
        id: 1,
        title: "ISRO Successfully Launches PSLV-C58 with XPoSat Mission",
        date: "2024-01-15",
        summary: "India's first dedicated polarimetry mission to study cosmic X-rays launched successfully."
      },
      {
        id: 2,
        title: "Gaganyaan Mission Updates: Crew Training Progresses",
        date: "2024-01-10",
        summary: "Astronaut candidates complete advanced training modules for upcoming human spaceflight mission."
      },
      {
        id: 3,
        title: "Chandrayaan-3 Data Reveals New Lunar Discoveries",
        date: "2024-01-05",
        summary: "Scientific instruments provide unprecedented insights into lunar south pole composition."
      }
    ]

    const mockHighlights = [
      {
        id: 1,
        title: "India Becomes 4th Nation to Land on Moon",
        description: "Chandrayaan-3's historic achievement opens new possibilities for lunar exploration.",
        image: "/images/chandrayaan-highlight.jpg"
      },
      {
        id: 2,  
        title: "104 Satellites in Single Launch Record",
        description: "PSLV-C37 creates world record by deploying 104 satellites in one mission.",
        image: "/images/pslv-highlight.jpg"
      },
      {
        id: 3,
        title: "Mars Orbiter Mission Success",
        description: "Mangalyaan makes India first nation to reach Mars orbit in maiden attempt.",
        image: "/images/mars-highlight.jpg"
      }
    ]

    setTimeout(() => {
      setNews(mockNews)
      setHighlights(mockHighlights)
      setLoading(false)
    }, 1000)
  }, [])

  const portals = [
    { name: "Bhuvan", description: "Geospatial Portal", url: "https://bhuvan.nrsc.gov.in/" },
    { name: "VEDAS", description: "Earth Observation Data", url: "https://vedas.sac.gov.in/" },
    { name: "ISRO Centres", description: "Facilities & Labs", url: "https://www.isro.gov.in/isro_centre.html" },
    { name: "Career Portal", description: "Join ISRO", url: "https://www.isro.gov.in/Careers.html" }
  ]

  if (loading) {
    return (
      <div className="main-content loading">
        <div className="loader">
          <div className="satellite-orbit">
            <div className="satellite"></div>
          </div>
          <p>Loading ISRO Updates...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="main-content">
      <div className="content-grid">
        <section className="news-section">
          <h2 className="section-title">Latest News</h2>
          <div className="news-list">
            {news.map(item => (
              <article key={item.id} className="news-item">
                <div className="news-date">{new Date(item.date).toLocaleDateString()}</div>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-summary">{item.summary}</p>
                <button className="read-more-btn">Read More</button>
              </article>
            ))}
          </div>
        </section>

        <section className="highlights-section">
          <h2 className="section-title">Highlights</h2>
          <div className="highlights-grid">
            {highlights.map(item => (
              <div key={item.id} className="highlight-card">
                <div className="highlight-image">
                  <img src={item.image} alt={item.title} onError={(e) => {
                    e.target.style.display = 'none'
                  }} />
                </div>
                <div className="highlight-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="updates-section">
          <h2 className="section-title">Recent Updates</h2>
          <div className="updates-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Gaganyaan Test Flight</h4>
                <p>Successful completion of crew escape system test</p>
                <span className="timeline-date">Jan 2024</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>XPoSat Launch</h4>
                <p>India's first X-ray polarimetry satellite deployed</p>
                <span className="timeline-date">Jan 2024</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Aditya-L1 Achievement</h4>
                <p>Successfully reached L1 Lagrange point</p>
                <span className="timeline-date">Dec 2023</span>
              </div>
            </div>
          </div>
        </section>

        <section className="portals-section">
          <h2 className="section-title">ISRO Portals</h2>
          <div className="portals-grid">
            {portals.map((portal, index) => (
              <a
                key={index}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portal-card"
              >
                <div className="portal-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3>{portal.name}</h3>
                <p>{portal.description}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default MainContent
