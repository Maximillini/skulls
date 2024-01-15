import { GamePhases } from "."

export type GameData = {
  playerCount: number,
  gameEnded: boolean,
  gamePhase: GamePhases,
  currentTurnPlayerId: number,
  currentBetAmount: number,
  canChangePhase: boolean,
}