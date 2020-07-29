import React, { useState, useEffect } from "react"
import Cell from "../components/cell"
import { one, many } from "../components/change"
import { play } from "../components/play"

type Arr = Array<Array<boolean>>

let size = 35

const arr: Arr = new Array(size).fill(Array(size).fill(false))

const index = () => {
  const [cells, setCells]: [Array<Array<boolean>>, any] = useState([...arr])
  const [isActive, setActive] = useState(false)
  const [speed, setSpeed] = useState(1000)

  const setOne = (x: number, y: number) => {
    setCells(one({ cells: cells, x: x, y: y }))
  }

  const toggle = () => {
    setActive(!isActive)
  }

  const slider = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(event.target.valueAsNumber)
  }

  useEffect(() => {
    let interval: any = null
    if (isActive) {
      interval = setInterval(() => {
        setCells(many({ cells: cells, arr: play({ cells, size }) }))
      }, speed)
    } else if (!isActive && interval != null) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, cells, speed])

  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-100 bg-gray-800">
      <div className="flex flex-col">
        {cells.map((row, rIdx) => (
          <div className="flex flex-row" key={rIdx}>
            {row.map((alive, cIdx) => (
              <div key={`(${rIdx}, ${cIdx})`}>
                <Cell alive={alive} pos={[rIdx, cIdx]} setAlive={setOne} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="justify-start">
        <button
          className="px-4 py-1 m-2 text-gray-900 bg-gray-200 rounded-lg"
          onClick={toggle}
        >
          {isActive ? "Stop" : "Start"}
        </button>
        <input
          type="range"
          min={1}
          max={1000}
          step={1}
          defaultValue={speed}
          onChange={value => slider(value)}
        />
      </div>
    </div>
  )
}

export default index
