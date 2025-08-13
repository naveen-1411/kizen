import { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Login | Big Boy Limos'
  }, [])

  const redirectTo = new URLSearchParams(location.search).get('redirect') || '/'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const res = await login(email, password)
    setLoading(false)
    if ('message' in res) setError(res.message)
    else navigate(redirectTo)
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container max-w-md">
        <h1 className="text-3xl font-serif font-bold text-primary-900 mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 space-y-4">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-md border border-gray-300 px-4 py-2" required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-md border border-gray-300 px-4 py-2" required />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button type="submit" className="btn btn-primary w-full" disabled={loading}>
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
          <p className="text-sm text-gray-600 text-center">
            Don't have an account? <Link to="/signup" className="text-gold-600 hover:text-gold-800">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  )
}


