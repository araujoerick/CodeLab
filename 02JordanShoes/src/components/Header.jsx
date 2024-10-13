import React from 'react'

export const Header = () => {
  return (
    <header>
      <p className="text-center md:text-2xl sm:text-base text-sm p-2">
        Frete grátis para todo o Brasil
      </p>
      <div className="hero-image text-white">
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
              O tênis Jordan é fruto de uma velha e forte parceria entre a Nike
              e o jogador Michael Jordan.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
