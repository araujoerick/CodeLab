import React, { useState } from 'react'
import Button from './Button'
import DiscordLogo from '../assets/DiscordLogo.svg?react'
import Fingerprint from '../assets/Fingerprint.svg?react'
import ETH from '../assets/ETH.svg?react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="flex items-center justify-between md:justify-around py-8 px-8">
      <div className="flex items-center gap-4">
        <ETH />
        <p className="poppins-medium text-[32px]">CodeNFT</p>
      </div>
      <nav className="md:flex gap-6 hidden">
        <Button icon={DiscordLogo}>discord</Button>
        <Button icon={Fingerprint} variant="fluor">
          conectar
        </Button>
      </nav>

      {/* Menu Hamburger para dispositivos pequenos */}
      <div className="md:hidden flex flex-col items-center relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>close menu button</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Links para Mobile (menu hamburguer) */}
        <nav
          className={`${isOpen ? 'block' : 'hidden'} absolute top-10 right-0 md:hidden bg-black text-center`}
        >
          <Button icon={DiscordLogo}>discord</Button>
          <Button icon={Fingerprint} variant="fluor">
            conectar
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Header
