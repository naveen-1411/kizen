import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function SignupPage() {
  const { signup } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Sign Up | Big Boy Limos'
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const res = await signup(name, email, password)
    setLoading(false)
    if ('message' in res) setError(res.message)
    else navigate('/')
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container max-w-md">
        <h1 className="text-3xl font-serif font-bold text-primary-900 mb-6">Create Account</h1>
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 space-y-4">
          <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-md border border-gray-300 px-4 py-2" required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-md border border-gray-300 px-4 py-2" required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-md border border-gray-300 px-4 py-2" required />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button type="submit" className="btn btn-primary w-full" disabled={loading}>
            {loading ? 'Creating account…' : 'Sign Up'}
          </button>
          <p className="text-sm text-gray-600 text-center">
            Already have an account? <Link to="/login" className="text-gold-600 hover:text-gold-800">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  )
}


