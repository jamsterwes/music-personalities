import Image from "next/image";

export async function Song({ songID, token }: { songID: string, token: string }) {
  // Get the link to the track's album art
  // TODO: songID
  const songID_temp = "0LqhbUfmHsxovfSirhEIGu";
  const albumArtLink = await fetch(`https://api.spotify.com/v1/tracks/${songID_temp}`, {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  })
    .then((res) => res.json())
    .then((data) => data.album.images[0].url);
  
  return (
    <div className="grid grid-cols-3">
      <Image src={albumArtLink} alt="Album Art" width={64} height={64} />
    </div>
  );
}