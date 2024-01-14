import React from 'react'
import { MatchInfo, SupportInfo } from '@/types/Match'
import RecentBalls from './RecentBalls'
import CurrentDuoTable from './CurrentDuoTable'
import ScoreCard from '../ScoreDashboard/ScoreCard/ScoreCard'
import { LiveInfo, TeamInfo } from '@/types/Match';
import Image from 'next/image';

interface LiveScoreInfoProps {
    teams?: TeamInfo[];
    overs?: number;
    runRates?: LiveInfo;
}

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
          {isLive && <LiveScoreInfo teams={match?.teams} overs={match?.liveOvers} runRates={supportInfo?.liveInfo} />}  
            {mainContent}
          {isLive && <RecentBalls supportInfo={supportInfo} />}  
        </div>
    )
}

const baseImgUrl = 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/';
function LiveScoreInfo({ teams, overs, runRates }: LiveScoreInfoProps) {
    if (!teams || !overs || !runRates) {
        return <></>;
    }
    const rrr = runRates?.requiredRunrate || null;
    const crr = runRates?.currentRunRate;
    return (
        <>
            {teams.map((team) => (
                <div key={team.team.id}>
                    {!!team.score && (
                        <div className="flex items-center mt-1">
                            <div className={`flex items-center text-lg font-bold ${!team.isLive && 'opacity-50 text-sm'}`}>
                                {!!team.team.imageUrl && <Image src={baseImgUrl + team.team.imageUrl} alt="Flag" height={15} width={15} className="mr-1" />}
                                <span className="mr-1">{team.team.abbreviation}</span>
                                <span>{team.score}</span>
                                 <span className='ml-1'>{!!team.scoreInfo && '(' + team.scoreInfo + ')'}</span>
                            </div>
                            {!!team.isLive && <>
                                {!!crr && <span className={`ml-3 text-sm ${rrr && (rrr <= crr ? 'text-green-600' : 'text-red-600')}`}>CRR: {crr}</span>}
                                {!!rrr && <span className={`ml-3 text-sm}`}>RR: {rrr}</span>}
                            </>}
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}
