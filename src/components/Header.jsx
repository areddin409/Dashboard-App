import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Header = ({ category, title }) => {
  const { currentMode } = useStateContext();
  return (
    <div className='mb-10'>
      <p className='text-gray-400'>{category}</p>
      <p
        className='text-3xl font-extrabold tracking-tight text-slate-900'
        style={{ color: currentMode === "Dark" ? "#e2e2e2" : "#33373e" }}
      >
        {title}
      </p>
    </div>
  );
};

export default Header;
