import ilustracao from './assets/ghosts.png'
import Logo from './assets/logo.svg'
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
      <main>
        <section className="flex items-center justify-between max-w-screen-xl px-8 m-auto">
          <div>
            <p>HAYAO MIYAZAKI</p>
            <h1>A VIAGEM DE CHIHIRO</h1>
            <p>
              Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles
              que a desobedecem são transformados em animais.
            </p>
            <div>
              <button className="bg-red-300" type="button">
                assistir agora
              </button>
              <button className="bg-red-300" type="button">
                assista o trailer
              </button>
            </div>
          </div>
          <div>
            <img src={ilustracao} alt="" />
          </div>
        </section>
      </main>
    </>
  )
}
