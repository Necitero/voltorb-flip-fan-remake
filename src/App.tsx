import { PlayField } from './components/organisms/play-field/play-field'
import './App.css'
import { GameOverScreen } from './components/organisms/game-over-screen/game-over-screen'
import { WinScreen } from './components/organisms/win-screen/win-screen'

function App() {
    return (
        <main>
            <div id="game">
                <PlayField />
                <GameOverScreen />
                <WinScreen />
            </div>
        </main>
    )
}

export default App
