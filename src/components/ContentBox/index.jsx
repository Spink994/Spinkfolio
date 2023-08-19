import React from "react";

const ContentBox = ({ logo, title, text }) => {
  return (
    <div className="flex flex-col border-b-2 border-rose-500 hover:border-2 transition-all duration-200 rounded-lg w-full p-4 justify-start shadow-2xl min-h-[250px] gap-4">
      <span className="text-xl text-rose-500">{logo}</span>
      <h3 className="font-Montserrat font-semibold">{title}</h3>
      <p className="font-Montserrat text-sm leading-6">{text}</p>
    </div>
  );
};

export default ContentBox;
