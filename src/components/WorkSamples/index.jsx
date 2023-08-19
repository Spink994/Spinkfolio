import React from 'react';
import WorkCard from './WorkCard';
import MaxWidth from '../MaxWidth';
import Title from '../Title';

import Ecommerce from '../../assets/images/ecommerce.png';
import Lifestyle from '../../assets/images/lifestyle.webp';
import Savetobuy from '../../assets/images/savetobuy.webp';
import Blog from '../../assets/images/blog.png';
import SourceMyGadgets from '../../assets/images/source_my_gadgets.png';
import PiHealth from '../../assets/images/pi_health.webp';
import MedCity from '../../assets/images/medcity.png';

const contents = [
	{
		image: Ecommerce,
		title: 'Ecommerce',
		gitLink: 'https://github.com/slowpacerapper/Spink',
		liveLink: 'https://spink-ecommerce.netlify.app/',
		text: 'A mini ecommerce web application. Frontend only.',
	},
	{
		image: Lifestyle,
		title: 'Lifestyle',
		liveLink: 'https://spink-learn.netlify.app/',
		text: 'All your Favorite Brands in One Place. Achieve your dream lifestyle without debt',
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
					<div className="flex flex-wrap gap-12 justify-between">
						{contents.map((item) => {
							return (
								<WorkCard
									key={item.title}
									image={item.image}
									gitLink={item.gitLink}
									liveLink={item.liveLink}
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

export default WorkSamples;
