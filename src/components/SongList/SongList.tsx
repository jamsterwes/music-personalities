import { FaPlus } from 'react-icons/fa6';
import { Song } from './Song';

export function SongList({ token }: { token: string }) {
  return (
    <div className="text-white text-4xl border-white border-2 w-4/5 flex flex-col">
      <Song songID="1yYlpGuBiRRf33e1gY61bN" token={token} />      
      <div className="py-2 flex justify-center items-center gap-6 cursor-pointer hover:bg-stone-800">
        <FaPlus /> Add Song
      </div>
    </div>
  )
}