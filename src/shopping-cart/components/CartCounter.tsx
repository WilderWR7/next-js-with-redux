'use client'
import { useAppDispatch, useAppSelector } from '@/store'
import { addOne, initCounterState, resetCount, substractOne } from '@/store/counter/CounterSlice'
import { useEffect, useState } from 'react'

interface Props {
    value?: number
}


export const CartCounter = ({ value = 0 }: Props) => {

    const count = useAppSelector(state => state.counter.count)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(initCounterState(value))
    }, [dispatch, value])

    return (
        <div>
            <p className='text-9xl'>{count}</p>
            <div className="flex">
                <button
                    className='p-2 bg-blue-500 text-white rounded-md mr-2'
                    onClick={() => dispatch(substractOne())}
                >
                    -1
                </button>
                <button
                    className='p-2 bg-blue-500 text-white rounded-md'
                    onClick={() => dispatch(addOne())}
                >
                    +1
                </button>
            </div>
        </div>
    )
}
