import React, { useState } from "react"

type Props = { alive: boolean; pos: [number, number]; setAlive: Function }

const cell = ({ alive, pos, setAlive }: Props) => {
  const update = () => {
    setAlive(pos[0], pos[1])
  }

  return (
    <div
      className={
        (alive ? "bg-yellow-700 " : "bg-gray-600 ") +
        " border-2 border-gray-900 w-6 h-6 hover:bg-yellow-500"
      }
      onClick={() => update()}
    ></div>
  )
}

export default cell
