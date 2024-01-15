import Image from 'next/image'
import React from 'react'
import cricketBall from '../../public/images/cricket-ball.png';

export default function PageLoader() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Image src={cricketBall} alt="loader" className='animate-bounce' width={100} height={100}></Image>
        </div>
    )
}
