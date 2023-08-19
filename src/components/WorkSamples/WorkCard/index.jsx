import React from 'react';

import { FaGitAlt } from 'react-icons/fa';
import { TiLink } from 'react-icons/ti';

const WorkCard = ({ image, title, text, gitLink, liveLink, readyState }) => {
	return (
		<div className="min-h-[400px] [@media_(max-width:_910px)]:min-w-full  shadow-2xl hover:border-2 hover:border-rose-600 transition-all duration-200 rounded-lg flex-col gap-4 flex p-4">
			<div className="w-full [@media_(max-width:_910px)]:min-h-max h-[250px] overflow-hidden">
				<img
					src={image}
					alt={title}
					className="w-full min-h-full object-contain"
				/>
			</div>
			<h2 className="font-Montserrat text-red-500 font-semibold text-sm shadow-2xl">{title}</h2>
			<p className="font-Montserrat text-sm leading-6 shadow-2xl">{text}</p>
			<div className="w-full flex gap-6 items-center">
				{gitLink && (
					<a
						className="font-semibold custom_shadow p-2 hover:text-rose-500 font-Montserrat flex items-center gap-2"
						href={gitLink}
						target="_blank"
					>
						<FaGitAlt /> Git
					</a>
				)}
				{liveLink && (
					<a
						className="font-semibold custom_shadow p-2 hover:text-rose-500 font-Montserrat flex items-center gap-2"
						href={liveLink}
						target="_blank"
					>
						<TiLink /> Live
					</a>
				)}

				{readyState === false && (
					<p className="font-semibold custom_shadow p-2 hover:text-rose-500 font-Montserrat flex items-center gap-2">
						This site is currently under development.
					</p>
				)}
			</div>
		</div>
	);
};

export default WorkCard;
