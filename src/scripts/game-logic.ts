// interface FieldItems {}

const size = 5
let gameStatus: 'running' | 'gameover' = 'running'

export type ValueOptions = '1' | '2' | '3' | '0'

export function generateField(): ValueOptions[][] {
    const fieldArray: ValueOptions[][] = []
    const values = ['1', '2', '3', '0']

    fieldArray.pop()
    for (let i = 0; i < size; i++) {
        const row = []
        for (let ii = 0; ii < size; ii++) {
            const generatedValue =
                values[Math.floor(Math.random() * values.length)]
            row.push(generatedValue)
        }
        fieldArray.push(row as ValueOptions[])
    }
    return fieldArray
}

export interface ValueSummary {
    rows: ValueSummaries[]
    cols: ValueSummaries[]
}

export interface ValueSummaries {
    points: number
    bombs: number
}

function getBombAmount(arr: string[]) {
    return arr.filter((a) => a === '0').length
}

function getPointAmount(arr: string[]) {
    return arr.filter((a) => a !== '0').reduce((sum, a) => sum + Number(a), 0)
}

export function getRowAndColumnTotals(field: ValueOptions[][]): ValueSummary {
    const rows: ValueSummaries[] = []
    for (let i = 0; i < size; i++) {
        const bombs = getBombAmount(field[i])
        const points = getPointAmount(field[i])
        rows.push({ points, bombs })
    }
    const cols: ValueSummaries[] = []
    for (let i = 0; i < size; i++) {
        const columnValues = []
        for (let ii = 0; ii < size; ii++) {
            columnValues.push(field[ii][i])
        }
        const bombs = getBombAmount(columnValues)
        const points = getPointAmount(columnValues)
        cols.push({ points, bombs })
    }
    return { rows, cols }
}

export function setGameStatus(status: 'gameover' | 'running') {
    const event = new CustomEvent('game-status', { detail: status })
    document.dispatchEvent(event)
    gameStatus = status
}

export function getGameStatus() {
    return gameStatus
}
