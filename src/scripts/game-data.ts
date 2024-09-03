import { create } from 'zustand'

export type ValueOptions = 1 | 2 | 3 | 0
interface gameDataProperties {
    gameStatus: 'running' | 'gameover' | 'win'
    remainingPoints: number
    generated: boolean
    fieldArraySave: ValueOptions[][]
}

export const gameData = create<gameDataProperties>()(() => ({
    gameStatus: 'running',
    remainingPoints: 0,
    generated: false,
    fieldArraySave: [],
}))

export function setGameStatus(status: 'gameover' | 'running' | 'win') {
    gameData.setState({ gameStatus: status })
    console.log(gameData.getState().gameStatus)
}

export function getGameStatus() {
    return gameData.getState().gameStatus
}

export function reduceAchievablePointsBy(amount: number) {
    gameData.setState({
        remainingPoints: gameData.getState().remainingPoints - amount,
    })
    if (gameData.getState().remainingPoints === 0) {
        setGameStatus('win')
    }
}
