type Play = { cells: Array<Array<boolean>>; size: number }

export const play = ({ cells, size }: Play) => {
  let changes: Array<Array<number>> = []
  cells.map((row, rIdx) =>
    row.map((alive, cIdx) => {
      let count = 0
      for (let i = rIdx - 1; i <= rIdx + 1; i++) {
        for (let j = cIdx - 1; j <= cIdx + 1; j++) {
          if (i >= 0 && i < size && j >= 0 && j < size) {
            if (i !== rIdx || j !== cIdx) {
              if (cells[i][j]) {
                count += 1
              }
            }
          }
        }
      }
      if (alive) {
        if (count <= 1 || count >= 4) {
          changes.push([rIdx, cIdx])
        }
      } else {
        if (count === 3) {
          changes.push([rIdx, cIdx])
        }
      }
    })
  )
  return changes
}
