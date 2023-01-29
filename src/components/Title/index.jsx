import React from "react";

const Title = ({ children, extendedStyles }) => {
  return (
    <h1
      className={`font-bold sm:text-4xl uppercase text-3xl font-Montserrat mb-4 ${extendedStyles}`}
    >
      {children}
    </h1>
  );
};

export default Title;
