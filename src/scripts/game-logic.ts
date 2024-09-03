import { gameData, ValueOptions } from './game-data'

const size = 5

export function generateField(): ValueOptions[][] {
    console.log(
        'generated',
        gameData((state) => state.generated)
    )
    if (gameData.getState().generated) return gameData.getState().fieldArraySave
    const fieldArray: ValueOptions[][] = []
    const values = [1, 2, 3, 0]
    gameData.setState({ remainingPoints: 0 })
    fieldArray.pop()

    for (let i = 0; i < size; i++) {
        const row = []
        for (let ii = 0; ii < size; ii++) {
            const generatedValue =
                values[Math.floor(Math.random() * values.length)]
            if (generatedValue > 1) {
                gameData.setState({
                    remainingPoints:
                        gameData.getState().remainingPoints + generatedValue,
                })
            }
            row.push(generatedValue)
        }
        fieldArray.push(row as ValueOptions[])
    }
    gameData.setState({ fieldArraySave: fieldArray })
    gameData.setState({ generated: true })
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

function getBombAmount(arr: number[]) {
    return arr.filter((a) => a === 0).length
}

function getPointAmount(arr: number[]) {
    return arr.filter((a) => a !== 0).reduce((sum, a) => sum + Number(a), 0)
}

export function getRowAndColumnTotals(field: ValueOptions[][]): ValueSummary {
    const rows: ValueSummaries[] = []
    const cols: ValueSummaries[] = []
    for (let i = 0; i < size; i++) {
        const columnValues = []
        for (let ii = 0; ii < size; ii++) {
            columnValues.push(field[ii][i])
        }

        const rowBombs = getBombAmount(field[i])
        const rowPoints = getPointAmount(field[i])
        const colBombs = getBombAmount(columnValues)
        const colPoints = getPointAmount(columnValues)
        cols.push({ points: colPoints, bombs: colBombs })
        rows.push({ points: rowPoints, bombs: rowBombs })
    }
    return { rows, cols }
}
