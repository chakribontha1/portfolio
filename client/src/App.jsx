import { Suspense, lazy } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'

const About      = lazy(() => import('./components/sections/About'))
const Skills     = lazy(() => import('./components/sections/Skills'))
const Projects   = lazy(() => import('./components/sections/Projects'))
const Experience = lazy(() => import('./components/sections/Experience'))
const Contact    = lazy(() => import('./components/sections/Contact'))

const Skeleton = () => <div className="py-24 flex justify-center"><div className="flex gap-1.5">{[0,1,2].map(i=><div key={i} className="w-2 h-2 rounded-full bg-accent/40 animate-bounce" style={{animationDelay:`${i*0.1}s`}}/>)}</div></div>

function App() {
  return (
    <div className="relative bg-[#05070F] min-h-screen">
      {/* Noise overlay */}
      <div className="noise" />
      {/* Global ambient glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[600px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle at 80% 20%, rgba(110,231,183,0.06) 0%, transparent 60%)' }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle at 20% 80%, rgba(52,211,153,0.05) 0%, transparent 60%)' }} />
      </div>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<Skeleton />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
