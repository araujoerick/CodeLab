import React, { useEffect, useState } from 'react'
import { Header } from './components/Header'
import SneakerItem from './components/SneakerItem'

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
      <Header />
      <main className="md:mt-20 mt-14 m-auto max-w-screen-xl px-8 flex flex-col md:gap-16 gap-10">
        <div className="text-center flex flex-col gap-6 m-auto">
          <h1 className="md:text-[2rem] text-2xl font-semibold">
            Os melhores em só lugar
          </h1>
          <p className="md:text-2xl sm:text-base text-sm max-w-[44ch]">
            A marca Jordan na JordanShoes é a escolha certa para os amantes de
            sneakers que buscam estilo e conforto.
          </p>
        </div>
        {loading ? (
          <div className="flex justify-center mt-10">
            <div className="loader"> </div>
          </div>
        ) : (
          <div className="flex flex-1 justify-center flex-wrap gap-8 mb-14">
            {tenis.map(item => (
              <SneakerItem
                key={item.id}
                nome={item.nome}
                imagem={item.imagem}
                categoria={item.categoria}
                preco={item.preco}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default App
