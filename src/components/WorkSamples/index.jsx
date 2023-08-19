import React from 'react';
import WorkCard from './WorkCard';
import MaxWidth from '../MaxWidth';
import Title from '../Title';

import Ecommerce from '../../assets/images/ecommerce.png';
import Lifestyle from '../../assets/images/lifestyle.webp';
import Go4Mi from '../../assets/images/go4mi.webp';
import WaitingList from '../../assets/images/waiting-list.webp';
import Savetobuy from '../../assets/images/savetobuy.webp';
import Blog from '../../assets/images/blog.png';
import SourceMyGadgets from '../../assets/images/source_my_gadgets.png';
import PiHealth from '../../assets/images/pi_health.webp';
import MedCity from '../../assets/images/medcity.png';

const contents = [
	{
		image: Lifestyle,
		title: 'Lifestyle',
		liveLink: 'https://lifestyle.savetobuy.io/',
		text: 'All your Favorite Brands in One Place. Achieve your dream lifestyle without debt',
	},
	{
		image: WaitingList,
		title: 'Pi-Pets Waiting List',
		liveLink: 'https://pi-pets-waiting-list.vercel.app/',
		text: 'Pi-Pets Waiting List. AI-powered remote monitoring platform for Pets and Racehorses',
	},
	{
		image: Go4Mi,
		title: 'Go4Mi',
		readyState: false,
		text: 'Shop Groceries Online From Stores Near You. Find stores close to your current location, place your order and get it delivered to you same day.',
	},
	{
		image: Ecommerce,
		title: 'Ecommerce',
		gitLink: 'https://github.com/slowpacerapper/Spink',
		liveLink: 'https://spink-ecommerce.netlify.app/',
		text: 'A mini ecommerce web application. Frontend only.',
	},
	{
		image: Blog,
		title: 'Spink Blog',
		gitLink: 'https://github.com/slowpacerapper/Spink-blog-app',
		liveLink: 'https://spink-blog.netlify.app/',
		text: 'A frontend template for blogs.',
	},
	{
		image: MedCity,
		title: 'Medcity',
		gitLink: 'https://github.com/slowpacerapper/Medcity',
		liveLink: 'https://medcity-spink.netlify.app',
		text: 'Getting access to medical care has just been made easier. At MED, we provide easy access to our best doctors in the profession, and also make sure that you get the best medical care without stress. Landing page - (Frontend Template)',
	},
	{
		image: PiHealth,
		title: 'Pi-Health',
		liveLink: 'https://pi-health-two.vercel.app/',
		text: "PI-Health is a remote monitoring tool that provides risk stratified information and decision intelligence backed by AI that allows Clinicians, Carers, Vets and Pet-Parent's make faster and better decisions concerning their wards.",
	},
	{
		image: SourceMyGadgets,
		title: 'SourceMyGadgets',
		liveLink: 'https://sourcemygadgets.com',
		text: 'Buy your top quality gadget and get recommendations, purchase and support for individuals and businesses.',
	},
	{
		image: Savetobuy,
		title: 'SavetoBuy',
		liveLink: 'https://app.savetobuy.io/',
		text: 'The easiest way to save for your financial goal.',
	},
];

const WorkSamples = () => {
	return (
		<div
			id="work_samples"
			className="flex w-full justify-center text-slate-300"
		>
			<MaxWidth>
				<div className="flex flex-col w-full gap-6">
					<Title>Work Samples</Title>
					<div className="grid [@media(min-width:350px)]:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-8 [@media(min-width:768px)]:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))]">
						{contents.map((item) => {
							return (
								<WorkCard
									key={item.title}
									image={item.image}
									gitLink={item.gitLink}
									liveLink={item.liveLink}
									text={item.text}
									readyState={item.readyState}
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

export default WorkSamples;
