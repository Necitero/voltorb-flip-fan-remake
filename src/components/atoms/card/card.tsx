import { ValueOptions } from '../../../scripts/game-logic'
import './card.css'

interface CardProps {
    value: ValueOptions
}

export const Card = ({ value }: CardProps) => {
    const cardTiles = 9

    return (
        <div className="card">
            <div className="card-inner">
                {[...Array(cardTiles)].map((a) => (
                    <div className="card-tile" key={a} />
                ))}
                <div className="card-back">
                    <p>{value}</p>
                </div>
            </div>
        </div>
    )
}
