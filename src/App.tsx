import { PlayField } from './components/organisms/play-field/play-field'
import './App.css'
import { GameOverScreen } from './components/organisms/game-over-screen/game-over-screen'
import { setGameStatus } from './scripts/game-logic'
import { WinScreen } from './components/organisms/win-screen/win-screen'

function App() {
    return (
        <main>
            <div id="game">
                <PlayField />
                <GameOverScreen />
                <WinScreen />
                <button onClick={() => setGameStatus('win')}>Auto Win</button>
            </div>
        </main>
    )
}

export default App
