import { motion } from 'framer-motion'

function ButterflyArt() {
  return (
    <div className="relative w-full max-w-5xl mx-auto aspect-[16/9]">
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/40 via-violet-500/40 to-cyan-400/40 rounded-[2rem] blur-3xl" />
      <svg
        viewBox="0 0 800 600"
        className="relative w-full h-full"
        aria-hidden
      >
        <defs>
          <radialGradient id="wingGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#f0abfc" stopOpacity="0.65" />
            <stop offset="70%" stopColor="#a78bfa" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.3" />
          </radialGradient>
          <linearGradient id="strokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f0abfc" />
            <stop offset="50%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <g filter="url(#glow)">
          <motion.g
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <motion.path
              d="M400,300 C300,50 80,60 120,260 C150,400 320,360 400,300"
              fill="url(#wingGlow)"
              stroke="url(#strokeGrad)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
            <motion.path
              d="M400,300 C500,50 720,60 680,260 C650,400 480,360 400,300"
              fill="url(#wingGlow)"
              stroke="url(#strokeGrad)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.1 }}
            />
            <motion.circle
              cx="400"
              cy="300"
              r="16"
              fill="#fff"
              stroke="url(#strokeGrad)"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 120 }}
            />
            {[...Array(18)].map((_, i) => (
              <motion.circle
                key={i}
                cx={400 + Math.cos((i / 18) * Math.PI * 2) * (80 + (i % 5) * 10)}
                cy={300 + Math.sin((i / 18) * Math.PI * 2) * (80 + (i % 5) * 10)}
                r={2 + (i % 3)}
                fill="#fff"
                className="opacity-70"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.05 }}
              />
            ))}
          </motion.g>
        </g>
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] bg-fuchsia-500/30 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] bg-cyan-400/30 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-white/90 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
              Open to opportunities
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_30px_rgba(255,255,255,0.15)]">
              Crafting elegant experiences with a butterfly touch
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/80 max-w-xl">
              I’m a creative developer and designer building premium, immersive interfaces with clean aesthetics, thoughtful motion, and vibrant gradients.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects" className="rounded-xl bg-white text-gray-900 font-semibold px-5 py-3 shadow hover:-translate-y-0.5 transition-all">View Projects</a>
              <a href="#contact" className="rounded-xl border border-white/30 text-white px-5 py-3 hover:bg-white/10 transition-colors">Contact Me</a>
            </div>
          </div>
          <div>
            <ButterflyArt />
          </div>
        </div>
      </div>
    </section>
  )
}
