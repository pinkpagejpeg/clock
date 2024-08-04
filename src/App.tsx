import { FC } from "react"
import Clock from "./components/clock/Clock"
import classes from "./styles/main.module.scss"

const App: FC = () => {

  return (
    <div className={classes.container}>
      <Clock />
    </div>
  )
}

export default App
