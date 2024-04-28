// interface FieldItems {}

const size = 5

export type ValueOptions = '1' | '2' | '3' | 'Bomb'

export function generateField(): ValueOptions[][] {
    const fieldArray: ValueOptions[][] = []
    const values = ['1', '2', '3', 'Bomb']

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
    return arr.filter((a) => a === 'Bomb').length
}

function getPointAmount(arr: string[]) {
    return arr
        .filter((a) => a !== 'Bomb')
        .reduce((sum, a) => sum + Number(a), 0)
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
