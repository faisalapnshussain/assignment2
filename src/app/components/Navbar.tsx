import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
<nav className='flex bg-zinc-800 text-white h-15 items-center justify-between'>
    <div className='m-4 flex items-center space-x-2'>
    <img className='h-10 w-22' src='/images/logo.png' alt='logo' />

        <h1 className='text-2xl font-sans font-semibold' > <Link href="/">Allied Engineering</Link></h1>
    </div>
    <div>
        <ul className='flex space-x-6'>
            <li className="hover:text-yellow-500"><Link href="/">Home</Link></li>
            <li>|</li>
            <li className="hover:text-yellow-500"><Link href="/about">About</Link></li>
            <li>|</li>
            <li className="hover:text-yellow-500"><Link href="/service">Services</Link></li>
        </ul> 
    </div>
    <div>
    <ul className='flex space-x-4 items-center shadow-lg m-4'>
        <li className="hover:text-yellow-500"><Link href="/contact">Contact</Link></li>
        <li className="hover:text-yellow-500"> <Link href="/signup">Sign in</Link></li>
        </ul>    
    </div>
</nav>
)
}

export default Navbar;