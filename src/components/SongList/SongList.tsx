'use client';

import { FaPlus } from 'react-icons/fa6';
import { Song } from './Song';
import { useState } from 'react';

export function SongList({ token }: { token: string }) {

  const [songs, setSongs] = useState<string[]>([
    "1yYlpGuBiRRf33e1gY61bN",
    "4zlbKky2yA657Sk5rekZoR",
    "0snQkGI5qnAmohLE7jTsTn"
  ]);

  const onClose = (i: number) => {
    setSongs([...songs.slice(0, i), ...songs.slice(i)]);
  }

  return (
    <div className="text-white border-white border-2 w-4/5 flex flex-col">
      {songs.map((songID, i) => 
        <Song key={songID} songID={songID} token={token} onClose={() => onClose(i)} />
      )}
      <div className="text-4xl py-2 flex justify-center items-center gap-6 cursor-pointer hover:bg-stone-800">
        <FaPlus /> Add Song
      </div>
    </div>
  )
}