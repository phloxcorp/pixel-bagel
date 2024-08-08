import Footer from './components/Footer'
import Games from './components/Games'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import useMoveScroll from './hook/useMoveScroll'

function App() {
  const {element: about, onMoveToElement: onMoveToAbout} = useMoveScroll()
  const {element: games, onMoveToElement: onMoveToGames} = useMoveScroll()

  return (
    <>
      <Navbar onMoveToAbout={onMoveToAbout} onMoveToGames={onMoveToGames} />
      <HomePage element={about} />
      <Games element={games} />
      <Footer />
    </>
  )
}

export default App
