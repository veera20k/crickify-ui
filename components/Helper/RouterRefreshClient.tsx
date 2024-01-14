'use client'

import { useRouter } from 'next/navigation';
import React from 'react';
import { useEffect } from 'react';

const RouterRefreshClient = () => {
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
      router.refresh();
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return <></>;
};

export default React.memo(RouterRefreshClient);
