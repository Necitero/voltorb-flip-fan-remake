import './App.css'
import { CardField } from './components/molecules/card-field/card-field'
import { VoltorbField } from './components/molecules/voltorb-field/voltorb-field'

function App() {
    return (
        <main>
            <div id="test">
                <CardField amount={5} />
                <VoltorbField orientation="horizontal" amount={5} />
            </div>
        </main>
    )
}

export default App
