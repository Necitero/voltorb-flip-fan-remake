import { VoltorbCard } from '../../atoms/voltorb-card/voltorb-card'
import './voltorb-field.css'

interface VoltorbFieldProps {
    orientation: 'vertical' | 'horizontal'
    amount: number
}

export const VoltorbField = ({ orientation, amount }: VoltorbFieldProps) => {
    return (
        <div className={`voltorb-field ${orientation}`}>
            {[...Array(amount)].map((a) => (
                <VoltorbCard points={3} bombs={2} key={a} />
            ))}
        </div>
    )
}
