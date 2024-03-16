import TrackRow from "./TrackRow";
import strings from "../constants/strings.json";
import { useState } from "react";

// import { useState } from "react";

const TracksListing = ({ tracks }: any) => {
  const [currentTrack, setCurrentTrack] = useState("");

  return (
    <table className="p-4 border-collapse">
      <thead>
        <tr className="text-left border-b border-solid border-white">
          <th className="text-white p-3">#</th>
          <th className="text-white p-3">{strings.TITLE}</th>
          <th className="text-white p-3">{strings.ALBUM}</th>
          <th className="text-white p-3">{strings.DATE_ADDED}</th>
        </tr>
      </thead>
      <tbody>
        {tracks.map((eachTrack: any, index: number) => (
          <TrackRow
            trackValue={eachTrack}
            idVal={index + 1}
            key={eachTrack.id}
            setCurrentTrack={setCurrentTrack}
            currentTrack={currentTrack}
            isPlaying={
              eachTrack.preview_url && currentTrack === eachTrack.preview_url
            }
          />
        ))}
      </tbody>
    </table>
  );
};

export default TracksListing;
