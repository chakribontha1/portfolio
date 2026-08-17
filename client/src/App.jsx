import { Suspense, lazy } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import LoadingScreen from './components/ui/LoadingScreen'
import { useGlassSpotlight } from './hooks/useGlassSpotlight'

const About      = lazy(() => import('./components/sections/About'))
const Skills     = lazy(() => import('./components/sections/Skills'))
const Experience = lazy(() => import('./components/sections/Experience'))
const Projects   = lazy(() => import('./components/sections/Projects'))
const Contact    = lazy(() => import('./components/sections/Contact'))

function App() {
  useGlassSpotlight()

  return (
    <div className="relative bg-bg min-h-screen">
      {/* Ambient backdrop the glass surfaces refract against */}
      <div className="ambient-bg" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<LoadingScreen />}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
