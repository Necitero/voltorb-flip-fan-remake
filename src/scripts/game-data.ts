import { create } from 'zustand'

export interface ValueSummary {
    rows: ValueSummaries[]
    cols: ValueSummaries[]
}

export interface ValueSummaries {
    points: number
    bombs: number
}

export type ValueOptions = 1 | 2 | 3 | 0
type GameStatuses = 'running' | 'gameover' | 'win'
interface gameDataProperties {
    gameStatus: GameStatuses
    remainingPoints: number
    generated: boolean
    fieldArraySave: ValueOptions[][]
    setGenerated: () => void
}

export const gameData = create<gameDataProperties>()((set) => ({
    gameStatus: 'running',
    remainingPoints: 0,
    generated: false,
    fieldArraySave: [],
    setGenerated: () => set({ generated: true }),
}))

export function setGameStatus(status: GameStatuses) {
    gameData.setState({ gameStatus: status })
}
