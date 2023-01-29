import React from "react";

const MaxWidth = ({ children, extendedStyles }) => {
  return (
    <div className={`max-w-[1440px] ${extendedStyles} w-full px-8`}>
      {children}
    </div>
  );
};

export default MaxWidth;
