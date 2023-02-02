import { useState } from 'react'
import DeckClass from './DeckClass'

function App() {
  let Deck = new DeckClass()
  Deck.GenerateDeck();


  let test = document.getElementsByClassName("test")

  let Dinhand = []
  function func(){
      Dinhand.push(Deck.GiveCard())
      console.log(Dinhand)
      console.log(Deck.deck)
  }
  return (
   <div>
      <button type="submit" onClick={() => func()}>Button</button>
    <br />
<input type="text" className="test"  readOnly></input>
   </div>
  )
}

export default App
