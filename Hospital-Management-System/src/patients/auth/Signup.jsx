import React, { useState } from 'react'

const IconUser = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 21a8 8 0 1 0-16 0" /><circle cx="12" cy="7" r="4" />
  </svg>
)
const IconMail = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" />
  </svg>
)
const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)
const IconLock = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)
const IconEye = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" /><circle cx="12" cy="12" r="3" />
  </svg>
)
const IconEyeOff = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 11 7 11 7a13.16 13.16 0 0 1-1.67 2.68M6.61 6.61A13.52 13.52 0 0 0 1 12s4 7 11 7a10.44 10.44 0 0 0 5.39-1.61" />
    <path d="M2 2l20 20" />
  </svg>
)
const IconPulse = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
)
const IconCalendar = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
)
const IconClipboard = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="4" width="16" height="18" rx="2" /><path d="M9 2h6a1 1 0 0 1 1 1v2H8V3a1 1 0 0 1 1-1Z" />
    <path d="M9 12h6M9 16h6" />
  </svg>
)
const IconUsers = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)
const IconDroplet = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2s7 7.58 7 12a7 7 0 1 1-14 0c0-4.42 7-12 7-12Z" />
  </svg>
)

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

const PatientSignup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    disease: '',
    gender: '',
    bloodGroup: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [agreed, setAgreed] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Patient signup:', form)
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-100 p-4">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl bg-white">
        {/* Left branding panel */}
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-10 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -left-10 w-72 h-72 rounded-full bg-white/10" />
          <div className="relative z-10 flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
              <IconPulse className="w-6 h-6" />
            </div>
            <span className="text-lg font-semibold tracking-wide">MediCare</span>
          </div>
          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl font-bold leading-snug">Your health,<br />one account away.</h2>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              Book appointments, view prescriptions, and chat with your doctors — all from a single patient portal.
            </p>
          </div>
          <p className="relative z-10 text-xs text-white/70">Trusted by patients across the region.</p>
        </div>

        {/* Right form panel */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-800">Create your patient account</h1>
            <p className="text-slate-500 text-sm mt-1">Fill in your details to get started.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control w-full">
              <label className="label pb-1"><span className="label-text text-slate-600">Full Name</span></label>
              <label className="input input-bordered flex items-center gap-2 rounded-xl focus-within:input-primary">
                <IconUser className="w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="grow"
                  required
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label pb-1"><span className="label-text text-slate-600">Email</span></label>
              <label className="input input-bordered flex items-center gap-2 rounded-xl focus-within:input-primary">
                <IconMail className="w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="grow"
                  required
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label pb-1"><span className="label-text text-slate-600">Phone Number</span></label>
              <label className="input input-bordered flex items-center gap-2 rounded-xl focus-within:input-primary">
                <IconPhone className="w-4 h-4 text-slate-400" />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+92 300 1234567"
                  className="grow"
                  required
                />
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="form-control w-full">
                <label className="label pb-1"><span className="label-text text-slate-600">Age</span></label>
                <label className="input input-bordered flex items-center gap-2 rounded-xl focus-within:input-primary">
                  <IconCalendar className="w-4 h-4 text-slate-400" />
                  <input
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    placeholder="28"
                    className="grow"
                    min="0"
                    max="120"
                    required
                  />
                </label>
              </div>

              <div className="form-control w-full">
                <label className="label pb-1"><span className="label-text text-slate-600">Gender</span></label>
                <label className="select select-bordered flex items-center gap-2 rounded-xl focus-within:select-primary">
                  <IconUsers className="w-4 h-4 text-slate-400" />
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    className="grow bg-transparent"
                    required
                  >
                    <option value="" disabled>Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </div>

              <div className="form-control w-full">
                <label className="label pb-1"><span className="label-text text-slate-600">Blood Group</span></label>
                <label className="select select-bordered flex items-center gap-2 rounded-xl focus-within:select-primary">
                  <IconDroplet className="w-4 h-4 text-slate-400" />
                  <select
                    name="bloodGroup"
                    value={form.bloodGroup}
                    onChange={handleChange}
                    className="grow bg-transparent"
                    required
                  >
                    <option value="" disabled>Select blood group</option>
                    {bloodGroups.map((bg) => (
                      <option key={bg} value={bg}>{bg}</option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            <div className="form-control w-full">
              <label className="label pb-1"><span className="label-text text-slate-600">Disease</span></label>
              <label className="input input-bordered flex items-center gap-2 rounded-xl focus-within:input-primary">
                <IconClipboard className="w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  name="disease"
                  value={form.disease}
                  onChange={handleChange}
                  placeholder="e.g. Diabetes"
                  className="grow"
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label pb-1"><span className="label-text text-slate-600">Password</span></label>
              <label className="input input-bordered flex items-center gap-2 rounded-xl focus-within:input-primary">
                <IconLock className="w-4 h-4 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="grow"
                  required
                />
                <button type="button" onClick={() => setShowPassword((s) => !s)} className="text-slate-400 hover:text-slate-600">
                  {showPassword ? <IconEyeOff className="w-4 h-4" /> : <IconEye className="w-4 h-4" />}
                </button>
              </label>
            </div>

            <label className="label cursor-pointer justify-start gap-3 py-1">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="checkbox checkbox-sm checkbox-primary"
                required
              />
              <span className="label-text text-slate-500 text-sm">
                I agree to the <a href="/terms" className="link link-primary">Terms</a> and <a href="/privacy" className="link link-primary">Privacy Policy</a>
              </span>
            </label>

            <button type="submit" className="btn btn-primary w-full rounded-xl mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 border-none text-white">
              Create Account
            </button>
          </form>

          <div className="divider text-slate-400 text-xs my-6">OR</div>

          <p className="text-center text-sm text-slate-500">
            Already have an account?{' '}
            <a href="/patients/login" className="link link-primary font-medium">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default PatientSignup