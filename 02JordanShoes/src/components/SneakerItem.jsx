import React from 'react'

const SneakerItem = ({ nome, imagem, categoria, preco }) => {
  return (
    <div className="w-96">
      <div className="bg-[#F3F7FF] min-[400px]:px-20 px-16">
        <img src={imagem} alt={nome} className="w-full" />
      </div>
      <div className="flex flex-col gap-1 mt-6">
        <h3 className="md:text-lg font-medium">{nome}</h3>
        <p className="font-medium text-[#7CA2F4]">{categoria}</p>
        <p className="mt-3 text-xl font-medium">R$ {preco}</p>
      </div>
    </div>
  )
}

export default SneakerItem
