import React, { useState } from "react"
import { Screen } from "../App"
import { Input } from './shared/Input/Input'
import { usePlayerData } from "../hooks/usePlayerData"
import { repeatFunction } from "../helpers/miscHelpers"

type SetupProps = {
  handleChangeScreen: (screen: Screen) => void,
  handleGameDataUpdate: (data: Record<string, unknown>) => void
}

export const Setup = ({ handleChangeScreen }: SetupProps) => {
  const { updatePlayerData, addPlayer } = usePlayerData()
  const [playerName, setName] = useState('')
  const [playerCount, setPlayerCount] = useState<number>(3)
  const [errors, setErrors] = useState({ playerName: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, stateFn: React.Dispatch<React.SetStateAction<string>>) => {
    if (playerName) setErrors({ playerName: '' })
    stateFn(e.target.value)
  }

  const handleSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault()
    if (!playerName) return setErrors({ playerName: 'Name cannot be empty!' })
    
    updatePlayerData(0, { name: playerName })

    if (playerCount > 3) {
      const additionalPlayers = playerCount - 3
      console.log({ additionalPlayers })

      repeatFunction(additionalPlayers, addPlayer)
    }

    handleChangeScreen('game')
  }

  const handlePlayerCountChange = (e: React.MouseEvent, changeValue: -1 | 1) => {
    e.preventDefault()
    if (playerCount === 6 && changeValue === 1) return
    if (playerCount === 3 && changeValue === -1) return

    setPlayerCount(playerCount + changeValue)
  }

  return (
    <div className="setup-container">
      <form className="setup-form">
        <Input
          label="Name"
          name="name"
          onChange={(e) => handleChange(e, setName)}
          error={errors.playerName ?? null}
        />
        <Input
          label="No. of Players"
          name="player-count"
          value={playerCount}
          onChange={() => {}}
        >
          <button onClick={(e) => handlePlayerCountChange(e, -1)}>-</button>
          <button onClick={(e) => handlePlayerCountChange(e, 1)}>+</button>
        </Input>
        <div className="flex-row">
          <input type="submit" onClick={e => handleSubmit(e)} value="Play!" />
        </div>
      </form>
    </div>
  )
}