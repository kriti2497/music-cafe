const Navbar = ({ submitHandler, setSearchVal }: any) => {
  return (
    <div className="navbar">
      <h2 className="logoTitle">Music Cafe</h2>
      <div className="searchForm">
        <input
          type="search"
          placeholder="Search..."
          onKeyDown={(e) => {
            if (e.key === "Enter") submitHandler();
          }}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <button className="searchBtn" onClick={submitHandler}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
