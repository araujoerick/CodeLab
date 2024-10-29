import React from 'react'
import emilyThompson from '../assets/profile/Ellipse 1.png'
import oliviaMartinez from '../assets/profile/Ellipse 1-1.png'
import sophiaWhite from '../assets/profile/Ellipse 1-2.png'
import isabellaBrown from '../assets/profile/Ellipse 1-3.png'
import williamAnderson from '../assets/profile/Ellipse 1-4.png'
import benjiMiaDavis from '../assets/profile/Ellipse 1-5.png'
import benjaminJohnson from '../assets/profile/Ellipse 1-6.png'
import avaTaylor from '../assets/profile/Ellipse 1-7.png'
import avaImmanuel from '../assets/profile/Ellipse 1-8.png'
import jamesSmith from '../assets/profile/Ellipse 1-9.png'
import benjiImmanuel from '../assets/profile/Ellipse 1-10.png'

const Colecionadores = () => {
  const colecionadores = [
    {
      imagem: emilyThompson,
      nome: 'Emily Thompson',
      colecao: 12,
    },
    {
      imagem: oliviaMartinez,
      nome: 'Olivia Martinez',
      colecao: 10,
    },
    {
      imagem: sophiaWhite,
      nome: 'Sophia White',
      colecao: 8,
    },
    {
      imagem: isabellaBrown,
      nome: 'Isabella Brown',
      colecao: 12,
    },
    {
      imagem: williamAnderson,
      nome: 'William Anderson',
      colecao: 14,
    },
    {
      imagem: benjiMiaDavis,
      nome: 'Benji Mia Davis',
      colecao: 8,
    },
    {
      imagem: benjaminJohnson,
      nome: 'Benjamin Johnson',
      colecao: 14,
    },
    {
      imagem: avaTaylor,
      nome: 'Ava Taylor',
      colecao: 21,
    },
    {
      imagem: avaImmanuel,
      nome: 'Ava Immanuel',
      colecao: 18,
    },
    {
      imagem: jamesSmith,
      nome: 'James Smith',
      colecao: 6,
    },
    {
      imagem: benjiImmanuel,
      nome: 'Benji Immanuel',
      colecao: 19,
    },
  ]

  return (
    <ul className="flex flex-wrap gap-8 justify-center mt-9 px-4 mx-auto max-w-[1900px]">
      {colecionadores.map(colecionador => (
        <li
          className="flex items-center gap-2 min-w-64 py-4 px-6 rounded-[60px] bg-[#131313]"
          key={colecionador.nome}
        >
          <img src={colecionador.imagem} alt="" />
          <div className="flex flex-col">
            <p className="font-medium">{colecionador.nome}</p>
            <span className="text-sm">{colecionador.colecao} Coleção</span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Colecionadores
