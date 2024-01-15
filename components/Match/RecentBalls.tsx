import React from 'react';
import { SupportInfo } from '@/types/Match';

interface RecentBallsProps {
  supportInfo?: SupportInfo;
}

function RecentBalls({ supportInfo }: RecentBallsProps) {
  if (!supportInfo || !supportInfo?.liveSummary) {
    return <></>;
  }

  const { recentBalls } = supportInfo?.liveSummary;
  const slicedBalls = recentBalls.toReversed().slice(-19);

  return (
    <>
      {!!slicedBalls.length &&
        <div className='flex justify-center mt-2'>
          Recent:
          {slicedBalls.map((ball) => (
            <span key={ball.id} className={`ml-1 ${!!ball.isWicket && 'text-red-500 underline'}`}>
              {ball.isWicket ? 'W' : ball.totalRuns} {ball.ballNumber === 6 && ' | '}
            </span>
          ))}
        </div>}
    </>
  );
}

export default RecentBalls;
