import { Card } from '../../atoms/card/card'
import './card-field.css'

import { ValueOptions } from '../../../scripts/game-data'

interface CardFieldProps {
    playField: ValueOptions[][]
}

export const CardField = ({ playField }: CardFieldProps) => {
    return (
        <div className="card-field">
            {playField.map((a, aIndex) => {
                return a.map((b: ValueOptions, bIndex) => (
                    <Card value={b} key={`r${aIndex}-c${bIndex}`} />
                ))
            })}
        </div>
    )
}
