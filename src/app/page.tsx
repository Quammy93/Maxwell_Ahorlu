"use client";

import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Resume from '../components/Resume'
import Certificates from '../components/Certificates'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Resume />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  )
}