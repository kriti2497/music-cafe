import { useEffect, useState } from "react";

const TrackRow = ({
  trackValue,
  setCurrentTrack,
  currentTrack,
  isPlaying,
}: any) => {
  const { name, album, duration_ms, preview_url } = trackValue;
  // const [play, setPlay] = useState(false);
  const [audio] = useState(new Audio(preview_url));
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [currentlyPlaying, setCurrentlyPlaying] = useState()

  const convertSongDuration = (duration: number) => {
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / 1000 / 60) % 60);

    const hours = Math.floor((duration / 1000 / 60 / 60) % 24);

    const timeDuration = [
      hours ? minutes.toString().padStart(2, "0") : minutes,
      seconds.toString().padStart(2, "0"),
    ].join(":");

    return timeDuration;
  };

  const togglePlay = () => {
    if (isPlaying) {
      setCurrentTrack(null);
      audio.pause();
    } else {
      setCurrentTrack(preview_url);
      audio.volume = 0.2;
      audio.play();
    }
    // setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (currentTrack !== preview_url) {
      audio.pause();
      // setIsPlaying(false);
    }
  }, [currentTrack]);

  useEffect(() => {
    return () => audio.pause();
  }, []);

  return (
    <tr>
      <td className="eachCell">
        {preview_url ? (
          <span>
            {isPlaying ? (
              <i onClick={togglePlay} className="fa-solid fa-pause"></i>
            ) : (
              <i onClick={togglePlay} className="fa-solid fa-play"></i>
            )}
          </span>
        ) : (
          <span>
            <i className="fa-solid fa-ban"></i>
          </span>
        )}

        {/* {idVal} */}
      </td>
      <td className="trackDetail eachCell">
        <img className="trackImg" src={album.images[2].url} alt="track_img" />
        <div>
          <p className="trackName">{name}</p>
          {album.artists.map((each: any, index: number) => (
            <>
              <a
                href={each.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <span className="artistNames">{each.name}</span>
              </a>
              {index + 1 !== album.artists.length && (
                <span style={{ color: "white" }}>, </span>
              )}
            </>
          ))}
        </div>
      </td>
      <td className="eachCell">{album.name}</td>
      <td className="eachCell">{convertSongDuration(duration_ms)}</td>
    </tr>
  );
};

export default TrackRow;
