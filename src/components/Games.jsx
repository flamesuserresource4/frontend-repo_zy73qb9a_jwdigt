import { useEffect, useState } from 'react'

const GAME_CARDS = [
  {
    title: 'Neon Drift',
    genre: 'Arcade • Racing',
    image: 'https://images.unsplash.com/photo-1696517505957-cb6b69868bb3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZW9uJTIwRHJpZnR8ZW58MHwwfHx8MTc2MzM2OTcyMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    desc: 'High-speed synthwave racing through neon-lit skylines with physics-based drifting.'
  },
  {
    title: 'Chrono Forge',
    genre: 'Action RPG',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
    desc: 'Craft time-bending weapons and rewrite destiny in a hand-painted world.'
  },
  {
    title: 'Starbound Echoes',
    genre: 'Adventure • Exploration',
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop',
    desc: 'Pilot your crew across uncharted galaxies in a narrative-driven space odyssey.'
  }
]

export default function Games() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section id="games" className="relative bg-gradient-to-b from-black to-gray-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Games</h2>
            <p className="mt-2 text-white/70 max-w-2xl">A curated look at our latest releases and fan favorites. Built with love, tuned for fun.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-black bg-white px-4 py-2 rounded-md hover:bg-white/90 transition">Work with us</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GAME_CARDS.map((game) => (
            <article key={game.title} className="group relative rounded-xl overflow-hidden bg-white/5 border border-white/10">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={game.image} alt={game.title} className={`h-full w-full object-cover transition duration-700 ${mounted ? 'scale-100' : 'scale-105'} group-hover:scale-110`} />
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-widest text-white/60">{game.genre}</div>
                <h3 className="mt-1 text-xl font-semibold">{game.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{game.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <a href="#" className="text-sm text-cyan-300 hover:text-cyan-200">Learn more</a>
                  <span className="text-xs text-white/50">PC • Console</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
