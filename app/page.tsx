import ScoreDashboard from '@/components/ScoreDashboard/ScoreDashboard'
import PageLoader from '@/components/ui/page-loader'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div className="p-2 md:w-11/12 mx-auto my-4 min-h-72">
      <Suspense fallback={<PageLoader/>}>
        <ScoreDashboard />
      </Suspense>
    </div>
  )
}
