import { CardPile } from '../../types'
import './styles.scss'

export const CardStack = ({ playedCards }: { playedCards: CardPile}) => {
  return (
    <div className="card-pile-container">
      {playedCards.map(() => <div className="hidden-card"></div>)}
    </div>
  )
}