'use client'

import { InningBatsman, InningBowler, ScoreTable, Inning } from '@/types/Match';
import PlayerInfoShow from '../ui/match/PlayerInfoShow';
import { Badge } from '../ui/badge';
import { useState } from 'react';
import { FaCircleCheck } from "react-icons/fa6";


export default function ScoreTable({ scoreTable, matchType }: { scoreTable: ScoreTable, matchType: string }) {
  const isTest = matchType === 'TEST';
  const [selectedBadgeNumbers, setSelectedBadgeNumbers] = useState<number[]>([1]);

  const handleBadgeClick = (inningNumber: number) => {
    if (selectedBadgeNumbers.includes(inningNumber)) {
      setSelectedBadgeNumbers(selectedBadgeNumbers.filter((number) => number !== inningNumber));
    } else {
      setSelectedBadgeNumbers([...selectedBadgeNumbers, inningNumber]);
    }
  }
  return (
    <div>
      {scoreTable.innings?.map((inning) =>
        <Badge className={`ml-2 my-2 text-xs cursor-pointer hover:bg-red-100 border-red-100 text-red-500 ${selectedBadgeNumbers.includes(inning?.inningNumber) ? 'bg-red-100' : 'bg-red-50'}`} variant='outline' key={inning.inningNumber} onClick={() => handleBadgeClick(inning.inningNumber)} >
          {inning.team?.name} {isTest && ` - ${inning.inningNumber}`}
          {selectedBadgeNumbers.includes(inning?.inningNumber) && <span className='ml-2'>
            <FaCircleCheck />
          </span>}
        </Badge>
      )}
      {scoreTable.innings?.map((inning) => (
        <>
          {selectedBadgeNumbers.includes(inning?.inningNumber) &&
            <div key={inning.inningNumber}>
              <h1 className='mt-2 bg-red-200 p-2 rounded-t-lg text-red-700'>{getTableHeaderName(inning, isTest)}</h1>
              <BattingTable batsmen={inning.inningBatsmen} />
              <BowlingTable bowlers={inning.inningBowlers} />
            </div>}
        </>
      ))}
    </div>
  )
}

const bowCommonClass = " text-center w-6 md:w-12 lg:w-14";
function BowlingTable({ bowlers }: { bowlers: InningBowler[] }) {
  return <div className="border rounded-b-xl mb-3">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className='font-bold'>
        <tr>
          {['BOWLER', 'O', 'M', 'R', 'W', 'NB', 'WD', 'EC'].map((heading, index) => (
            <th key={index} className={`p-2 pl-3 bg-slate-100 ${(heading === 'NB' || heading === 'WD') ? 'max-sm:hidden': '' } ${index === 0 ? 'text-start md:pl-4 ': ''} ${bowCommonClass}`}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {bowlers.map((bowler, index) => (
          <tr key={bowler.player.id || index}>
            <td className="p-2 pl-3 md:pl-4">
              <PlayerInfoShow player={bowler.player} />
            </td>
            <td className={bowCommonClass}>{bowler.overs}</td>
            <td className={bowCommonClass}>{bowler.maidens}</td>
            <td className={bowCommonClass}>{bowler.conceded}</td>
            <td className={bowCommonClass}>{bowler.wickets}</td>
            <td className={`max-sm:hidden ${bowCommonClass}`}>{bowler.noballs}</td>
            <td className={`max-sm:hidden ${bowCommonClass}`}>{bowler.wides}</td>
            <td className={bowCommonClass}>{bowler.economy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
}

function BattingTable({ batsmen }: { batsmen: InningBatsman[] }) {
  return <div className="border">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className='font-bold'>
        <tr>
          {['BATTER', '', , 'R', 'B', '4s', '6s', 'SR'].map((heading, index) => (
            <th key={index} className={`p-2 bg-slate-100 ${index === 1 ? 'max-sm:hidden text-start' : ''}${index === 0 ? 'text-start md:pl-4  ': ''} w-6 md:w-12`}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {batsmen.filter((batsman) => batsman.battedType === 'yes').map((batsman, index) => (
          <tr key={batsman.player.id || index}>
            <td className={`p-2 pl-3 md:pl-4`}>
              <PlayerInfoShow player={batsman.player} /><br />
              <span className='text-xs hidden max-sm:inline'>{batsman.dismissalText?.long}</span>
            </td>
            <td className={`w-6 max-sm:hidden md:w-12`}>{batsman.dismissalText?.long}</td>
            <td className={`w-6 md:w-12 text-center`}>{batsman.runs}</td>
            <td className={`w-6 md:w-12 text-center`}>{batsman.balls}</td>
            <td className={`w-6 md:w-12 text-center`}>{batsman.fours}</td>
            <td className={`w-6 md:w-12 text-center`}>{batsman.sixes}</td>
            <td className={`w-8 md:w-12 text-center`}>{batsman.strikerate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
}

const getTableHeaderName = (inning: Inning, isTest?: boolean) => {
  const teamName = inning.team.name;
  const innNum = inning.inningNumber;
  if (!isTest || [1, 3, 2, 4].includes(innNum)) {
    const inningLabel = innNum === 1 || innNum === 2 ? '1st' : '2nd';
    return isTest ? `${teamName} - ${inningLabel} Innings` : teamName;
  }
  return `${teamName}`;
}
