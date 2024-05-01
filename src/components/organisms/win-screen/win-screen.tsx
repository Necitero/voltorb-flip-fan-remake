import { useState } from 'react'
import './win-screen.css'
import { Message } from '../../atoms/message/message'

export const WinScreen = () => {
    const [winState, setWinState] = useState(false)
    document.addEventListener(
        'game-status',
        (e: CustomEvent) => {
            const { detail } = e
            if (detail === 'win') {
                setWinState(true)
            }
        },
        { once: true }
    )

    return (
        <div className={`win-screen ${winState ? 'active' : ''}`}>
            <Message text="Board clear!" />
        </div>
    )
}
