import React from 'react'
import Company from './components/Company'
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Company Name</h1>
      </header>

      <section className="home-dashboard">
        <h2>Company Dashboard</h2>
        <Company /> {/* Component showing job list from backend */}
      </section>
    </div>
  );
}

export default Home