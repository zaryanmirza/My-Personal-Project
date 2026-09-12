import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const IconMail = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" />
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

const PatientLogin = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Patient login:', form)
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
            <h2 className="text-3xl font-bold leading-snug">Welcome back.<br />We missed you.</h2>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              Sign in to manage your appointments, prescriptions, and medical records.
            </p>
          </div>
          <p className="relative z-10 text-xs text-white/70">Trusted by patients across the region.</p>
        </div>

        {/* Right form panel */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-800">Sign in to your account</h1>
            <p className="text-slate-500 text-sm mt-1">Enter your credentials to continue.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
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

            <div className="flex items-center justify-between">
              <label className="label cursor-pointer justify-start gap-2 py-1">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="checkbox checkbox-sm checkbox-primary"
                />
                <span className="label-text text-slate-500 text-sm">Remember me</span>
              </label>
              <a href="/patients/forgot-password" className="link link-primary text-sm">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-primary w-full rounded-xl mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 border-none text-white">
              Sign In
            </button>
          </form>

          <div className="divider text-slate-400 text-xs my-6">OR</div>

          <p className="text-center text-sm text-slate-500">
            Don&apos;t have an account?{' '}
            <Link to="/patient-signup" className="link link-primary font-medium">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default PatientLogin