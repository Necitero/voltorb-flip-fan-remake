import { useState } from 'react'
import {
    ValueOptions,
    setGameStatus,
    getGameStatus,
    reduceAchievablePointsBy,
} from '../../../scripts/game-data'
import './card.css'

interface CardProps {
    value: ValueOptions
}

export const Card = ({ value }: CardProps) => {
    const [flipped, setFlip] = useState(false)
    const [shown, setShown] = useState(false)
    const cardTiles = 9
    const usedValue =
        value !== 0 ? (
            value
        ) : (
            <img className="card-back-bomb" src="/images/voltorb.png" />
        )

    function awaitShown() {
        setShown(true)
        if (value === 0 && getGameStatus() === 'running') {
            setGameStatus('gameover')
            return
        }
        if (value > 1) {
            reduceAchievablePointsBy(value)
        }
    }

    return (
        <div
            className={`card ${flipped ? 'flipped' : ''}`}
            onClick={() => setFlip(true)}
            onAnimationEnd={awaitShown}
        >
            <div className="card-inner">
                {!flipped ? (
                    [...Array(cardTiles)].map((a) => (
                        <div className="card-tile" key={a} />
                    ))
                ) : (
                    <div className="card-back">
                        <p className="card-back-value noselect">
                            {shown && usedValue}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
