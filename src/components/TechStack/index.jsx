import React from 'react';
import ContentBox from '../ContentBox';
import MaxWidth from '../MaxWidth';

import { RiHtml5Line, RiReactjsFill, RiReactjsLine } from 'react-icons/ri';
import { BsGithub } from 'react-icons/bs';
import { SiJira, SiPostman, SiRedux, SiTailwindcss } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { BiLogoTypescript } from 'react-icons/bi';
import Title from '../Title';

const contents = [
	{
		logo: <RiReactjsFill />,
		title: 'React',
		text: 'A framework used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript. In React, you develop your applications by creating reusable components that you can think of as independent Lego blocks.',
	},
	{
		logo: <SiTailwindcss />,
		title: 'Tailwind CSS',
		text: 'Tailwind CSS is a utility-first CSS framework packed with classes like flex , pt-4 , text-center and rotate-90 that can be composed to build any design, directly in your markup. It’s easy to customize, adapts to any design, and the build size is tiny.',
	},
	{
		logo: <IoLogoJavascript />,
		title: 'JavaScript',
		text: "Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers. JavaScript is so popular that it's the most used programming language in the world, used as a client-side programming language by 97.0% of all websites.",
	},
	{
		logo: <BiLogoTypescript />,
		title: 'Typescript',
		text: "TypeScript is an open-source programming language developed by Microsoft. It is a superset of JavaScript, which means that any JavaScript code is also valid TypeScript code.",
	},
	{
		logo: <RiHtml5Line />,
		title: 'HTML',
		text: 'HTML is the standard markup language for creating Web pages.',
	},
	{
		logo: <BsGithub />,
		title: 'Git Hub',
		text: 'GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere. This tutorial teaches you GitHub essentials like repositories, branches, commits, and pull requests.',
	},
	{
		logo: <SiPostman />,
		title: 'Postman',
		text: 'Postman is an application used for API testing. It is an HTTP client that tests HTTP requests, utilizing a graphical user interface, through which we obtain different types of responses that need to be subsequently validated.',
	},
	{
		logo: <SiJira />,
		title: 'Jira',
		text: 'Jira helps teams plan, assign, track, report, and manage work and brings teams together for everything from agile software development and customer support to start-ups and enterprises. Software teams build better with Jira Software, the #1 tool for agile teams.',
	},
	{
		logo: <SiRedux />,
		title: 'Redux and Redux Toolkit',
		text: 'Redux is used to maintain and update data across your applications for multiple components to share, all while remaining independent of the components.',
	},
	{
		logo: <RiReactjsLine />,
		title: 'Tanstack Query',
		text: 'React Query (now rebranded to TanStack Query) is a React library used to make fetching and manipulating server-side data easier. Using React Query, you can implement, along with data fetching, caching, and synchronization of your data with the server.',
	},
];

const TechStack = () => {
	return (
		<div
			id="tech_stack"
			className="w-full text-slate-300 justify-center flex"
		>
			<MaxWidth>
				<div className="flex flex-col w-full gap-6">
					<Title>Tools I Use</Title>
					<div className="flex flex-wrap gap-12 justify-between">
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

export default TechStack;
