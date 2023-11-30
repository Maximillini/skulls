import { useState } from 'react'
import './App.css'
import { Landing } from './components/Landing'
import { Setup } from './components/Setup'
import { Game } from './components/Game'

export type Screen = 'landing' | 'setup' | 'game'

const DEFAULT_GAME_DATA = {
  name: '',
  playerCount: 0,
  gameEnded: false,
}

export type GameData = typeof DEFAULT_GAME_DATA

function App() {
  const [currentScreen, setCurrentScreen] = useState('landing')
  const [gameData, setGameData] = useState(DEFAULT_GAME_DATA)

  const isCurrentScreen = (screen: Screen) => {
    return screen === currentScreen
  }

  const handleChangeScreen = (nextScreen: Screen) => {
    setCurrentScreen(nextScreen)
  }

  const handleGameDataUpdate = (data: Record<string, unknown>) => {
    let gameDataCopy = {...gameData}
    gameDataCopy = {...gameDataCopy, ...data}
    setGameData(gameDataCopy)
  }

  return (
    <>
      {
        isCurrentScreen('landing') 
          ? <Landing handleChangeScreen={handleChangeScreen} /> 
          : isCurrentScreen('setup') 
          ? <Setup handleGameDataUpdate={handleGameDataUpdate} handleChangeScreen={handleChangeScreen}/> 
          : <Game gameData={gameData} />
      }
    </>
  )
}

export default App
