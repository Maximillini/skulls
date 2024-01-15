import { GameContext, GameDataContextValue } from '../contexts/GameContext'
import { useContext } from "react"

export const useGameData = (): GameDataContextValue => {
  const context = useContext(GameContext)

  if (!context) {
    throw new Error('useGameData must be used within a GameDataProvider')
  }

  return context
}