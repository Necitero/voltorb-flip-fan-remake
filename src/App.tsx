import { PlayField } from './components/organisms/play-field/play-field'
import './App.css'
import { StatusScreen } from './components/organisms/status-screen/status-screen'
import { Message } from './components/atoms/message/message'
import { useState } from 'react'

function App() {
    // 'running' | 'gameover' | 'win'
    const [gameState, setGameState] = useState('running')

    document.addEventListener(
        'game-status',
        (e: CustomEvent) => {
            const { detail } = e
            setGameState(detail)
        },
        { once: true }
    )

    return (
        <main>
            <div id="game">
                <PlayField />
                <StatusScreen active={gameState === 'win'}>
                    <Message text="Board clear!" />
                </StatusScreen>
                <StatusScreen active={gameState === 'gameover'}>
                    <Message text="You lost!" />
                </StatusScreen>
            </div>
        </main>
    )
}

export default App
