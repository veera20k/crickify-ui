import Image from 'next/image';
import { Player } from '@/types/Match';
import { calculateAge } from '@/lib/utils';

const baseImgUrl = 'https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/';
export default function PlayerInfoHoverCardContent({ player }: { player: Player }) {
  const dob = player.dateOfBirth && calculateAge(player.dateOfBirth);
  const imageUrl = (player.headshotImageUrl || player.image?.url) ? (baseImgUrl + (player.headshotImageUrl || player.image?.url)) : '/images/cricket-player.png';
  return (
    <div className="min-w-48 mx-auto bg-white border rounded-xl shadow p-4">
      <div className="flex flex-col items-center">
        <Image className='w-24 h-24 mb-3 rounded-full shadow-lg mx-auto' height={player.image?.height || 100} width={player.image?.width || 100} alt='cricket player' src={imageUrl} priority />
        <h5 className="text-xl font-medium text-gray-900">{player.name}</h5>
        <span className="text-sm text-gray-500">{player.playingRoles?.[0]}</span>
      </div>
      <div className='tex-sm'>
        <div className='flex justify-between mx-5'>
          <h4>Gender</h4>
          <h4>{player.gender}</h4>
        </div>
        {dob && <div className='flex justify-between mx-5'>
          <h4>Age</h4>
          <h4>{dob}</h4>
        </div>}
      </div>
    </div>
  )
}
