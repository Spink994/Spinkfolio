import React from "react";

import "./cover_page.css";

const CoverPage = () => {
  return (
    <div className="h-screen w-screen px-8 z-50 fixed top-0 left-0 bg-[#16161d]">
      <div className="h-[30vh] cover_page_content w-2 bg-rose-500 ml-auto mr-[33px]" />
      <div className="flex w-full cover_page_content flex-col items-end">
        <p className="text-white font-Montserrat font-[900] tracking-widest text-3xl">
          PORTFOLIO
        </p>
        <p className="text-white mt-4 font-semibold font-Montserrat tracking-wide">
          BAKARE AYODEJI
        </p>
        <small className="text-white font-normal font-Montserrat">
          React Developer
        </small>
      </div>
    </div>
  );
};

export default CoverPage;
