import React from 'react'
import Button from './Button'
import DiscordLogo from '../assets/DiscordLogo.svg?react'
import Fingerprint from '../assets/Fingerprint.svg?react'
import ETH from '../assets/ETH.svg?react'

const Header = () => {
  return (
    <header className="flex items-center justify-between md:justify-around py-8 px-8">
      <div className="flex items-center gap-4">
        <ETH />
        <p className="poppins-medium text-[32px]">CodeNFT</p>
      </div>
      <div className="flex gap-6">
        <Button icon={DiscordLogo}>discord</Button>
        <Button icon={Fingerprint} variant="fluor">
          conectar
        </Button>
      </div>
    </header>
  )
}

export default Header
