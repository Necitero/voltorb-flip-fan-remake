import { VoltorbCard } from '../../atoms/voltorb-card/voltorb-card'
import './voltorb-field.css'
import { ValueSummaries } from '../../../scripts/game-data'

interface VoltorbFieldProps {
    orientation: 'vertical' | 'horizontal'
    summaries: ValueSummaries[]
}

export const VoltorbField = ({ orientation, summaries }: VoltorbFieldProps) => {
    return (
        <div className={`voltorb-field ${orientation}`}>
            {summaries.map((a, index) => (
                <VoltorbCard points={a.points} bombs={a.bombs} key={index} />
            ))}
        </div>
    )
}
