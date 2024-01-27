'use client';

import { useState } from 'react';

import { FaMagnifyingGlass } from 'react-icons/fa6';
import { Song } from './Song';
import { SpotifyTrack } from '@/lib/spotifyData';

type SearchResponse = {
  tracks: SpotifyTrack[]
};

export function SongSearch({ onSelect }: {
  onSelect: (songID: string) => void
}) {

  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SpotifyTrack[]>([]);

  const performSearch = (query: string) => {
    if (query == "") setResults([]);
    else {
      // Do the search
      fetch("/api/search?query=" + encodeURIComponent(query))
        .then(res => res.json() as Promise<SearchResponse>)
        .then(res => setResults(res.tracks));
    }
  }

  var lastRequest: any;

  // Only perform searches every 100ms
  const delayPerformSearch = (text: string) => {
    // Set the query value
    setQuery(text);

    if (lastRequest) {
      window.clearTimeout(lastRequest);
    }

    lastRequest = setTimeout(() => {
      performSearch(text)
    }, 100);
  }

  return (
    <div className="text-white border-white border-2 w-4/5 flex flex-col">
      <div className="flex items-center gap-4 text-stone-400 bg-stone-950 text-2xl sm:text-4xl px-4 border-b-2 border-stone-400">
        <FaMagnifyingGlass className="text-xl sm:text-3xl" />
        <input className="text-white bg-stone-950 placeholder-stone-400 w-full py-4 outline-none" type="text" onChange={e => delayPerformSearch(e.target.value)} placeholder="Search for a song..." value={query} />
      </div>
      {results.map((track, i) => 
        <Song name={track.name}
          albumName={track.album.name}
          artLink={track.album.images[0].url}
          artists={track.artists.map(artist => artist.name)}
          explicit={track.explicit}
          key={i}
          onClick={() => {
            setQuery("");
            setResults([]);
            onSelect(track.id);
          }} />
      )}
    </div>
  )
}