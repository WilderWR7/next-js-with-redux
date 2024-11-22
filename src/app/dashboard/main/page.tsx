import { WidgetGrid } from '@/components/dashboard/WidgetGrid'
import React from 'react'

export default function PageMain() {
    return (
        <div className='text-black p-2'>
            <h1 className='mt-2 text-3xl'>Dashboard</h1>
            <span className='text-xl'>Informacion general</span>
            <WidgetGrid />
        </div>
    )
}
