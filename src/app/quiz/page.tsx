'use client';

import { Rainbow } from '@/components/Rainbow';
import { SongSearch } from '@/components/SongSearch/SongSearch';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const questions = [
  "Pick the song that gets you going in the morning.",
  "Pick that perfect \"cry in the shower\" song.",
  "Pick a song you know all the words to.",
  "Pick your go-to study song.",
  "Pick a song you could listen to on repeat for hours."
]

export default function QuizPage() {
  const router = useRouter();

  const [questionID, setQuestionID] = useState<number>(0);
  const [songIDs, setSongIDs] = useState<string[]>([]);

  const nextQuestion = () => {
    if (questionID >= 4) router.push("/results") // TODO: load the song IDs
    else setQuestionID(questionID + 1);
  }

  const selectSong = (songID: string) => {
    // Add song ID to IDs
    setSongIDs([...songIDs, songID]);

    // Advance to next question
    nextQuestion();
  }

  return (
    <div className="flex flex-col items-center">
      <Rainbow>find your type</Rainbow>
      <h2 className="text-4xl text-white font-bold mb-6">{questions[questionID]}</h2>
      <SongSearch onSelect={selectSong} />
    </div>
  )
}