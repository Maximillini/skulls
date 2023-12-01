import React, { useState } from "react"
import { Screen } from "../App"
import { Input } from './shared/Input/Input'

type SetupProps = {
  handleChangeScreen: (screen: Screen) => void,
  handleGameDataUpdate: (data: Record<string, unknown>) => void
}

export const Setup = ({ handleChangeScreen, handleGameDataUpdate }: SetupProps) => {
  const [name, setName] = useState('')
  const [playerCount, setPlayerCount] = useState(3)
  const [errors, setErrors] = useState({ name: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, stateFn: React.Dispatch<React.SetStateAction<any>>) => {
    if (name) setErrors({ name: '' })
    stateFn(e.target.value)
  }

  const handleSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault()
    if (!name) return setErrors({ name: 'Name cannot be empty!' })
    handleGameDataUpdate({ name: name, playerCount: playerCount })
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
          error={errors.name ?? null}
        />
        <Input
          label="No. of Players"
          name="player-count"
          value={playerCount}
        >
          <button onClick={(e) => handlePlayerCountChange(e, 1)}>+</button>
          <button onClick={(e) => handlePlayerCountChange(e, -1)}>-</button>
        </Input>
        <div className="flex-row">
          <input type="submit" onClick={e => handleSubmit(e)} value="Play!" />
        </div>
      </form>
    </div>
  )
}