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
    <div className="flex items-center h-24 sm:h-36 border-b-2 sm:px-4 cursor-pointer hover:bg-stone-950 active:bg-stone-900" onClick={onClick}>
      <img src={artLink} alt="Album Art" className="p-4 h-24 sm:h-36 w-auto select-none" draggable="false" />
      <div className="flex flex-col w-full truncate">
        <span className="text-md sm:text-3xl flex gap-1 sm:gap-3 font-bold items-center truncate" title={name}>
          {isExplicit ? <BsExplicitFill className="text-stone-300 text-md sm:text-xl" /> : <></>}
          <span className="truncate">{name}</span>
        </span>
        <span className="text-sm sm:text-xl flex gap-1 sm:gap-3 items-center font-medium truncate" title={songArtists}>
          {isMultipleArtists ? <BsFillPeopleFill className="text-stone-300 text-md sm:text-xl" /> : <BsFillPersonFill className="text-stone-300 text-md sm:text-xl" />}
          <span className="truncate">{songArtists}</span>
        </span>
        <span className="text-sm sm:text-lg flex gap-1 sm:gap-3 items-center truncate" title={albumName}>
          <RiAlbumFill className="text-stone-300 text-lg sm:text-xl" />
          <span className="truncate">{albumName}</span>
        </span>
      </div>
    </div>
  );
}