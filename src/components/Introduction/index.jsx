import React from 'react';

import { GrFacebookOption, GrLinkedinOption, GrTwitter } from 'react-icons/gr';
import { MdFileDownload } from 'react-icons/md';

import MaxWidth from '../MaxWidth';

import './introduction.css';

import SpinkOne from '../../assets/images/spink_four.png';
import Resume from '../../assets/file/Bakare_Ayodeji_Resume.pdf';

const Introduction = () => {
	return (
		<div
			id="intro"
			className="text-slate-300 w-full flex justify-center"
		>
			<MaxWidth extendedStyles="overflow-x-hidden">
				<div className="w-full py-8 flex lg:flex-row flex-col gap-12">
					<div className="lg:w-[70%] w-full">
						<h1 className="font-Montserrat font-[800] text-rose-500 sm:text-5xl text-3xl">
							<span className="text-slate-300">Hi, I'm</span> Bakare Ayodeji
						</h1>
						<p className="font-Montserrat reveal transition-all sm:whitespace-nowrap font-semibold text-xl mt-6">
							A Professional <span className="text-rose-500"> React Developer.</span>
						</p>
						<p className="mt-6 max-w-[600px] text-sm sm:text-[16px] leading-6 font-Montserrat">
							I love creating amazing, high quality, websites and web applications using the most
							optimized web development tools in order to provide optimized solutions to client
							requirements.
						</p>
						<div className="flex flex-wrap [@media_(min-width:464px)]:gap-20 gap-4">
							<div>
								<p className="text-xs text-slate-300 font-Montserrat font-semibold mt-8 mb-2">
									CONNECT WITH ME ON:
								</p>
								<div className="flex gap-6">
									<a
										href="https://web.facebook.com/Marthrixe92"
										target="_blank"
										className="flex items-center cursor-pointer hover:border-b-2 hover:border-rose-500 justify-center h-12 w-12 custom_shadow text-rose-500"
									>
										<GrFacebookOption />
									</a>
									<a
										href="https://www.linkedin.com/in/ayodeji-bakare-08a3851b7/"
										target="_blank"
										className="flex items-center cursor-pointer hover:border-b-2 hover:border-rose-500 justify-center h-12 w-12 custom_shadow text-rose-500"
									>
										<GrLinkedinOption />
									</a>
									<a
										href="https://twitter.com/BakareAyodeji14"
										target="_blank"
										className="flex items-center cursor-pointer hover:border-b-2 hover:border-rose-500 justify-center h-12 w-12 custom_shadow text-rose-500"
									>
										<GrTwitter />
									</a>
								</div>
							</div>
							<div>
								<p className="text-xs text-slate-300 font-Montserrat font-semibold mt-8 mb-2">
									RESUME:
								</p>
								<a
									download={false}
									target="_blank"
									href={Resume}
									className="flex font-Montserrat gap-2 text-sm font-semibold items-center cursor-pointer hover:border-b-2 hover:border-rose-500 justify-center h-12 w-max px-4 custom_shadow text-rose-500"
								>
									Download <MdFileDownload />
								</a>
							</div>
						</div>
					</div>
					<div className="lg:w-[30%] flex h-[300px] overflow-hidden items-start">
						<div className=" [@media(min-width:480px)]:w-[300px] border-r-4 border-t-4 hover:border-none transition-all duration-500 px-4 border-rose-500 h-full rounded-[10%] shadow-2xl  overflow-hidden">
							<img
								src={SpinkOne}
								className="-translate-y-[45px] -translate-x-[370px] object-cover min-w-[1000px]"
								alt="profile-picture"
							/>
						</div>
					</div>
				</div>
			</MaxWidth>
		</div>
	);
};

export default Introduction;
