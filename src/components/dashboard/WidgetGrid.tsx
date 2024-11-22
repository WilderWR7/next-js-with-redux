'use client'
import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { IoCartOutline } from 'react-icons/io5'
import { useAppSelector } from '@/store'

export const WidgetGrid = () => {
    const count = useAppSelector(state => state.counter.count)

    return (
        <div className='flex flex-wrap p-2 items-center justify-center'>
            <SimpleWidget
                title={count + ''}
                link='/dashboard/counter'
                subtitle='Contador de Productos'
                Icon={<IoCartOutline size={70} className='text-blue-600' />}
                label='Contador de Productos'
            />
        </div>
    )
}
