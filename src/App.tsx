import { PlayField } from './components/organisms/play-field/play-field'
import './App.css'
import { StatusScreen } from './components/organisms/status-screen/status-screen'
import { Message } from './components/atoms/message/message'
import { gameData } from './scripts/game-data'

function App() {
    const status = gameData((state) => state.gameStatus)
    return (
        <main>
            <div id="game">
                <PlayField />
                <StatusScreen active={status === 'win'}>
                    <Message text="Board clear!" />
                </StatusScreen>
                <StatusScreen active={status === 'gameover'}>
                    <Message text="You lost!" />
                </StatusScreen>
            </div>
        </main>
    )
}

export default App
