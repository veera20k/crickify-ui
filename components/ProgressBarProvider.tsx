'use client';

import React from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

function ProgressBarProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ProgressBar
        height="2px"
        color="red"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>)
}

export default ProgressBarProvider;
