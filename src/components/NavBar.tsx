
import React from 'react';
import logo from '../assets/icons/logo.svg';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-center h-16'>
      <div className='flex items-center  gap-60'>
        <div>
          <img src={logo.src} alt="logo" height={40} width={40} />
        </div>
        <div>
          <ul className='flex items-center gap-5'>
            <li><Link href={"/"}>Inicio</Link></li>
            <li><Link href={"/register"}>Registrar</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar