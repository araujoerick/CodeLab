import React, { useEffect, useState } from 'react'

function App() {
  const [tenis, setTenis] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTenis() {
      try {
        const response = await fetch(
          'https://sneakers-fake-api.vercel.app/air-jordan'
        )
        const data = await response.json()
        setTenis(data.tenis)
        setLoading(false)
      } catch (error) {
        console.error('Erro ao buscar os dados:', error)
        setLoading(false)
      }
    }
    fetchTenis()
  }, [])

  return (
    <div className="archivo-font">
      <header className="">
        <p className="text-center text-2xl p-2">
          Frete grátis para todo o Brasil
        </p>
        <div className="bg-[url('./src/assets/image-michael-jordan.png')] text-white py-20">
          <div className="flex flex-col gap-8 m-auto max-w-screen-xl px-8">
            <div className="flex items-center">
              <img src="./src/assets/logo-jordan.svg" alt="" />
              <p className="text-2xl font-medium">JordanShoes</p>
            </div>
            <div>
              <h2 className="text-[2rem] mb-4">A melhor loja de Jordan</h2>
              <p className="text-2xl max-w-[39ch]">
                O tênis Jordan é fruto de uma velha e forte parceria entre a
                Nike e o jogador Michael Jordan.
              </p>
            </div>
          </div>
        </div>
      </header>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <main
            className="m-auto max-w-screen-xl px-8"
            style={{ display: 'flex', flexWrap: 'wrap' }}
          >
            {tenis.map(tenisItem => (
              <div
                key={tenisItem.id}
                style={{
                  margin: '20px',
                  width: '200px',
                  border: '1px solid #ccc',
                  padding: '10px',
                }}
              >
                <img
                  src={tenisItem.imagem}
                  alt={tenisItem.nome}
                  style={{ width: '100%' }}
                />
                <h3>{tenisItem.nome}</h3>
                <p>Categoria: {tenisItem.categoria}</p>
                <p>Preço: R$ {tenisItem.preco}</p>
              </div>
            ))}
          </main>
        </>
      )}
    </div>
  )
}

export default App
