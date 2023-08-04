import React from 'react'
import { Link } from 'react-router-dom'

const Layout = ({children}) => {
  return (
      <>
          <Navbar />
          <main className='container mx-auto'>
              {children}
            </main>
      </>
  )
}
const Navbar = () => {
    return(<header className='fixed w-full' style={{ zIndex: 99 }}>
        <div class="navbar bg-base-100">
          <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl">Navigation</a>
          </div>
          <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/About'>About</Link></li>
              <li><Link to='/Product'>Prodcut</Link></li>
              <li><Link to='/Gallery'>Gallery</Link></li>
              <li><Link to='/Contact'>Contact</Link></li>
            </ul>
          </div>
        </div>
      </header>)
}
export default Layout