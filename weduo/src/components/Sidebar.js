import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // Early Return
  if (!isMenuOpen) return null;
  return (
    <div className="w-64 p-5 shadow-lg mt-2">
      <h1 className="font-bold">Menu</h1>
      <ul>
        <li className="cursor-pointer hover:bg-black hover:text-green-500 hover:py-2 px-2 scroll hover:inline-block hover:rounded-md">
          <Link to="/">Home 🏠</Link>
        </li>
        <li className="cursor-pointer hover:bg-black hover:text-green-500 hover:py-2 px-2 scroll hover:inline-block hover:rounded-md">
          Shorts 😍
        </li>
        <li className="cursor-pointer hover:bg-black hover:text-green-500 hover:py-2 px-2 scroll hover:inline-block hover:rounded-md">
          Gaming Videos 🎮
        </li>
        <li className="cursor-pointer hover:bg-black hover:text-green-500 hover:py-2 px-2 scroll hover:inline-block hover:rounded-md">
          Live 📰
        </li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li className="cursor-pointer hover:bg-black hover:text-green-500 hover:py-2 px-2 scroll hover:inline-block hover:rounded-md">
          Music 🎧
        </li>
        <li className="cursor-pointer hover:bg-black hover:text-green-500 hover:py-2 px-2 scroll hover:inline-block hover:rounded-md">
          Sports 🏏
        </li>
        <li className="cursor-pointer hover:bg-black hover:text-green-500 hover:py-2 px-2 scroll hover:inline-block hover:rounded-md">
          Gaming 🎮
        </li>
        <li className="cursor-pointer hover:bg-black hover:text-green-500 hover:py-2 px-2 scroll hover:inline-block hover:rounded-md">
          Movie 🍿
        </li>
        <li className="cursor-pointer hover:bg-black hover:text-green-500 hover:py-2 px-2 scroll hover:inline-block hover:rounded-md">
          Divine 🛕
        </li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li className="cursor-pointer hover:bg-black hover:text-green-500 hover:py-2 px-2 scroll hover:inline-block hover:rounded-md">
          Trending 😎
        </li>
        <li className="cursor-pointer hover:bg-black hover:text-green-500 hover:py-2 px-2 scroll hover:inline-block hover:rounded-md">
          Shopping 🛒
        </li>
        <li className="cursor-pointer hover:bg-black hover:text-green-500 hover:py-2 px-2 scroll hover:inline-block hover:rounded-md">
          Kids 👶🏻
        </li>
        <li className="cursor-pointer hover:bg-black hover:text-green-500 hover:py-2 px-2 scroll hover:inline-block hover:rounded-md">
          Food 🍉
        </li>
        <li className="cursor-pointer hover:bg-black hover:text-green-500 hover:py-2 px-2 scroll hover:inline-block hover:rounded-md">
          Fashion 👗
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
