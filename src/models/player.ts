// type PlayerType = 'player' | 'aggressive' | 'defensive' | 'wild'

// export class Player {
//   name: string
//   hand: number[]
//   type: PlayerType
//   bet: number = 0
//   betsWon: number = 0
//   selectedCard: 1 | 0 = 1
//   winner: boolean = false

//   constructor(name: string, hand: number[], type: PlayerType) {
//     this.name = name
//     this.hand = hand
//     this.type = type
//   }

//   increaseBetsWon() {
//     if (this.betsWon === 1) {
//       this.wonGame()
//       return
//     }

//     this.betsWon++
//   }

//   wonGame() {
//     this.winner = true;
//   }

//   private getCardAtIndex(index: number) {
//     return this.hand[index]
//   }

//   // get name

//   // get bets won

//   // set bets won

//   // play card

//   // set bet 

//   // set selected card <-- this and set bet will be where most of the AI logic lives

//   // get selected card
// }