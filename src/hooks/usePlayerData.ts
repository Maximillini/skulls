import { useContext } from 'react'
import { PlayerDataContextValue, PlayerDataContext } from '../contexts/PlayerDataContext'

export const usePlayerData = (): PlayerDataContextValue => {
  const context = useContext(PlayerDataContext)
  if (!context) {
    throw new Error('usePlayerData must be used within a PlayerDataProvider')
  }
  return context
}