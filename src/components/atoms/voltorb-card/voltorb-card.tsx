import './voltorb-card.css'

interface VoltorbCardProps {
    points: number
    bombs: number
}

export const VoltorbCard = ({ points, bombs }: VoltorbCardProps) => {
    return (
        <div className={`voltorb-card`}>
            <div className="voltorb-card__point-digit">
                <span>0{points}</span>
            </div>
            <div className="voltorb-card__bomb-digit">
                <img src="/images/voltorb.png" />
                <span>{bombs}</span>
            </div>
        </div>
    )
}
