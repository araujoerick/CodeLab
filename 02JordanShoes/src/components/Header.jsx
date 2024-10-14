import React, { useEffect, useState } from 'react'
import HeroImage from '../assets/image-michael-jordan.png'
import HeroImageSm from '../assets/image-michael-jordan-sm.png'

export const Header = () => {
  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 768px)').matches
  )

  useEffect(() => {
    window
      .matchMedia('(max-width: 768px)')
      .addEventListener('resize', e => setMatches(e.matches))
  }, [])

  return (
    <header>
      <p className="text-center md:text-2xl sm:text-base text-sm p-2">
        Frete grátis para todo o Brasil
      </p>
      <div className="text-white">
        <div
          className="hero-image"
          style={
            !matches
              ? { backgroundImage: `url(${HeroImage})` }
              : { backgroundImage: `url(${HeroImageSm})` }
          }
        >
          <div className="flex flex-col gap-8 m-auto max-w-screen-xl px-8 py-24">
            <div className="flex items-center">
              <img src="./src/assets/logo-jordan.svg" alt="" />
              <p className="md:text-2xl font-medium text-lg">JordanShoes</p>
            </div>
            <div>
              <h2 className="md:text-[2rem] mb-4 text-2xl">
                A melhor loja de Jordan
              </h2>
              <p className="md:text-2xl max-w-[39ch] text-lg">
                O tênis Jordan é fruto de uma velha e forte parceria entre a
                Nike e o jogador Michael Jordan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
