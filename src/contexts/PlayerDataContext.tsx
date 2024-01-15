import { createContext, useState, ReactNode } from 'react'
import { OpponentData, PlayerData, BasePlayerData } from '../types'
import { DEFAULT_OPPONENT_DATA, DEFAULT_PLAYER_DATA } from '../default_state'

interface PlayerDataContextProps {
  children: ReactNode
}

const THREE_PLAYERS = [DEFAULT_PLAYER_DATA, DEFAULT_OPPONENT_DATA, {...DEFAULT_OPPONENT_DATA, ...{playerId: 2}}]

export interface PlayerDataContextValue {
  playersData: BasePlayerData[]
  addPlayer: (initialData?: OpponentData) => void
  updatePlayerData: (playerId: number, newData: Partial<PlayerData | OpponentData>) => void
  humanPlayer: PlayerData,
  opponents: OpponentData[],
  handleSelectCard: (playerId: number, index: number) => void,
  getPlayerCount: () => number
}

export const PlayerDataContext = createContext<PlayerDataContextValue | undefined>(undefined)

export const PlayerDataProvider: React.FC<PlayerDataContextProps> = ({ children }) => {
  const [playersData, setPlayersData] = useState<BasePlayerData[]>(THREE_PLAYERS)
  
  const humanPlayer = playersData[0]
  const opponents = playersData?.filter((player: BasePlayerData) => { return player.type !== 'player' })

  const addPlayer = (initialData?: OpponentData) => {
    setPlayersData((prevPlayersData) => {
      const latestPlayerId = playersData[playersData.length - 1].playerId
      const newOpponent = initialData ?? { ...DEFAULT_OPPONENT_DATA, ...{playerId: latestPlayerId + 1} }
      const updatedPlayersData = [...prevPlayersData]

      return [...updatedPlayersData, newOpponent]
    })
  }

  const updatePlayerData = (playerId: number, newData: Partial<PlayerData | OpponentData>) => {
    setPlayersData((prevPlayersData) => {
      const updatedPlayersData = [ ...prevPlayersData ]

      if (updatedPlayersData[playerId]) {
        updatedPlayersData[playerId] = { ...updatedPlayersData[playerId], ...newData }
        console.log({ updatedPlayersData })
      }

      return updatedPlayersData
    })
  }

  const handleSelectCard = (playerId: number, index: number) => {
    const playerHandCopy = [...playersData[playerId].hand]
    const playedCard = playerHandCopy[index]
    const updatedPlayerHand = playerHandCopy.toSpliced(index, 1)
    
    console.log({playerHandCopy, index})
    console.log({ playedCard })
    
    updatePlayerData(playerId, { hand: updatedPlayerHand, cardPile: [...playersData[playerId].cardPile, playedCard ]})
  }

  const getPlayerCount = () => playersData.length


  const value: PlayerDataContextValue = {
    playersData,
    addPlayer,
    updatePlayerData,
    humanPlayer,
    opponents,
    handleSelectCard,
    getPlayerCount
  }

  return <PlayerDataContext.Provider value={value}>{children}</PlayerDataContext.Provider>
}
