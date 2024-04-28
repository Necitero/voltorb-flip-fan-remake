import { Card } from '../../atoms/card/card'
import './card-field.css'

interface CardFieldProps {
    amount: number
}

export const CardField = ({ amount }: CardFieldProps) => {
    const playField = [
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
    ]

    return (
        <div
            className="card-field"
            style={{ '--columns': amount } as React.CSSProperties}
        >
            {playField.map((a) => {
                return a.map((b) => <Card key={b} />)
            })}
        </div>
    )
}
