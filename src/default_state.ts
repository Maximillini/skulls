import { 
  PlayerData,
  GameData,
  OpponentData,
  GamePhases,
  ValidBetsWon,
  PlayType,
  Hand
} from "./types"

export const FULL_HAND: Hand = [1, 1, 0, 1]

const BASE_PLAYER_DATA = {
  hand: FULL_HAND,
  cardPile: [],
  betsWon: 0 as ValidBetsWon,
  playerId: 0
}

export const DEFAULT_PLAYER_DATA: PlayerData = {
  ...BASE_PLAYER_DATA, 
  ...{ 
    name: '', 
    type: PlayType.Player, 
    hand: FULL_HAND
  }
}

export const DEFAULT_OPPONENT_DATA: OpponentData = { 
  ...BASE_PLAYER_DATA, 
  ...{
    name: '', 
    type: PlayType.Wild,
    hand: FULL_HAND,
    playerId: 1,
  }
}

export const DEFAULT_GAME_DATA: GameData = {
  playerCount: 3,
  gameEnded: false,
  gamePhase: GamePhases.Opening,
  currentTurnPlayerId: 0,
  currentBetAmount: 0,
  canChangePhase: false
}