import { useState } from 'react'
import { Menu, X, Butterfly } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_8px_30px_rgb(2,6,23,0.08)] rounded-2xl">
          <div className="flex items-center justify-between px-6 py-3">
            <a href="#" className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-400 via-violet-400 to-cyan-400 rounded-xl blur-[10px] opacity-80" />
                <div className="relative bg-black/70 border border-white/20 rounded-xl p-2">
                  <Butterfly className="h-6 w-6 text-white" />
                </div>
              </div>
              <span className="text-white/90 font-semibold tracking-wide">My Butterfly Portfolio</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 shadow-md hover:shadow-fuchsia-500/30 hover:brightness-110 transition-all"
              >
                Let’s Talk
              </a>
            </nav>

            <button
              className="md:hidden text-white/90"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle Menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
          {open && (
            <div className="md:hidden px-6 pb-4">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/10"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 shadow-md"
                >
                  Let’s Talk
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
