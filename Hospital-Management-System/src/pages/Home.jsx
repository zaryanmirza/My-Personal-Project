import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import dummyDoctors from '../data/dummyDoctors'

const IconMapPin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
)
const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)
const IconMail = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" />
  </svg>
)
const IconClock = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
  </svg>
)
const IconStar = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
    <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6-5.9-3.3-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8Z" />
  </svg>
)
const IconUsers = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)
const IconBed = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 11v8M2 15h20M22 15v4M6 15v-2a2 2 0 0 1 2-2h3M2 11V7a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4" />
  </svg>
)
const IconAward = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="8" r="6" /><path d="M8.7 13.5 7 22l5-3 5 3-1.7-8.5" />
  </svg>
)
const IconStethoscope = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M11 2v6a4 4 0 0 0 8 0V2" />
    <path d="M19 8v3a7 7 0 0 1-14 0v-4" />
    <circle cx="20" cy="19" r="3" />
  </svg>
)

const stats = [
  { icon: IconAward, label: 'Years of Service', value: '25+' },
  { icon: IconUsers, label: 'Happy Patients', value: '50,000+' },
  { icon: IconStethoscope, label: 'Expert Doctors', value: '120+' },
  { icon: IconBed, label: 'Beds Available', value: '300+' },
]

const gallery = [
  { src: 'https://picsum.photos/seed/hospital-building/800/600', caption: 'Main Building' },
  { src: 'https://picsum.photos/seed/hospital-reception/800/600', caption: 'Reception & Lounge' },
  { src: 'https://picsum.photos/seed/hospital-ward/800/600', caption: 'Patient Ward' },
  { src: 'https://picsum.photos/seed/hospital-ot/800/600', caption: 'Operation Theatre' },
  { src: 'https://picsum.photos/seed/hospital-lab/800/600', caption: 'Diagnostic Lab' },
  { src: 'https://picsum.photos/seed/hospital-ambulance/800/600', caption: 'Emergency & Ambulance' },
]

const Home = () => {
  const [contact, setContact] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleContactChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    console.log('Contact message:', contact)
    setSent(true)
    setContact({ name: '', email: '', message: '' })
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="hero min-h-[560px] bg-gradient-to-br from-indigo-600 to-violet-700 text-white">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 max-w-6xl">
          <img
            src="https://picsum.photos/seed/hospital-hero/700/520"
            alt="MediCare hospital facility"
            className="max-w-sm md:max-w-md rounded-3xl shadow-2xl"
          />
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Compassionate care, every step of the way.</h1>
            <p className="py-6 text-white/80 text-base leading-relaxed">
              MediCare brings together expert specialists, modern facilities, and 24/7 emergency
              support so you and your family always have somewhere trusted to turn.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/patient-signup" className="btn btn-lg rounded-xl bg-white text-indigo-700 border-none hover:bg-white/90">
                Book an Appointment
              </Link>
              <a href="#doctors" className="btn btn-lg btn-outline rounded-xl border-white text-white hover:bg-white/10">
                Meet Our Doctors
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / previous records */}
      <section className="bg-white py-10 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-slate-800">{value}</span>
              <span className="text-sm text-slate-500">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800">Our Facility</h2>
            <p className="text-slate-500 mt-2">A look inside where you'll be cared for.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((item) => (
              <div key={item.caption} className="group relative overflow-hidden rounded-2xl shadow-sm">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <span className="text-white text-sm font-medium">{item.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors grid (dummy data — to be replaced with an API call) */}
      <section id="doctors" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800">Meet Our Doctors</h2>
            <p className="text-slate-500 mt-2">Experienced specialists dedicated to your health.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dummyDoctors.map((doc) => (
              <div key={doc.id} className="card bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-shadow rounded-2xl overflow-hidden">
                <figure className="bg-slate-100">
                  <img src={doc.photo} alt={doc.name} className="w-full h-48 object-cover" />
                </figure>
                <div className="card-body p-5">
                  <h3 className="font-semibold text-slate-800">{doc.name}</h3>
                  <p className="text-indigo-600 text-sm font-medium">{doc.specialization}</p>
                  <div className="flex items-center justify-between text-sm text-slate-500 mt-1">
                    <span>{doc.experience} yrs experience</span>
                    <span className="flex items-center gap-1 text-amber-500">
                      <IconStar className="w-4 h-4" /> {doc.rating}
                    </span>
                  </div>
                  <Link to="/patient-login" className="btn btn-sm btn-primary rounded-lg mt-3 bg-indigo-600 border-none hover:bg-indigo-700">
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800">Get in Touch</h2>
            <p className="text-slate-500 mt-2">Questions or emergencies — we're here to help.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm p-6 space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <IconMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-slate-800">Address</p>
                  <p className="text-slate-500 text-sm">123 Wellness Avenue, Gulberg III, Lahore, Pakistan</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <IconPhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-slate-800">Phone</p>
                  <p className="text-slate-500 text-sm">+92 300 1234567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <IconMail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-slate-800">Email</p>
                  <p className="text-slate-500 text-sm">contact@medicare.example</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <IconClock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-slate-800">Hours</p>
                  <p className="text-slate-500 text-sm">24/7 Emergency · OPD: Mon–Sat, 9am–8pm</p>
                </div>
              </div>
              <iframe
                title="MediCare location"
                className="w-full h-48 rounded-xl border-0"
                loading="lazy"
                src="https://www.google.com/maps?q=Gulberg+III+Lahore+Pakistan&output=embed"
              />
            </div>

            <form onSubmit={handleContactSubmit} className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
              <div className="form-control w-full">
                <label className="label pb-1"><span className="label-text text-slate-600">Your Name</span></label>
                <input
                  type="text"
                  name="name"
                  value={contact.name}
                  onChange={handleContactChange}
                  placeholder="John Doe"
                  className="input input-bordered rounded-xl w-full"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label pb-1"><span className="label-text text-slate-600">Email</span></label>
                <input
                  type="email"
                  name="email"
                  value={contact.email}
                  onChange={handleContactChange}
                  placeholder="you@example.com"
                  className="input input-bordered rounded-xl w-full"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label pb-1"><span className="label-text text-slate-600">Message</span></label>
                <textarea
                  name="message"
                  value={contact.message}
                  onChange={handleContactChange}
                  placeholder="How can we help?"
                  className="textarea textarea-bordered rounded-xl w-full h-32"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-700 border-none text-white">
                Send Message
              </button>
              {sent && <p className="text-success text-sm text-center">Thanks! We'll get back to you soon.</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home