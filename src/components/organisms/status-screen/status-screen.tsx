import './status-screen.css'

interface StatusScreenProps {
    active: boolean
    children: JSX.Element
}

export const StatusScreen = ({ active, children }: StatusScreenProps) => {
    return (
        <div className={`status-screen ${active ? 'active' : ''}`}>
            {children}
        </div>
    )
}
