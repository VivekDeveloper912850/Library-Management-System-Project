import React from 'react'
import { useState } from 'react'
const Hooks = () => {
    const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <button
        onClick={() => setCount(count + 1)}
        className="px-5 py-2 mb-4 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
      >
        Increase
      </button>

      <button
        onClick={() => setCount(count - 1)}
        className="px-5 py-2 mb-4 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
      >
        Decrease
      </button>

      <div className="p-6 bg-white rounded-lg shadow-lg w-64 text-center">
        <h2 className="text-xl font-semibold">Counter Card</h2>
        <p className="mt-2 text-2xl font-bold text-gray-800">{count}</p>
      </div>
    </div>
  )
}

export default Hooks
