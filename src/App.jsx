import { memo } from 'react'
import './App.css'
import { DarkModeProvider } from './contexts/DarkModeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <DarkModeProvider>
      <div className="w-full min-h-screen overflow-x-hidden bg-white dark:bg-black transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </DarkModeProvider>
  )
}

export default memo(App)
