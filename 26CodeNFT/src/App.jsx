import Colecionadores from './Components/Colecionadores'
import Colecoes from './Components/Colecoes'
import Header from './Components/Header'
import BgImage from './assets/bgimage.png'

export function App() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${BgImage})` }}
        className="bg-cover bg-center text-white pb-28"
      >
        <Header />
        <main className="mt-[550px]">
          <section className="flex flex-col items-center gap-5">
            <h1 className="text-7xl font-semibold text-center mx-4">
              Descubra coleção de NFT
            </h1>
            <p className="text-2xl text-center max-w-[60ch] mx-4">
              O maior mercado NFT. Criação digital autêntica e verdadeiramente
              única. Assinado e emitido pelo criador, possibilitado pela
              tecnologia blockchain
            </p>
          </section>
        </main>
      </div>

      <section className="">
        <h2 className="text-[40px] font-semibold py-2 text-center">
          Colecionadores
        </h2>
        <Colecionadores />
      </section>

      <section>
        <h2 className="text-[40px] font-semibold py-2 mt-32 text-center">
          Coleções
        </h2>
        <Colecoes />
      </section>
    </>
  )
}
