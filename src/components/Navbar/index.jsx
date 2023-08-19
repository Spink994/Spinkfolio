import React from 'react';
import { CgMenuMotion, CgMenuRight } from 'react-icons/cg';
import { HashLink } from 'react-router-hash-link';
import SpinkOne from '../../assets/images/spink_three.png';
import NAVCONTENT from './navData';
import navFunction from './navFunction';

const Navbar = () => {
	const { navHandler, isHidden } = navFunction();

	return (
		<nav className="w-full bg-[#16161d] min-h-[80px] z-50">
			<div className="fixed w-full px-8 max-w-[1440px] h-full max-h-[80px] lg:border-b-[0.5px] lg:border-slate-600 flex justify-between items-center left-[50%] bg-[#16161d] -translate-x-[50%]">
				<HashLink
					smooth
					to="#intro"
					className="z-20 "
				>
					<div className="flex items-center gap-2">
						<div className="h-8 w-8 overflow-hidden border border-slate-300 flex items-center p-[1px] justify-center rounded-full">
							<img
								src={SpinkOne}
								className="object-cover border-2 border-slate-300 w-full h-full rounded-full"
								alt="profile-picture"
							/>
						</div>
						<p className="text-slate-300 font-Montserrat font-semibold text-sm hover:text-rose-500">
							Spink
						</p>
					</div>
				</HashLink>
				<div
					className={`lg:flex-row lg:relative lg:gap-8 lg:h-max lg:pt-0 lg:w-max text-slate-300 flex flex-col gap-12 absolute w-full top-0 px-8 pt-[120px] bg-[#16161d] ${
						isHidden ? 'lg:-translate-x-[0vw] -translate-x-[100vw]' : 'transition-all'
					} left-0 h-screen font-Montserrat z-10 text-sm font-semibold`}
				>
					{NAVCONTENT.map((item) => {
						return (
							<HashLink
								onClick={navHandler}
								className="hover:text-rose-500"
								key={item.path}
								smooth
								to={item.path}
							>
								{item.label}
							</HashLink>
						);
					})}
				</div>
				<button
					onClick={navHandler}
					className="text-slate-300 lg:hidden text-2xl z-20"
				>
					{isHidden ? <CgMenuRight /> : <CgMenuMotion />}
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
