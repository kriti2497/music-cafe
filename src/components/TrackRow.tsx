import { useEffect, useState } from "react";

const TrackRow = ({
  trackValue,
  setCurrentTrack,
  currentTrack,
  isPlaying,
}: any) => {
  const { name, album, duration_ms, preview_url } = trackValue;
  const [audio] = useState(new Audio(preview_url));

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
  };

  useEffect(() => {
    if (currentTrack !== preview_url) {
      audio.pause();
      // setIsPlaying(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrack]);

  useEffect(() => {
    return () => audio.pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <tr>
      <td className="text-white p-3">
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
      <td className="flex items-center gap-8 text-white p-3">
        <img
          className="h-12 w-12 rounded-md object-cover"
          src={album.images[2].url}
          alt="track_img"
        />
        <div>
          <p className="font-[600] m-[0 0 10px]">{name}</p>
          {album.artists.map((each: any, index: number) => (
            <>
              <a
                href={each.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className=" text-sm text-white no-underline hover:underline">
                  {each.name}
                </span>
              </a>
              {index + 1 !== album.artists.length && (
                <span className="text-white">, </span>
              )}
            </>
          ))}
        </div>
      </td>
      <td className="text-white p-3">{album.name}</td>
      <td className="text-white p-3">{convertSongDuration(duration_ms)}</td>
    </tr>
  );
};

export default TrackRow;
