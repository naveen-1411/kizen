import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type AuthUser = {
  id: string
  name: string
  email: string
}

type AuthContextValue = {
  user: AuthUser | null
  loading: boolean
  login: (email: string, password: string) => Promise<{ success: true } | { success: false; message: string }>
  signup: (name: string, email: string, password: string) => Promise<{ success: true } | { success: false; message: string }>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

type StoredUser = AuthUser & { password: string }

const USERS_KEY = 'auth_users'
const SESSION_KEY = 'auth_user'

function loadUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem(USERS_KEY)
    if (!raw) return []
    return JSON.parse(raw) as StoredUser[]
  } catch {
    return []
  }
}

function saveUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

function saveSession(user: AuthUser | null) {
  if (!user) {
    localStorage.removeItem(SESSION_KEY)
  } else {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user))
  }
}

function loadSession(): AuthUser | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (!raw) return null
    return JSON.parse(raw) as AuthUser
  } catch {
    return null
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const existing = loadSession()
    if (existing) setUser(existing)
    setLoading(false)
  }, [])

  const login: AuthContextValue['login'] = async (email, password) => {
    const users = loadUsers()
    const found = users.find((u) => u.email.toLowerCase() === email.toLowerCase())
    if (!found || found.password !== password) {
      return { success: false, message: 'Invalid email or password' }
    }
    const session: AuthUser = { id: found.id, name: found.name, email: found.email }
    setUser(session)
    saveSession(session)
    return { success: true }
  }

  const signup: AuthContextValue['signup'] = async (name, email, password) => {
    const users = loadUsers()
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, message: 'Email already in use' }
    }
    const newUser: StoredUser = {
      id: `${Date.now()}`,
      name,
      email,
      password,
    }
    users.push(newUser)
    saveUsers(users)
    const session: AuthUser = { id: newUser.id, name: newUser.name, email: newUser.email }
    setUser(session)
    saveSession(session)
    return { success: true }
  }

  const logout = () => {
    setUser(null)
    saveSession(null)
  }

  const value = useMemo(() => ({ user, loading, login, signup, logout }), [user, loading])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}


