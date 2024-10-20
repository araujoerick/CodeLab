import Ilustracao from './assets/ghosts.png'
import Play from './assets/Play.svg'
import Header from './components/Header'
import BgImage from './assets/background.png'
import Button from './components/Button'

export function App() {
  return (
    <>
      <div
        className="bg-cover bg-center h-dvh text-white"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
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
              Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles
              que a desobedecem são transformados em animais.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
              <Button icon={Play}>assistir agora</Button>
              <Button variant="outline">assita o trailer</Button>
            </div>
          </div>
          <div className="order-first sm:px-44 md:px-0 md:order-last">
            <img className="animate-bounce-custom" src={Ilustracao} alt="" />
          </div>
        </main>
      </div>
    </>
  )
}
