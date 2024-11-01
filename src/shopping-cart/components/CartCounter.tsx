'use client'
import { useState } from 'react'

interface Props {
    value?: number
}


export const CartCounter = ({value = 0}:Props) => {
    const [count, setCount] = useState(value);
    return (
        <div>
            <p className='text-9xl'>{count}</p>
            <div className="flex">
                <button
                    className='p-2 bg-blue-500 text-white rounded-md mr-2'
                    onClick={() => setCount(count - 1)}
                >
                    -1
                </button>
                <button
                    className='p-2 bg-blue-500 text-white rounded-md'
                    onClick={() => setCount(count + 1)}
                >
                    +1
                </button>
            </div>
        </div>
    )
}
