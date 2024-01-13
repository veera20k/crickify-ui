'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

export default function RouterRefreshClient() {
  const router = useRouter();
  useEffect(() => {
    const intervalId = setInterval(() => {
      router.refresh();
    }, 10000);
    return () => clearInterval(intervalId);
  }, [])
  return (
    <></>
  )
}
