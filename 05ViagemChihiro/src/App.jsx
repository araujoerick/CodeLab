import Ilustracao from './assets/ghosts.png'
import Play from './assets/Play.svg'
import Header from './components/Header'

export function App() {
  return (
    <>
      <Header />

      <main className="grid md:grid-cols-2 grid-cols-1 items-center justify-between max-w-screen-xl px-5 sm:px-8 m-auto">
        <div className="flex flex-col gap-8 sm:mx-32 md:mx-0">
          <div>
            <p className="font-open-sans font-bold uppercase mb-2 md:text-xl">
              HAYAO MIYAZAKI
            </p>
            <h1 className="font-andada-pro font-extrabold text-[40px] md:text-[64px] leading-[1.1] uppercase max-w-[10ch]">
              A VIAGEM DE CHIHIRO
            </h1>
          </div>
          <p className="font-archivo font-medium md:text-2xl leading-normal md:max-w-[36ch]">
            Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que
            a desobedecem são transformados em animais.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
            <button
              className="flex flex-1 w-full items-center justify-center gap-2 bg-red-300 roboto-bold uppercase px-8 py-3 rounded-[4px] text-zinc-950"
              type="button"
            >
              <img className="h-6 w-6" src={Play} alt="" />
              assistir agora
            </button>
            <button
              className="flex flex-1 w-full justify-center outline outline-2 -outline-offset-2 outline-red-300 roboto-bold uppercase px-8 py-3 rounded-[4px]"
              type="button"
            >
              assista o trailer
            </button>
          </div>
        </div>
        <div className="order-first sm:px-44 md:px-0 md:order-last">
          <img src={Ilustracao} alt="" />
        </div>
      </main>
    </>
  )
}
