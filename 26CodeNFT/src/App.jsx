import Header from './Components/Header'
import Bg from './assets/bgimage.png'

export function App() {
  return (
    <>
      <Header />
      <main>
        <img src={Bg} alt="" />
      </main>
    </>
  )
}
