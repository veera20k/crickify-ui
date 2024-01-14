import { Player, TeamInfo } from "@/types/Match";
import PlayerInfoShow from "../ui/match/PlayerInfoShow";

export default async function Playing11(props: { matchId: string, seriesId: string }) {
  const { matchId, seriesId } = props;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/match/playingEleven/${matchId}/${seriesId}`);
  if (!response.ok) {
    return <div>Failed to fetch data</div>
  }
  const data: { players: {playerRoleType: string, player: Player }[], team: TeamInfo['team'] }[] = await response.json();
  const maxSquadLen = Math.max(...data.map((eleven) => eleven.players.length));

  if (Object.keys(data).length === 0) {
    return <div>No data found</div>
  }
  return (
    <div className="border my-3 page-transition-fadeInUp rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="font-bold">
          <tr className="bg-slate-100">
            <th className="p-2 pl-3 text-start md:w-2/12">S.NO</th>
            {data.map((squad) => (
              <th key={squad.team?.id} className={`p-2 pl-3 text-start md:w-6/12`}>
                {squad.team?.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[...Array(maxSquadLen)].map((_, currIdx) => (
            <tr key={currIdx}>
              <td className="p-3 pl-3 md:w-2/12">{currIdx + 1}</td>
              {data.map((squad) => (
                <td key={squad.team?.id} className="md:w-6/12">
                  {squad.players[currIdx]?.player && <PlayerInfoShow player={squad.players[currIdx]?.player} isCurrent={false} isCaptain={squad.players[currIdx]?.playerRoleType === 'C'} />}
                  <span className="text-xs font-light block">
                  {squad.players[currIdx]?.player.playingRoles?.[0] || ''}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
