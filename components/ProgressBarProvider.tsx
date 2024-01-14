'use client';

import React, { Suspense } from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

function ProgressBarProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Suspense fallback={<></>}>
        <ProgressBar
          height="2px"
          color="red"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </Suspense>
    </>)
}

export default ProgressBarProvider;
