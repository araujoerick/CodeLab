import ilustracao from './assets/ghosts.png'
import Logo from './assets/logo.svg'
import Play from './assets/Play.svg'
import LinkGoogle from './assets/link-google.png'
import LinkFacebook from './assets/link-facebook.png'
import LinkTwitter from './assets/link-twitter.png'
import LinkInstagram from './assets/link-instagram.png'

export function App() {
  return (
    <>
      <header className="flex items-center justify-between max-w-screen-xl px-8 py-12 m-auto">
        <img src={Logo} alt="" />
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <a href="/">
                <img src={LinkGoogle} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={LinkFacebook} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={LinkTwitter} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={LinkInstagram} alt="" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex items-center justify-between max-w-screen-xl px-8 m-auto">
        <div className="flex flex-col gap-8">
          <div>
            <p className="font-open-sans font-bold text-xl uppercase mb-2">
              HAYAO MIYAZAKI
            </p>
            <h1 className="font-andada-pro font-extrabold text-[64px] leading-[1.1] uppercase max-w-[10ch]">
              A VIAGEM DE CHIHIRO
            </h1>
          </div>
          <p className="font-archivo font-medium text-2xl leading-normal max-w-[36ch]">
            Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que
            a desobedecem são transformados em animais.
          </p>
          <div className="flex items-center gap-8 mt-4">
            <button
              className="flex flex-1 items-center justify-center gap-2 bg-red-300 roboto-bold uppercase px-8 py-3 rounded-[4px] text-zinc-950"
              type="button"
            >
              <img className="h-6 w-6" src={Play} alt="" />
              assistir agora
            </button>
            <button
              className="flex flex-1 justify-center outline outline-2 -outline-offset-2 outline-red-300 roboto-bold uppercase px-8 py-3 rounded-[4px]"
              type="button"
            >
              assista o trailer
            </button>
          </div>
        </div>
        <div>
          <img src={ilustracao} alt="" />
        </div>
      </main>
    </>
  )
}
