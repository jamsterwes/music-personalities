import { Rainbow } from "@/components/Rainbow";
import { SongList } from "@/components/SongList/SongList";

export default async function TestPage() {

  // Get a spotify token
  const res = await fetch('https://accounts.spotify.com/api/token?grant_type=client_credentials', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Basic ' + btoa(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  const data = await res.json();

  const token = data.access_token;

  return (
    <div className="flex flex-col items-center w-full">
      <Rainbow>pick 5 songs</Rainbow>
      <SongList token={token} />
    </div>
  );
}