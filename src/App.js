import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import Categories from './pages/Categories';
import './assets/index.css'
import './assets/grid.css'
import pattern from './assets/imgs/pattern.png'
import { Provider } from 'react-redux';
import store from './store'
import Products from './pages/Products';
import {useEffect} from 'react'
import useSound from 'use-sound'
import backSound from './assets/audio/back.mp3'

function App() {
  const [backSoundPlay] = useSound(backSound)
  useEffect(() => {
    backSoundPlay()
  })

  return (
    <Provider store={store}>
    <div className="App">
    <img alt="pattern" src={pattern} className="pattern" />
      <Router>
        <Header />
        <div style={{ marginTop: 350 }} className="flex__center">
        <Routes>
          <Route path="/" end element={<Categories />} />
          <Route path="/products/:id" end element={<Products />} />
        </Routes>
        </div>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
