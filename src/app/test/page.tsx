import { Rainbow } from "@/components/Rainbow";
import { SongList } from "@/components/SongList/SongList";

export default async function TestPage() {
  // Get a spotify token
  const token = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + btoa(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET)
    },
    body: JSON.stringify({
      grant_type: 'client_credentials'
    })
  })
    .then((res) => res.json())
    .then((data) => data.access_token);

  return (
    <div className="flex flex-col items-center w-full">
      <Rainbow>pick 5 songs</Rainbow>
      <SongList token={token} />
    </div>
  );
}