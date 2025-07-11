import React from 'react'
import Header from '../../components/Header'
import Hero from './Hero'

import HowItWorks from './HowItWorks'
import Footer from '../../components/Footer'
import FeatureGallery from './FeatureGallery'
import CreatorSection from './CreatorSection'

const Home = () => {
  
  return (
    <>
    <section className='container'>
      <Header />
      <Hero />
      <FeatureGallery />
      <HowItWorks />
      <CreatorSection />
      <Footer />
    </section>
    </>
  )
}

export default Home