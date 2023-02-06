import { useState } from 'react'
import DeckClass from './DeckClass'

function App() {
  let Deck = new DeckClass()
  console.log(Deck.GiveCard())
  console.log(Deck)
  return (
   <div>
      <button type="submit" onClick={() => func()}>Button</button>
    <br />
<input type="text" className="test"  readOnly></input>
   </div>
  )
}

export default App
