import React from "react";
import { GrFacebookOption, GrLinkedinOption, GrTwitter } from "react-icons/gr";

import MaxWidth from "../MaxWidth";

const Contact = () => {
  return (
    <div id="contact" className="text-slate-300 w-full flex justify-center">
      <MaxWidth>
        <div className="border-t-[0.5px] flex items-center flex-wrap py-4 gap-4 justify-between border-slate-600 min-h-[70px] ">
          <p className="font-Montserrat text-sm">&copy; Copyright 2023</p>
          <p className="font-Montserrat font-semibold text-sm">
            <span className="font-normal">Made By</span> Spink
          </p>
          <div className="flex [@media_(max-width:492px)]:mx-auto gap-6">
            <a
              target="_blank"
              href="https://web.facebook.com/Marthrixe92"
              className="flex items-center cursor-pointer hover:border-b-2 hover:border-rose-500 justify-center h-10 w-10 custom_shadow text-rose-500"
            >
              <GrFacebookOption />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ayodeji-bakare-08a3851b7/"
              className="flex items-center cursor-pointer hover:border-b-2 hover:border-rose-500 justify-center h-10 w-10 custom_shadow text-rose-500"
            >
              <GrLinkedinOption />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/BakareAyodeji14"
              className="flex items-center cursor-pointer hover:border-b-2 hover:border-rose-500 justify-center h-10 w-10 custom_shadow text-rose-500"
            >
              <GrTwitter />
            </a>
          </div>
        </div>
      </MaxWidth>
    </div>
  );
};

export default Contact;
