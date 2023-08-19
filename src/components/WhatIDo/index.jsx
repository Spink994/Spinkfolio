import React from 'react';
import MaxWidth from '../MaxWidth';
import ContentBox from '../ContentBox';

import { CgWebsite } from 'react-icons/cg';
import { FcOrgUnit } from 'react-icons/fc';
import { SiPostman, SiSpeedtest } from 'react-icons/si';
import { GiHypodermicTest } from 'react-icons/gi';
import { MdManageAccounts } from 'react-icons/md';
import Title from '../Title';

const contents = [
	{
		logo: <CgWebsite />,
		title: 'Websites',
		text: 'I develop websites that provide visual contents that can be consumed by users',
	},
	{
		logo: <CgWebsite />,
		title: 'Web Applications',
		text: 'I develop web applications that provides not only visual content, but also provides interactivity back and forth between users and the application',
	},
	{
		logo: <GiHypodermicTest />,
		title: 'Stress Testing',
		text: 'After an application has been developed, i try to break the application by interacting with it in unusual ways. This is to check for vulnerabilities and fix vulnerabilities if any is found',
	},
	{
		logo: <SiSpeedtest />,
		title: 'Live Testing',
		text: 'After an application has been developed, i test it to see if all the features implemented work exactly as intended and fix bugs if any is found.',
	},
	{
		logo: <FcOrgUnit />,
		title: 'Unit Testing',
		text: 'I run tests on react components, making sure it passes the required criteria.',
	},
	{
		logo: <SiPostman />,
		title: 'API Testing',
		text: 'I run tests on endpoints using postman, making sure the response structures and error messages match the required criteria.',
	},
	{
		logo: <MdManageAccounts />,
		title: 'Team management',
		text: 'I manage and oversee the activities of other developers in my team, making sure they get the help they need to accomplish their tasks and making sure they deliver on time.',
	},
];

const WhatIDo = () => {
	return (
		<div
			id="what_i_do"
			className="w-full flex text-slate-300 justify-center"
		>
			<MaxWidth>
				<div className="flex flex-col w-full gap-6">
					<Title>What I Do</Title>
					<div className="grid [@media(min-width:350px)]:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-8 [@media(min-width:768px)]:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))]">
						{contents.map((item) => {
							return (
								<ContentBox
									key={item.title}
									logo={item.logo}
									text={item.text}
									title={item.title}
								/>
							);
						})}
					</div>
				</div>
			</MaxWidth>
		</div>
	);
};

export default WhatIDo;
