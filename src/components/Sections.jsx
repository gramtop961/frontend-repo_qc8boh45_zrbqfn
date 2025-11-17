import { motion } from 'framer-motion'
import { Code2, Palette, Sparkles, Mail, Github, Linkedin, Globe, ExternalLink } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              I blend development, design, and motion to craft elevated, human-centric interfaces. My focus is on clarity, performance, and a distinct visual voice inspired by nature’s symmetry—especially butterflies.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur">
              <Sparkles className="h-4 w-4 text-fuchsia-300" />
              Available for freelance & full-time roles
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-white/5 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 via-violet-500/20 to-cyan-400/20 blur-2xl" />
              <div className="relative rounded-[22px] bg-gradient-to-br from-slate-900/40 to-slate-900/20 p-8">
                <div className="grid grid-cols-3 gap-6">
                  {['Design Systems','UI Engineering','Motion','Accessibility','Brand','Performance'].map((t,i)=> (
                    <div key={t} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-white/80">
                      <span className="text-sm">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  const items = [
    { icon: <Code2 className="h-5 w-5" />, label: 'React / Next.js' },
    { icon: <Code2 className="h-5 w-5" />, label: 'TypeScript' },
    { icon: <Palette className="h-5 w-5" />, label: 'Tailwind / Design Systems' },
    { icon: <Sparkles className="h-5 w-5" />, label: 'Framer Motion' },
    { icon: <Code2 className="h-5 w-5" />, label: 'Node / APIs' },
    { icon: <Code2 className="h-5 w-5" />, label: 'MongoDB' },
  ]
  return (
    <section id="skills" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-5 text-white/90"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-violet-500/0 to-cyan-400/0 group-hover:from-fuchsia-500/10 group-hover:via-violet-500/10 group-hover:to-cyan-400/10 transition-colors" />
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/10 p-2 border border-white/10">{s.icon}</div>
                <span className="font-medium">{s.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const items = [
    { title: 'Aurora UI', desc: 'A shimmering component kit with gradient magic.', link: '#', tags: ['React','Tailwind','Motion'] },
    { title: 'Lepidoptera Lab', desc: 'Generative butterfly art experiment.', link: '#', tags: ['SVG','Shaders'] },
    { title: 'Silk Road', desc: 'Elegant portfolio template with premium visuals.', link: '#', tags: ['Design','Framer'] },
  ]
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/5 to-white/10 p-6 text-white/90"
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 -right-20 h-60 w-60 bg-fuchsia-500/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-60 w-60 bg-cyan-400/20 rounded-full blur-3xl" />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-white/80">{p.desc}</p>
                </div>
                <ExternalLink className="h-5 w-5 text-white/60" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s build something beautiful</h2>
            <p className="mt-4 text-white/80">Have a project in mind or just want to say hi? I’d love to hear from you.</p>
            <div className="mt-6 flex items-center gap-4">
              <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white/90 hover:bg-white/20">
                <Mail className="h-4 w-4" /> Email
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white/90 hover:bg-white/20">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white/90 hover:bg-white/20">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="https://your-site.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white/90 hover:bg-white/20">
                <Globe className="h-4 w-4" /> Website
              </a>
            </div>
          </div>
          <div>
            <form onSubmit={(e)=>e.preventDefault()} className="relative rounded-3xl overflow-hidden border border-white/20 bg-white/5 p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-violet-500/10 to-cyan-400/10" />
              <div className="relative grid gap-4">
                <input placeholder="Your name" className="w-full rounded-xl bg-black/30 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-fuchsia-300" />
                <input placeholder="Email" type="email" className="w-full rounded-xl bg-black/30 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-fuchsia-300" />
                <textarea placeholder="Tell me about your project" rows={5} className="w-full rounded-xl bg-black/30 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-fuchsia-300" />
                <button className="mt-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-5 py-3 font-semibold text-white shadow hover:brightness-110 transition-all">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
