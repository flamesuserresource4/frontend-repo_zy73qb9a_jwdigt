import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    // This is a placeholder; backend endpoint can be added later if needed.
    setTimeout(() => setStatus('Thanks! We will get back to you soon.'), 800)
  }

  return (
    <section id="contact" className="bg-gradient-to-b from-black to-gray-950 text-white py-24 border-t border-white/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">Get in touch</h2>
        <p className="mt-2 text-white/70 text-center">Collaborations, press, or general inquiries — drop us a message.</p>

        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Your name" required className="bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
            <input type="email" placeholder="Email address" required className="bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          </div>
          <input type="text" placeholder="Subject" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <textarea rows="5" placeholder="Your message" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"></textarea>
          <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 font-semibold hover:bg-white/90 transition">Send message</button>
          {status && <p className="text-sm text-white/70">{status}</p>}
        </form>
      </div>
    </section>
  )
}
