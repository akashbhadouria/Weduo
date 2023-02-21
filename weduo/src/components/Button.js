import React from "react";

const Button = ({ name }) => {
  return (
    <div className="px-3 py-2 rounded-lg m-2 bg-slate-200 text-center cursor-pointer hover:bg-black hover:text-green-500">
      {name}
    </div>
  );
};

export default Button;
