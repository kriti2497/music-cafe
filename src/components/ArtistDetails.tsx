import strings from "../constants/strings.json";
const ArtistDetails = ({ artistInfo }: any) => {
  const { followers, genres, images, name, popularity } = artistInfo;
  const formatNumber = (num: number, precision: number = 2) => {
    const suffixValues = [
      { suffix: "T", threshold: 1e12 },
      { suffix: "B", threshold: 1e9 },
      { suffix: "M", threshold: 1e6 },
      { suffix: "K", threshold: 1e3 },
      { suffix: "", threshold: 1 },
    ];

    const found = suffixValues.find((x) => Math.abs(num) >= x.threshold);
    if (found) {
      const formatted =
        (num / found.threshold).toFixed(precision) + found.suffix;
      return formatted;
    }

    return num;
  };

  return (
    <div className="flex gap-4 p-4">
      <img
        src={images[1].url}
        height={images[1].height}
        width={images[1].width}
        className="rounded-[12px] object-cover"
        alt="artist"
      />
      <div className="w-full flex flex-col justify-end p-[25px 10px]">
        <p className="font-[600] text-7xl m-0 text-white">{name}</p>
        <p className="text-xl my-1 text-white">{genres.join(", ")}</p>
        <p className="text-xl my-1 text-white">
          {strings.FOLLOWERS}: {formatNumber(followers.total)}
        </p>
        <p className="text-xl my-1 text-white">
          {strings.POPULARITY}: {popularity}
        </p>
      </div>
    </div>
  );
};

export default ArtistDetails;
