import { Card } from '../../atoms/card/card'
import './card-field.css'

import { ValueOptions } from '../../../scripts/game-logic'

interface CardFieldProps {
    playField: ValueOptions[][]
}

export const CardField = ({ playField }: CardFieldProps) => {
    // getRowAndColumnTotals(playField)

    return (
        <div className="card-field">
            {playField.map((a) => {
                return a.map((b: ValueOptions) => <Card value={b} />)
            })}
        </div>
    )
}
