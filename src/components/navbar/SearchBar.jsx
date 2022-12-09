import { SearchOutlined } from "@mui/icons-material";
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex bg-white text-black items-center ">
      <SearchOutlined />
      <input placeholder="searh..." className="text-black outline-none p-2 " />
    </div>
  );
};

export default SearchBar;
