import { Screen } from "../App"

type LandingProps = {
  handleChangeScreen: (screen: Screen) => void
}

export const Landing = ({ handleChangeScreen }: LandingProps) => {
  return (
    <div className="landing-container">
      <h1>SKULLS</h1>
      <button className="primary-btn" onClick={() => handleChangeScreen('setup')} >New Game</button>
    </div>
  )
}