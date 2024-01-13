import { CurrentPlayerInfo } from "@/types/Match";
import PlayerInfoShow from "../ui/match/PlayerInfoShow";

export default function CurrentDuoTable(props: { currentDuo: CurrentPlayerInfo[], role: string }) {
  const isBatsman = props.role === 'batsman';
  const commonClass = "text-center w-7 md:w-14";
  return (
    <table className="w-full mt-2">
      <thead className="bg-gray-100 ">
        <tr>
          <th className="text-left pl-1">
            {isBatsman ? 'Batter' : 'Bowler'}
          </th>
          <th className={commonClass}>
            {isBatsman ? 'R' : 'O'}
          </th>
          <th className={commonClass}>
            {isBatsman ? 'B' : 'M'}
          </th>
          <th className={commonClass}>
            {isBatsman ? '4s' : 'R'}
          </th>
          <th className={commonClass}>
            {isBatsman ? '6s' : 'W'}
          </th>
          <th className="text-center w-10 md:w-14">
            {isBatsman ? 'SR' : 'ECO'}
          </th>
        </tr>
      </thead>
      <tbody>
        {props.currentDuo.map((current, index) => (
          <tr key={current._uid}>
            <td className="text-left text-blue-600">
              <PlayerInfoShow player={current.player} isCurrent={index === 0} />
            </td>
            <td className={commonClass}>
              {isBatsman ? current.runs : current.overs}
            </td>
            <td className={commonClass}>
              {isBatsman ? current.balls : current.maidens}
            </td>
            <td className={commonClass}>
              {isBatsman ? current.fours : current.conceded}
            </td>
            <td className={commonClass}>
              {isBatsman ? current.sixes : current.wickets}
            </td>
            <td className="text-center w-10 md:w-14">
              {isBatsman ? current.strikerate : current.economy}
            </td>
            <td>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
