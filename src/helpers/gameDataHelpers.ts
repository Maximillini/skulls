// import { SetStateAction } from 'react'
import { GamePhases } from '../types/enums'

const PHASES: GamePhases[] = [GamePhases.Opening, GamePhases.CardPlay, GamePhases.Betting]

export const cyclePhase = (currentPhase: GamePhases) => {
  const phases = [...PHASES]

  const currentIndex = phases.indexOf(currentPhase)

  if (currentIndex === phases.length - 1) {
    return phases[0]
  }

  return phases[currentIndex + 1]
}

// export const goToPhase = (phase: keyof typeof GamePhases, setPhase: SetStateAction<keyof typeof GamePhases>) => {
//   setPhase(phase)
// }

// export const getNextPlayer = (currentPlayer: PlayerData) => {
  // const playerCopy = {...currentPlayer}

  // const currentIndex = GameData
// }