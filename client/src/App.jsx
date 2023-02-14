import io from "socket.io-client";
import { Route, Routes } from 'react-router-dom'
import Game from "./components/Game";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/play' element={<Game />} />
      </Routes>
    </div>

  )
}

export default App
