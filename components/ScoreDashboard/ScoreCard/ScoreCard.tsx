import { MatchInfo } from '@/types/Match'
import { Badge } from "@/components/ui/badge"
import Image from 'next/image';
import { getRandomColor } from '@/lib/utils';
import styles from './sample.module.css'

const randomColor = getRandomColor();
const baseImgUrl = 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/';
export default function ScoreCard({ match }: { match: MatchInfo }) {
  if (!match) {
    return <div>Not Exist</div>
  }
  let matchTitle = match.title + ' , ' + (match.longName || match.series.longName);
  const color = match.badgeColor || randomColor;
  return (
    <div className={`p-2 border rounded-xl`}>
      <div className='flex items-center'>
        <Badge style={{ backgroundColor: color }} className='text-white font-normal'>{match.format}</Badge>
        <span className='text-xs ml-2 truncate' title={matchTitle}>
          {matchTitle}
        </span>
        <span className='ml-auto text-red-500 text-sm animate-pulse'>
          {match.state === 'LIVE' && 'Live'}
        </span>
      </div>
      <div className='mt-1 p-2'>
        {match.teams.map((team, index) => (
          <div key={index} className="flex items-center justify-between mt-1">
            <div className="flex items-center">
              {team.team.imageUrl && <Image src={baseImgUrl + team.team.imageUrl} alt="Flag" height={15} width={15} className="mr-1" />}
              <span className="mr-1">{team.team.abbreviation}</span>
            </div>
            {team.score && <span> <span className='inline max-[350px]:hidden'> {team.scoreInfo && `(${team.scoreInfo})`} </span>{team.score}</span>}
          </div>
        ))}
      </div>
      <span className='block overflow-hidden whitespace-nowrap overflow-ellipsis w-full text-sm ml-2'>
        { match.result || match.statusText || 'Match yet to begin'}
      </span>
    </div>
  )
}

