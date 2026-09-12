import React, { useState } from 'react'

const IconShield = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2 4 5v6c0 5.25 3.4 9.74 8 11 4.6-1.26 8-5.75 8-11V5l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)
const IconUser = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 21a8 8 0 1 0-16 0" /><circle cx="12" cy="7" r="4" />
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

const AdminLogin = () => {
  const [form, setForm] = useState({ identifier: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Admin login:', form)
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-red-600/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-slate-500/10 blur-3xl" />

      <div className="relative z-10 w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center border border-white/10">
            <IconShield className="w-7 h-7 text-red-400" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-white">Admin Portal</h1>
          <p className="text-slate-400 text-sm mt-1">Restricted access — authorized personnel only</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="form-control w-full">
              <label className="label pb-1"><span className="label-text text-slate-300">Username or Email</span></label>
              <label className="input input-bordered bg-white/5 border-white/10 flex items-center gap-2 rounded-xl focus-within:border-red-400/60">
                <IconUser className="w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  name="identifier"
                  value={form.identifier}
                  onChange={handleChange}
                  placeholder="admin@example.com"
                  className="grow bg-transparent text-white placeholder:text-slate-500"
                  required
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label pb-1"><span className="label-text text-slate-300">Password</span></label>
              <label className="input input-bordered bg-white/5 border-white/10 flex items-center gap-2 rounded-xl focus-within:border-red-400/60">
                <IconLock className="w-4 h-4 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="grow bg-transparent text-white placeholder:text-slate-500"
                  required
                />
                <button type="button" onClick={() => setShowPassword((s) => !s)} className="text-slate-400 hover:text-slate-200">
                  {showPassword ? <IconEyeOff className="w-4 h-4" /> : <IconEye className="w-4 h-4" />}
                </button>
              </label>
            </div>

            <div className="flex justify-end">
              <a href="/admin/forgot-password" className="link text-slate-400 hover:text-red-400 text-sm">Forgot password?</a>
            </div>

            <button type="submit" className="btn w-full rounded-xl mt-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 border-none text-white">
              Sign In
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-slate-500 mt-6">
          Admin accounts are provisioned manually. Contact the system owner for access.
        </p>
      </div>
    </div>
  )
}

export default AdminLogin