import { GameData } from "../../App"
import './styles.scss'

type GameProps = { gameData: GameData }

export const Game = ({ gameData }: GameProps) => {
  return (
    <div className="game-container">
      <h1>GAME</h1>
      <div className="player-hand">
        <p>Hello, { gameData.name }</p>
      </div>
      <div className="left-player-hand"></div>
      <div className="right-player-hand"></div>
    </div>
  )
}