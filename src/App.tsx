import { useState } from 'react'
import './App.css'
import { Landing } from './components/Landing'
import { Setup } from './components/Setup'
import { Game } from './components/Game'
import { GameData } from './types'
import { DEFAULT_GAME_DATA } from './default_state'
import { PlayerDataProvider } from './contexts/PlayerDataContext'
import { GameContextProvider } from './contexts/GameContext'

export type Screen = 'landing' | 'setup' | 'game'

function App() {
  const [currentScreen, setCurrentScreen] = useState('landing')
  const [gameData, setGameData] = useState(DEFAULT_GAME_DATA)

  const isCurrentScreen = (screen: Screen) => {
    return screen === currentScreen
  }

  const handleChangeScreen = (nextScreen: Screen) => {
    setCurrentScreen(nextScreen)
  }

  const handleGameDataUpdate = (data: Partial<GameData>) => {
    const gameDataCopy = {...gameData, ...data}

    setGameData(gameDataCopy)
  }

  return (
    <GameContextProvider>
      <PlayerDataProvider>
        {
          isCurrentScreen('landing') 
            ? <Landing handleChangeScreen={handleChangeScreen} /> 
            : isCurrentScreen('setup') 
            ? <Setup 
                handleGameDataUpdate={handleGameDataUpdate} 
                handleChangeScreen={handleChangeScreen}
              /> 
            : <Game />
        }
      </PlayerDataProvider>
    </GameContextProvider>
  )
}

export default App
