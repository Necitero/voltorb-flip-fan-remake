import './card.css'

export const Card = () => {
    const cardTiles = 9

    return (
        <div className="card">
            <div className="card-inner">
                {[...Array(cardTiles)].map((a) => (
                    <div className="card-tile" key={a} />
                ))}
            </div>
        </div>
    )
}
