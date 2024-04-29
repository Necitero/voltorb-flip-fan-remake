import { useState } from 'react'
import './game-over-screen.css'

export const GameOverScreen = () => {
    const [gameOver, setGameOver] = useState(false)
    document.addEventListener(
        'game-status',
        (e: CustomEvent) => {
            console.log(e)
            setGameOver(true)
        },
        { once: true }
    )

    return (
        <div className={`game-over-screen ${gameOver ? 'active' : ''}`}>
            You lost lol
        </div>
    )
}
