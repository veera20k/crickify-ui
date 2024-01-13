import React from 'react'
import { Skeleton } from '../ui/skeleton'

export default function MainContentSkelton() {
    return (
        <div className='w-full md:w-9/12 m-auto h-[164px] flex flex-col justify-between'>
            <Skeleton className="h-5 w-full rounded-full bg-slate-100" />
            <Skeleton className="h-5 w-full rounded-full bg-slate-100" />
            <Skeleton className="h-5 w-full rounded-full bg-slate-100" />
            <Skeleton className="h-5 w-full rounded-full bg-slate-100" />
        </div>
    )
}
