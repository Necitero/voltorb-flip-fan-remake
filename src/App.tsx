import { PlayField } from './components/organisms/play-field/play-field'
import './App.css'
import { GameOverScreen } from './components/atoms/game-over-screen/game-over-screen'

function App() {
    return (
        <main>
            <div id="game">
                <PlayField />
                <GameOverScreen />
            </div>
        </main>
    )
}

export default App
