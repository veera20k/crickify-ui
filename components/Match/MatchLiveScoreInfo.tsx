import React from 'react'
import LiveScoreInfo from './LiveScoreInfo'
import { MatchInfo, SupportInfo } from '@/types/Match'
import RecentBalls from './RecentBalls'
import CurrentDuoTable from './CurrentDuoTable'
import ScoreCard from '../ScoreDashboard/ScoreCard/ScoreCard'

export default function MatchLiveScoreInfo({ match, supportInfo }: { match?: MatchInfo, supportInfo?: SupportInfo}) {
    let mainContent = <></>;
    const isLive = match?.state === 'LIVE';
    const summary = supportInfo?.liveSummary;
    if (isLive && (summary?.batsmen.length || summary?.bowlers.length)) {
        if (!summary?.recentBalls) {
            return <></>;
        }
        if (summary && summary.batsmen && summary.batsmen) {
            mainContent = <>
                <CurrentDuoTable currentDuo={summary.batsmen} role="batsman" />
                <CurrentDuoTable currentDuo={summary.bowlers} role="bowler" />
            </>;
        }
    } else if(match) {
        mainContent = <ScoreCard match={match} />
    }
    return (
        <div className='w-full md:w-8/12 lg:9/12 m-auto my-4'>
          {isLive && <LiveScoreInfo teams={match?.teams} overs={match?.liveOvers} scheduledOvers={match?.scheduledOvers} runRates={supportInfo?.liveInfo} />}  
            {mainContent}
          {isLive && <RecentBalls supportInfo={supportInfo} />}  
        </div>
    )
}
