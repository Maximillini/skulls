import { GamePhases } from '../../types'
import { PlayerHand } from './Hand'
import { useGameData } from '../../hooks/useGameData'
import { usePlayerData } from '../../hooks/usePlayerData'
import { Opponent } from './Opponent'
import { CardStack } from './CardStack'
import './styles.scss'

export const Game = () => {
  const { gameData, isCurrentPhase } = useGameData()
  const { playersData, humanPlayer, opponents } = usePlayerData()

  console.log({ playersData })

  return (
    <div className="game-container">
      <p>{gameData.gamePhase.toUpperCase()} Phase</p>
      <div className="play-area-container">
        {/* TODO: move to css grid and dynamically adding opponents to table */}
        <Opponent opponent={opponents[0]} />
        <div className="play-area">
          <div className="player-row">
            <div className="player-mat">
              <CardStack playedCards={humanPlayer.cardPile} />
            </div>
          </div>
        </div>
        <Opponent opponent={opponents[1]} />
      </div>

      <div className="player-hand">
        {isCurrentPhase(GamePhases.Opening) ? <p>Choose the card to start play</p> : null}
        {isCurrentPhase(GamePhases.CardPlay) ? <p>Choose a card to play or make a bet</p> : null}
        <PlayerHand player={humanPlayer} />
        {isCurrentPhase(GamePhases.CardPlay) ? <button>Place Bet</button> : null}
      </div>
      <p>There are {playersData.length} players</p>
    </div>
  )
}