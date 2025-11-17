import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Skills, Projects, Contact } from './components/Sections'

function Background() {
  return (
    <div className="fixed inset-0 -z-50 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_-20%,rgba(236,72,153,0.25),transparent),radial-gradient(800px_500px_at_90%_120%,rgba(34,211,238,0.25),transparent)]" />
      <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'white\' fill-opacity=\'0.2\'%3E%3Ccircle cx=\'1\' cy=\'1\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")' }} />
    </div>
  )
}

function Footer() {
  return (
    <footer className="py-10 text-center text-white/60">
      <p>© {new Date().getFullYear()} Your Name. Crafted with care and a hint of butterfly magic.</p>
    </footer>
  )
}

function App() {
  return (
    <div className="relative min-h-screen text-white">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
