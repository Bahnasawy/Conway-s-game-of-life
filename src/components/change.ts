type One = { cells: Array<Array<boolean>>; x: number; y: number }

export const one = ({ cells, x, y }: One) => {
  let temp = [...cells]
  temp[x][y] = !temp[x][y]
  return temp
}

type Many = { cells: Array<Array<boolean>>; arr: Array<Array<number>> }

export const many = ({ cells, arr }: Many) => {
  let temp = [...cells]
  arr.map(pos => (temp[pos[0]][pos[1]] = !temp[pos[0]][pos[1]]))
  return temp
}
