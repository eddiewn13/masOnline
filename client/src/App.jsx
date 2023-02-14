import io from "socket.io-client";
import { Route, Routes } from 'react-router-dom'
import Game from "./components/Game";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative ">
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/' element={<Game />} />
      </Routes>
      <Game/>
    </div>

  )
}

export default App
