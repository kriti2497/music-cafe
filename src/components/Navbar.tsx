import strings from "../constants/strings.json";

const Navbar = ({ submitHandler, setSearchVal }: any) => {
  return (
    <div className="p-3 bg-[#f4eafa] text-white flex justify-between">
      <h2 className="text-[30px] logoTitle">{strings.APP_NAME}</h2>
      <div className="text-[#555] flex p-1 rounded-[25px] bg-white w-1/2">
        <input
          className="bg-transparent m-0 px-[15px] py-[5px] text-base color-[inherit] border border-solid border-transparent rounded-[inherit] w-full"
          type="search"
          placeholder={`${strings.SEARCH}...`}
          onKeyDown={(e) => {
            if (e.key === "Enter") submitHandler();
          }}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <button
          className="w-[40px] p-0 m-0 border border-transparent border-solid rounded-[inherit] bg-transparent cursor-pointer opacity-70"
          onClick={submitHandler}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
