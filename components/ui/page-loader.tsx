import Image from 'next/image'
import React from 'react'
import cricketBall from '../../public/images/cricket-ball.png';
import { cn } from '@/lib/utils';

export default function PageLoader({className}: {className?: string}) {
    return (
        <div className={cn('flex items-center justify-center h-screen', className)}>
            <Image src={cricketBall} alt="loader" className='animate-bounce' width={100} height={100}></Image>
        </div>
    )
}
