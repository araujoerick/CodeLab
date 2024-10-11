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
        <div className="bg-[url('./src/assets/image-michael-jordan.png')] text-white py-24">
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
          <main className="mt-20 m-auto max-w-screen-xl px-8 flex flex-col gap-8">
            <div className="text-center flex flex-col gap-6 m-auto">
              <h1 className="text-[2rem] font-semibold">
                Os melhores em só lugar
              </h1>
              <p className="text-2xl max-w-[44ch]">
                A marca Jordan na JordanShoes é a escolha certa para os amantes
                de sneakers que buscam estilo e conforto.
              </p>
            </div>
            <div className="flex flex-1 justify-center flex-wrap gap-8 mb-14">
              {tenis.map(tenisItem => (
                <div key={tenisItem.id} className="w-96">
                  <div className="bg-[#F3F7FF] px-20">
                    <img
                      src={tenisItem.imagem}
                      alt={tenisItem.nome}
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-medium">{tenisItem.nome}</h3>
                    <p className="font-medium text-[#7CA2F4]">
                      {tenisItem.categoria}
                    </p>
                    <p className="mt-3 text-xl font-medium">
                      R$ {tenisItem.preco}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </>
      )}
    </div>
  )
}

export default App
