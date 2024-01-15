import { PlayType } from './enums'

export type Hand = 
  [1, 1, 1, 0] | 
  [1, 1, 0, 1] | 
  [1, 0, 1, 1] | 
  [0, 1, 1, 1]

export type ValidBetsWon = 0 | 1 | 2

export type CardPile = (1 | 0)[]

export type BasePlayerData = {
  name: string,
  hand: (1 | 0)[],
  cardPile: CardPile,
  betsWon: ValidBetsWon,
  playerId: number,
  type: PlayType,
}

export type PlayerData = BasePlayerData
export type OpponentData = BasePlayerData