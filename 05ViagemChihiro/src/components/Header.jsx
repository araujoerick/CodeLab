import React from 'react'
import Logo from '../assets/logo.svg'
import LinkGoogle from '../assets/link-google.png'
import LinkFacebook from '../assets/link-facebook.png'
import LinkTwitter from '../assets/link-twitter.png'
import LinkInstagram from '../assets/link-instagram.png'

const Header = () => {
  return (
    <header className="flex items-center justify-center sm:justify-between max-w-screen-xl px-8 py-12 m-auto">
      <img className="h-12 sm:h-16 md:h-auto" src={Logo} alt="" />
      <nav>
        <ul className="hidden sm:flex items-center gap-6">
          <li className="w-8 md:w-auto">
            <a href="/">
              <img src={LinkGoogle} alt="" />
            </a>
          </li>
          <li className="w-8 md:w-auto">
            <a href="/">
              <img src={LinkFacebook} alt="" />
            </a>
          </li>
          <li className="w-8 md:w-auto">
            <a href="/">
              <img src={LinkTwitter} alt="" />
            </a>
          </li>
          <li className="w-8 md:w-auto">
            <a href="/">
              <img src={LinkInstagram} alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
