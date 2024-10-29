import React from 'react'
import nftPurple from '../assets/nfts/nft-purple.png'
import nftCyan from '../assets/nfts/nft-cyan.png'
import nftCyan2 from '../assets/nfts/nft-cyan2.png'
import nftRed from '../assets/nfts/nft-red.png'
import nftBlue from '../assets/nfts/nft-blue.png'
import nftPurple2 from '../assets/nfts/nft-purple2.png'

const Colecoes = () => {
  const colecoes = [
    {
      imagem: nftPurple,
      title: 'sKISIRS 01',
    },
    {
      imagem: nftCyan,
      title: 'sKISIRS 02',
    },
    {
      imagem: nftCyan2,
      title: 'sKISIRS 03',
    },
    {
      imagem: nftRed,
      title: 'sKISIRS 04',
    },
    {
      imagem: nftBlue,
      title: 'sKISIRS 05',
    },
    {
      imagem: nftPurple2,
      title: 'sKISIRS 06',
    },
  ]

  return (
    <ul className="flex flex-wrap gap-8 justify-center mt-12 mb-36 mx-auto px-4 max-w-7xl">
      {colecoes.map(colecao => (
        <li
          className="flex flex-col gap-2 p-5 bg-[#131313]"
          key={colecao.title}
        >
          <img src={colecao.imagem} alt="" />
          <div className="flex flex-col">
            <p className="text-2xl font-semibold mt-3">{colecao.title}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Colecoes
