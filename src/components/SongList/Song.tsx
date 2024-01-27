export async function Song({ songID, token }: { songID: string, token: string }) {
  // Get the link to the track's album art
  const res = await fetch(`https://api.spotify.com/v1/tracks/${songID}`, {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  });
  
  const data = await res.json();

  const albumArtLink = data.album.images[0].url;

  
  return (
    <div className="grid grid-cols-3 items-center h-48 border-b-2">
      <img src={albumArtLink} alt="Album Art" className="p-4 h-48 w-auto" />
      <div className="col-span-2 grid grid-rows-3">
        <span>Night Shift</span>
        <span>Lucy Dacus</span>
        <span>Historian</span>
      </div>
    </div>
  );
}