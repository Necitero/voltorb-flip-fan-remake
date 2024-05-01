import './message.css'

interface MessageProps {
    text: string
}

export const Message = ({ text }: MessageProps) => {
    return (
        <div className="message">
            <div className="message-inner">
                <p>{text}</p>
            </div>
        </div>
    )
}
