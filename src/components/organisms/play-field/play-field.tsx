import {
    generateField,
    getRowAndColumnTotals,
} from '../../../scripts/game-logic'
import { CardField } from '../../molecules/card-field/card-field'
import { VoltorbField } from '../../molecules/voltorb-field/voltorb-field'
import './play-field.css'

export const PlayField = () => {
    const playField = generateField()
    const summaries = getRowAndColumnTotals(playField)

    return (
        <div className="play-field">
            <CardField playField={playField} />
            <VoltorbField orientation="vertical" summaries={summaries.rows} />
            <VoltorbField orientation="horizontal" summaries={summaries.cols} />
        </div>
    )
}
