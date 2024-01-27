import { RiAlbumFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsExplicitFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

export function Song({ name, artLink, albumName, artists, explicit, onClick }: {
  name: string,
  artLink: string,
  albumName: string,
  artists: string[],
  explicit: boolean,
  onClick?: () => void 
}) {

  const songArtists = artists.join(", ");
  const isMultipleArtists = artists.length > 1;
  const isExplicit = explicit;
  
  return (
    <div className="flex items-center h-36 border-b-2 px-4 cursor-pointer hover:bg-stone-950 active:bg-stone-900" onClick={onClick}>
      <img src={artLink} alt="Album Art" className="p-4 h-36 w-auto select-none" draggable="false" />
      <div className="flex flex-col w-full truncate">
        <span className="text-3xl flex gap-3 font-bold items-center truncate" title={name}>
          {isExplicit ? <BsExplicitFill className="text-stone-300 text-xl" /> : <></>}
          <span className="truncate">{name}</span>
        </span>
        <span className="text-xl flex gap-3 items-center font-medium">
          {isMultipleArtists ? <BsFillPeopleFill /> : <BsFillPersonFill />}
          {songArtists}
        </span>
        <span className="text-lg flex gap-3 items-center">
          <RiAlbumFill />
          {albumName}
        </span>
      </div>
    </div>
  );
}