import { GameData } from "../../App"
import './styles.scss'

type GameProps = { gameData: GameData }

export const Game = ({ gameData }: GameProps) => {
  const { name, playerCount } = gameData
  return (
    <div className="game-container">
      <h1>GAME</h1>
      <div className="player-hand">
        <p>Hello, { name }</p>
      </div>
      <p>There are {playerCount} players</p>
    </div>
  )
}