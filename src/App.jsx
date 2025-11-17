import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Games from './components/Games'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Games />
        <About />
        <Contact />
        <footer className="bg-black text-white/60 border-t border-white/10 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm">© {new Date().getFullYear()} BlueFlames Games. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">Discord</a>
              <a href="#" className="hover:text-white">Press Kit</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
