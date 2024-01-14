import { useEffect, useState } from "react";

import { ARTISTS_TRACKS_API_URL } from "../constants/constants";
import ArtistDetails from "./ArtistDetails";
import InitialPage from "./InitialPage";
import Loader from "./Loader";
import Navbar from "./Navbar";
import TracksListing from "./TracksListing";

const LandingPage = () => {
  const [searchVal, setSearchVal] = useState("");
  const [artistDetails, setArtistDetails] = useState<any>({});
  const [artistDetailsLoader, setArtistDetailsLoader] = useState(false);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    if (artistDetails.id) {
      fetch(ARTISTS_TRACKS_API_URL + artistDetails.id + "/top-tracks")
        .then((res) => res.json())
        .then((response) => {
          if (response.tracks.length > 0) {
            setTracks(response.tracks);
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }, [artistDetails.id]);

  const submitHandler = () => {
    setArtistDetailsLoader(true);

    fetch(ARTISTS_TRACKS_API_URL + searchVal)
      .then((res) => res.json())
      .then((response) => {
        if (response.artists.total > 0) {
          setArtistDetails(response.artists.items[0]);
          setArtistDetailsLoader(false);
        }
      })
      .catch((error) => {
        setArtistDetailsLoader(false);
        alert(error.message);
      });
  };

  return (
    <>
      <Navbar submitHandler={submitHandler} setSearchVal={setSearchVal} />
      <div className="landing">
        {artistDetailsLoader && <Loader />}

        {!artistDetails?.name && !artistDetailsLoader && <InitialPage />}

        {!artistDetailsLoader && artistDetails?.name && (
          <ArtistDetails artistInfo={artistDetails} />
        )}

        {tracks.length > 0 && <TracksListing tracks={tracks} />}
      </div>
    </>
  );
};

export default LandingPage;
