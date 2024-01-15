import { OpponentHand } from './Hand'
import { OpponentData } from '../../types'

// PUT OPPONENT LOGIC INTO THIS COMPONENT
export const Opponent = ({ opponent }: { opponent: OpponentData }) => {
  // const [opponentData, setOpponentData] = useState(DEFAULT_OPPONENT_DATA)

  console.log({ opponent })

  // const handleCardSelect = (index: number) => {
  //   const opponentHand = opponent.hand.toSpliced(index, 1)

  //   setOpponentData({ ...opponent, ...opponentHand })
  // }
  
  return (
    <div className="opponent-container">
      <p>Opponent</p>
      <OpponentHand opponent={opponent} onSelectCard={() => {}}/>
    </div>
  )
}