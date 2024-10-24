import React from 'react'

const Colecionadores = () => {
  const colecionadores = [
    {
      imagem: 'url_imagem_emily_thompson',
      nome: 'Emily Thompson',
      colecao: 12,
    },
    {
      imagem: 'url_imagem_olivia_martinez',
      nome: 'Olivia Martinez',
      colecao: 10,
    },
    {
      imagem: 'url_imagem_sophia_white',
      nome: 'Sophia White',
      colecao: 8,
    },
    {
      imagem: 'url_imagem_isabella_brown',
      nome: 'Isabella Brown',
      colecao: 12,
    },
    {
      imagem: 'url_imagem_william_anderson',
      nome: 'William Anderson',
      colecao: 14,
    },
    {
      imagem: 'url_imagem_benji_mia_davis',
      nome: 'Benji Mia Davis',
      colecao: 8,
    },
    {
      imagem: 'url_imagem_benjamin_johnson',
      nome: 'Benjamin Johnson',
      colecao: 14,
    },
    {
      imagem: 'url_imagem_ava_taylor',
      nome: 'Ava Taylor',
      colecao: 21,
    },
    {
      imagem: 'url_imagem_benji_immanuel',
      nome: 'Benji Immanuel',
      colecao: 18,
    },
    {
      imagem: 'url_imagem_james_smith',
      nome: 'James Smith',
      colecao: 6,
    },
    {
      imagem: 'url_imagem_benji_immanuel_2',
      nome: 'Benji Immanuel',
      colecao: 19,
    },
  ]

  return (
    <ul>
      <li>
        <div>
          {colecionadores.map(colecionador => {
            console.log(colecionador.nome)
          })}
          <img src="" alt="" />
          <p className="font-medium">Emily Thompson</p>
          <p className="text-sm">12 Coleção</p>
        </div>
      </li>
    </ul>
  )
}

export default Colecionadores
