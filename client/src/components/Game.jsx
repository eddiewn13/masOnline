import React, { useEffect, useState } from 'react'
import { io } from "socket.io-client"
import DeckClass from "../utilities/DeckClass"
import { Link } from 'react-router-dom'
import queryString from 'query-string'






const Game = ( props ) => {
      var code = window.location.href

      console.log(code)

const [room, setRoom] = useState(code)
const [roomFull, setRoomFull] = useState(false)
const [gameOver, setGameOver] = useState();
const [player1Deck, setPlayer1Deck] = useState([]);
const [player1FlippedCards, setPlayer1FlippedCards ] = useState([]);

const [player2Deck, setPlayer2Deck] = useState([]);
const [player2FlippedCards, setPlayer2FlippedCards ] = useState([]);

const [player3Deck, setPlayer3Deck] = useState([]);
const [player3FlippedCards, setPlayer3FlippedCards ] = useState([]);

const [player4Deck, setPlayer4Deck] = useState([]);
const [player4FlippedCards, setPlayer4FlippedCards ] = useState([]);

const [playedCardsPile, setPlayedCardsPile] = useState([]);
const [drawCardsPile, setDrawCardsPile] = useState([]);
const [users,setUsers] = useState([])
const [turn, setTurn] = useState()
const [currentValue, setCurrentValue] = useState('')

let socket


      useEffect(() => {
            const shuffledCards = new DeckClass();

            console.log(shuffledCards)
            
            

            const player1Deck = shuffledCards.deck.splice(0, 3);
            const player2Deck = shuffledCards.deck.splice(0, 3);
            const player3Deck = shuffledCards.deck.splice(0, 3);
            const player4Deck = shuffledCards.deck.splice(0, 3);

            console.log(...player1Deck);
            console.log(...player2Deck);
            console.log(...player3Deck);
            console.log(...player4Deck);

            console.log(shuffledCards)

            const drawCardPile = shuffledCards;
            socket = io.connect("http://127.0.0.1:3001")

            socket.emit('join_room', room, (error) => {
                  if(error)
                  setRoomFull(true);
            })

            socket.emit('initGameState', {
                  gameOver: false,
                  turn: 'Player 1',
                  player1Deck: [...player1Deck],
                  player1FlippedCards: [],
                  player2Deck: [...player2Deck],
                  player2FlippedCards: [],
                  player3Deck: [...player3Deck],
                  player3FlippedCards: [],
                  player4Deck: [...player4Deck],
                  player4FlippedCards: [],
                  currentValue: 0,
                  playedCardsPile: [],
                  drawCardPile: [...drawCardPile]
            })
        }, [])
// Fixa detta
        useEffect(() => {
            socket.on('initGameState', ({ gameOver, turn, player1Deck, player2Deck, currentColor, currentNumber, playedCardsPile, drawCardPile }) => {
                  setGameOver(gameOver)
                  setTurn(turn)
                  setPlayer1Deck(player1Deck)
                  setPlayer2Deck(player2Deck)
                  setCurrentColor(currentColor)
                  setCurrentNumber(currentNumber)
                  setPlayedCardsPile(playedCardsPile)
                  setDrawCardPile(drawCardPile)
              })
      
        },[])





      return(
            <div>
                        {(roomFull === true) ? 
                        (
                        <div>
                              <div className="">
                                    <button>Hej</button>
                              </div>
                        </div>

                  ) :   (
                              <div>
                                    <h1>Room starting</h1>
                              </div>
                        )
                  }
                  </div>
            
      )     
}


export default Game;