import { usePlayerData } from '../../hooks/usePlayerData'
import { OpponentData, PlayerData } from '../../types'
import './styles.scss'

// const STARTING_HAND = [1, 1, 0, 1]

type PlayerHandProps = {
  player: PlayerData,
}

type OpponentHandProps = {
  opponent: OpponentData,
  onSelectCard: (index: number) => void
}

const CardFace = ({ type, handleClick, idx }: { type: number, idx: number, handleClick: (playerId: number, index: number) => void }) => {
  const symbol = type ? <>🌸</> : <>💀</>
  const classAddOn = type ? '' : 'skull'

  return <span className={`hand-card + ${classAddOn}`} data-index={idx} onClick={() => handleClick(0, idx)}>{symbol}</span>
}

// TODO: Make base player component?
export const PlayerHand = ({ player }: PlayerHandProps) => {
  const { handleSelectCard } = usePlayerData()

  return (
    <div className='hand-container'>
      {player.hand.map((card, index) => <CardFace type={card} key={index} idx={index} handleClick={handleSelectCard} />)}
    </div>
  )
}

export const OpponentHand = ({ opponent }: OpponentHandProps) => {
  return (
    <div className="opponent-hand">
      {opponent.hand.map(() => (
        <div className="hidden-card">{' '}</div>
      ))}
    </div>
  )
}
