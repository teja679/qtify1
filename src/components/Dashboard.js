import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Section from './Section'

function Dashboard() {
    return (
        <div className='dashboard' style={{
            backgroundColor: '#121212',
            display: 'flex', justifyContent: 'center', flexDirection: 'column'
        }}>
            <Navbar />
            <HeroSection />
            <Section />
        </div>
    )
}

export default Dashboard
