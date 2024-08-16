import React from 'react'
import logo from '../assets/logoo.png';
import ButtomCreate from './ButtomCreate'
import ButtomLogin from './ButtomLogin'
import LinkHome from './LinkHome';
import LinkAboutus from './LinkAboutus';
import LinkContactus from './LinkContactus';
function Header() {
  return (
    <header className="w-full flex flex-col md:flex-row items-center justify-between p-4 bg-black font-orbitron">
    <div className="flex items-center space-x-2">
      <img src={logo} alt="Sportso Logo" className="h-10" />
      <div className="text-white">
        <h1 className="text-orange-400 font-bold text-lg md:text-xl">Sportso</h1>
        <p className="text-sm">Photographers On Demand</p>
      </div>
    </div>


    <nav className="flex items-center space-x-8 text-white ml-6 ">
      <LinkHome />
      <LinkAboutus />
      <LinkContactus />
    </nav>

    <div className="flex items-center space-x-10 mt-4 md:mt-0">
      <ButtomLogin />
      <ButtomCreate />
    </div>
  </header>
);
}

export default Header
