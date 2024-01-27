import { RiAlbumFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsExplicitFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

export async function Song({ songID, token, onClose }: {
  songID: string,
  token: string,
  onClose: () => void
}) {
  // Get the link to the track's album art
  const res = await fetch(`https://api.spotify.com/v1/tracks/${songID}`, {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  });
  
  const data = await res.json() as {
    album: {
      images: { url: string }[],
      name: string
    },
    name: string,
    artists: {
      name: string
    }[],
    explicit: boolean
  };

  const albumArtLink = data.album.images[0].url;
  const songName = data.name;
  const songAlbumName = data.album.name;
  const songArtists = data.artists.map(artist => artist.name).join(", ");
  const isMultipleArtists = data.artists.length > 1;
  const isExplicit = data.explicit;

  
  return (
    <div className="flex items-center h-36 border-b-2 px-4">
      <IoClose className="text-4xl cursor-pointer hover:text-red-100 active:text-red-200" onClick={onClose} />
      <img src={albumArtLink} alt="Album Art" className="p-4 h-36 w-auto select-none" draggable="false" />
      <div className="col-span-2 grid grid-rows-4">
        <span className="text-4xl flex gap-3 font-bold row-span-2 items-center">
          {isExplicit ? <BsExplicitFill className="text-2xl text-stone-300" /> : <></>}
          {songName}
        </span>
        <span className="text-xl flex gap-3 items-center font-medium">
          {isMultipleArtists ? <BsFillPeopleFill /> : <BsFillPersonFill />}
          {songArtists}
        </span>
        <span className="text-lg flex gap-3 items-center">
          <RiAlbumFill />
          {songAlbumName}
        </span>
      </div>
    </div>
  );
}