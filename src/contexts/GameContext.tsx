import React, { useState, createContext } from 'react'
import { GameData, GamePhases } from '../types'
import { DEFAULT_GAME_DATA } from '../default_state'

type GameProviderProps = {
  children: React.ReactNode
}

export type GameDataContextValue = {
  gameData: GameData
  updateGameData: (data: Partial<GameData>) => void,
  isCurrentPhase: (phase: GamePhases) => boolean,
  cyclePhase: () => void,
}

const PHASES: GamePhases[] = [GamePhases.Opening, GamePhases.CardPlay, GamePhases.Betting]

export const GameContext = createContext<GameDataContextValue | undefined>(undefined)

export const GameContextProvider: React.FC<GameProviderProps> = ({ children }: GameProviderProps) => {
  const [gameData, setGameData] = useState(DEFAULT_GAME_DATA)

  const updateGameData = (data: Partial<GameData>) => {
    const gameDataCopy = {...gameData}

    setGameData({...gameDataCopy, ...data})
  }

  const isCurrentPhase = (phase: GamePhases) => {
    return gameData.gamePhase === phase
  }

  const cyclePhase = () => {
    setGameData((prevGameData) => {
      const updatedGameData = { ...prevGameData }

      const currentPhaseIndex = PHASES.indexOf(updatedGameData.gamePhase)

      if (currentPhaseIndex === (PHASES.length - 1)) {
        return { ...updatedGameData, ...{ gamePhase: PHASES[0] } }
      }

      return { ...updatedGameData, ...{ gamePhase: PHASES[currentPhaseIndex + 1]}}
    })
  }

  const value = {
    gameData,
    updateGameData,
    isCurrentPhase,
    cyclePhase
  }

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  )
}