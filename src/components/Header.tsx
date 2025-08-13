import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { cn } from '../lib/utils'
import logoImg from '../assets/Big boy limos.jpeg'
import { useAuth } from '../context/AuthContext'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Fleet', href: '/fleet' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { user, logout } = useAuth()
  
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  return (
    <header className={cn(
      'fixed w-full z-50 transition-all duration-300 bg-white shadow-md py-2'
    )}>
      <nav className="container flex items-center justify-between">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Big Boy Limos</span>
            <img src={logoImg} alt="Big Boy Limos logo" className="h-10 w-auto" />
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className={cn(
              '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-700'
            )}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'text-sm font-semibold leading-6 transition-colors',
                location.pathname === item.href ? 'text-gold-500' : 'text-primary-900 hover:text-gold-500'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-6 items-center">
          <a 
            href="tel:+1234567890" 
            className={cn(
              'flex items-center gap-x-2 text-sm font-semibold leading-6 transition-colors text-primary-900 hover:text-gold-500'
            )}
          >
            <PhoneIcon className="h-5 w-5" />
            <span>(123) 456-7890</span>
          </a>
          {user ? (
            <>
              <span className="text-sm text-primary-900">Hi, {user.name}</span>
              <button onClick={logout} className="text-sm font-semibold text-primary-900 hover:text-gold-500">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm font-semibold text-primary-900 hover:text-gold-500">Login</Link>
              <Link to="/signup" className="text-sm font-semibold text-primary-900 hover:text-gold-500">Sign Up</Link>
            </>
          )}
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={cn(
        'fixed inset-0 z-50 bg-white',
        mobileMenuOpen ? 'block' : 'hidden'
      )}>
        <div className="fixed inset-0 flex">
          <div className="relative flex w-full flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div className="flex items-center justify-between px-6 py-4">
              <div>
                <Link to="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Big Boy Limos</span>
                  <img src={logoImg} alt="Big Boy Limos logo" className="h-10 w-auto" />
                </Link>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-primary-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-2 py-6 px-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7',
                        location.pathname === item.href ? 'bg-gray-50 text-gold-500' : 'text-primary-900 hover:bg-gray-50'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 px-6 space-y-4">
                  <a
                    href="tel:+1234567890"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-primary-900 hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-x-2">
                      <PhoneIcon className="h-5 w-5 text-gold-500" />
                      <span>(123) 456-7890</span>
                    </div>
                  </a>
                  {user ? (
                    <button onClick={() => { logout(); setMobileMenuOpen(false) }} className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-primary-900 hover:bg-gray-50">
                      Logout
                    </button>
                  ) : (
                    <>
                      <Link to="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-primary-900 hover:bg-gray-50">
                        Login
                      </Link>
                      <Link to="/signup" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-primary-900 hover:bg-gray-50">
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}