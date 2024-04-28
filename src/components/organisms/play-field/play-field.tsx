import { CardField } from '../../molecules/card-field/card-field'
import { VoltorbField } from '../../molecules/voltorb-field/voltorb-field'
import './play-field.css'

export const PlayField = () => {
    return (
        <div className="play-field">
            <CardField amount={5} />
            <VoltorbField orientation="vertical" amount={5} />
            <VoltorbField orientation="horizontal" amount={5} />
        </div>
    )
}
