import { LiveInfo, TeamInfo } from '@/types/Match';
import Image from 'next/image';

interface LiveScoreInfoProps {
    teams?: TeamInfo[];
    overs?: number;
    runRates?: LiveInfo;
    scheduledOvers?: number;
}

const baseImgUrl = 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/';

export default function LiveScoreInfo({ teams, overs, runRates, scheduledOvers }: LiveScoreInfoProps) {
    if (!teams || !overs || !runRates || !scheduledOvers) {
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
                                <span>{team.score}</span> <span className='ml-1'>({team.isLive ? overs : scheduledOvers})</span>
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
