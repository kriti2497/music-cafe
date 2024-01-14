import { useEffect, useState } from "react";

import TrackRow from "./TrackRow";

// import { useState } from "react";

const TracksListing = ({ tracks }: any) => {
  const [currentTrack, setCurrentTrack] = useState("");

  useEffect(() => {
    console.log(currentTrack);
  }, [currentTrack]);

  return (
    <table className="tracksList">
      <thead>
        <tr style={{ textAlign: "left", borderBottom: "1px solid white" }}>
          <th className="eachCell">#</th>
          <th className="eachCell">Title</th>
          <th className="eachCell">Album</th>
          <th className="eachCell">Date Added</th>
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
            // onPlay={() => handlePlayTrack(eachTrack.preview_url)}
            // onPause={handlePauseTrack}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TracksListing;
