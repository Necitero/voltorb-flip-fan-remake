import { PlayField } from './components/organisms/play-field/play-field'
import './App.css'

function App() {
    document.addEventListener(
        'game-status',
        (e: CustomEvent) => {
            console.log(e)
        },
        { once: true }
    )

    return (
        <main>
            <div id="test">
                <PlayField />
            </div>
        </main>
    )
}

export default App
