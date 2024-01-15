import { GameData, Hand, OpponentData, PlayerData } from '../types'

export const getBetsWon = (players: (OpponentData | PlayerData)[]) => {  
  const betsWonByPlayer = players.map((player) => { return { id: player.playerId, betsWon: player.betsWon }} )

  return betsWonByPlayer
}

export const selectCard = (hand: Hand, gameData: GameData) => {
  const handCopy = [...hand]

  const { player, opponents } = gameData
  console.log({ [player.name]: player.betsWon })
  console.log({ opponentsBetsWon: opponents.map((opp) => opp.betsWon) })

  // establish AI logic for choosing here
  // if wild:
  // select card at random
  // if not wild:
  // 1. look at bets won for all players
  // 

  return handCopy[0]
}

export const makeBet = () => {

}