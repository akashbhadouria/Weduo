import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // Early Return
  if (!isMenuOpen) return null;
  return (
    <div className="w-52 p-5 shadow-lg mt-2">
      <h1 className="font-bold">Menu</h1>
      <ul>
        <li>Home 🏠</li>
        <li>Shorts 😍</li>
        <li>Gaming Videos 🎮</li>
        <li>Live 📰</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music 🎧</li>
        <li>Sports 🏏</li>
        <li>Gaming 🎮</li>
        <li>Movie 🍿</li>
        <li>Divine 🛕</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Trending 😎</li>
        <li>Shopping 🛒</li>
        <li>Kids 👶🏻</li>
        <li>Food 🍉</li>
        <li>Fashion 👗</li>
      </ul>
    </div>
  );
};

export default Sidebar;
