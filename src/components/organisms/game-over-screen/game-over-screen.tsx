import { useState } from 'react'
import './game-over-screen.css'
import { Message } from '../../atoms/message/message'

export const GameOverScreen = () => {
    const [gameOver, setGameOver] = useState(false)
    document.addEventListener(
        'game-status',
        (e: CustomEvent) => {
            const { detail } = e
            if (detail === 'gameover') {
                setGameOver(true)
            }
        },
        { once: true }
    )

    return (
        <div className={`game-over-screen ${gameOver ? 'active' : ''}`}>
            <Message text="You lost!" />
        </div>
    )
}
