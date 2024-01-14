const ArtistDetails = ({ artistInfo }: any) => {
  const { followers, genres, images, name, popularity } = artistInfo;
  return (
    <div className="artistDetails">
      <img
        src={images[1].url}
        height={images[1].height}
        width={images[1].width}
        className="artistImg"
        alt="artist"
      />
      <div className="artistInfo">
        <p className="artistName">{name}</p>
        <p>{genres.join(", ")}</p>
        <p className="artistSubtext noMargin">Followers: {followers.total}</p>
        <p className="artistSubtext">Popularity: {popularity}</p>
      </div>
    </div>
  );
};

export default ArtistDetails;
