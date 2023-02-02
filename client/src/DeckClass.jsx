export default class DeckClass{
    constructor(){
        this.deck = [];

    }

    GenerateDeck(){
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                this.deck.push(suits[i] + values[j])
            }
            
        }
        console.log(this.deck)
    }

    GiveCard(){
        return this.deck.pop();
    }

      
    
}