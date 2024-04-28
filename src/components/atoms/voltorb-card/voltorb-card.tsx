import './voltorb-card.css'

interface VoltorbCardProps {
    points: number
    bombs: number
}

export const VoltorbCard = ({ points, bombs }: VoltorbCardProps) => {
    const pointString = points.toString()
    return (
        <div className={`voltorb-card`}>
            <div className="voltorb-card__point-digit">
                <span>
                    {pointString.length === 1 ? `0${pointString}` : pointString}
                </span>
            </div>
            <div className="voltorb-card__bomb-digit">
                <div className="voltorb-card__sprite" />
                <span>{bombs}</span>
            </div>
        </div>
    )
}
