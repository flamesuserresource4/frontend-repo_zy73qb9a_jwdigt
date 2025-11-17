import { useState } from 'react'
import { Menu, X, Gamepad2 } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Games', href: '#games' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400">
              <Gamepad2 size={20} className="text-white" />
            </span>
            <span className="font-semibold tracking-tight">BlueFlames Games</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-black px-3 py-2 rounded-md font-medium hover:bg-white/90 transition">
              Get in touch
            </a>
          </nav>

          <button
            className="md:hidden text-white/90"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="flex flex-col gap-2 text-white/90">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="px-2 py-2 rounded hover:bg-white/10" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="mt-2 inline-flex items-center justify-center gap-2 bg-white text-black px-3 py-2 rounded-md font-medium">
                Get in touch
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
