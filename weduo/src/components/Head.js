import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      getVideosSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // Search for videos suggestion
  const getVideosSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(searchQuery);
  };

  return (
    <div className="grid grid-flow-col shadow-lg">
      <div
        className="flex col-span-1 cursor-pointer"
        onClick={() => toggleMenuHandler()}
      >
        <img
          className="h-8 m-2"
          alt="hamburger menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
        <a href="/">
          <img
            className="h-16 -mt-2"
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMvOCSdKCCkEOdE7LSl7GKIMjjDXTWVwx18w&usqp=CAU"
          />
        </a>
      </div>
      <div className="m-4 col-span-10 ml-36">
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-1/2 border-2 border-solid border-gray-700 p-2 rounded-l-full -mt-4 pl-4"
          />
          <button className="border border-gray-700 p-2 px-5 rounded-r-full bg-gray-200 cursor-pointer hover:bg-black hover:text-green-500">
            Search 🔍
          </button>
        </div>
        <div className="fixed bg-white py-2 px-5 w-[27rem] rounded-lg shadow-xl border border-gray-100 ">
          <ul>
            <li className=" py-2 m-1 shadow-sm cursor-pointer hover:bg-gray-100 px-1">
              🔍 asdasd
            </li>
            <li className=" py-2 m-1 shadow-sm cursor-pointer hover:bg-gray-100 px-1">
              {" "}
              🔍 asdasd
            </li>
            <li className=" py-2 m-1 shadow-sm cursor-pointer hover:bg-gray-100 px-1">
              {" "}
              🔍 asdasd
            </li>
            <li className=" py-2 m-1 shadow-sm cursor-pointer hover:bg-gray-100 px-1">
              {" "}
              🔍 asdasd
            </li>
            <li className=" py-2 m-1 shadow-sm cursor-pointer hover:bg-gray-100 px-1">
              {" "}
              🔍 asdasd
            </li>
            <li className=" py-2 m-1 shadow-sm cursor-pointer hover:bg-gray-100 px-1">
              {" "}
              🔍 asdasd
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-12"
          src="https://www.shutterstock.com/image-vector/user-icon-260nw-523867123.jpg"
          alt="User Icon"
        />
      </div>
    </div>
  );
};

export default Head;
