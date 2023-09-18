import { useParams } from 'react-router-dom';
import { API_KEY } from '../apiKey';
import { useEffect, useState } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const Recipe = () => {
	let params = useParams();
	const [details, setDetails] = useState({});
	const [activeTab, setActiveTab] = useState('instructions');

	const fetchDetails = async () => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${API_KEY}`
		);
		const detailData = await data.json();
		setDetails(detailData);
	};

	useEffect(() => {
		fetchDetails();
	}, [params.name]);

	return (
		<div className="detail__wrapper px-7 flex flex-col gap-4 sm:px-16 lg:flex-row lg:gap-6 md:mt-10">
			<div className="lg:flex-1">
				<h2 className="font-bold text-xl mb-2">{details.title}</h2>
				<img src={details.image} alt={details.title} className="rounded-md" />
			</div>
			<div className="info lg:flex-1">
				<div className="detail__buttons flex gap-4">
					<button
						className={activeTab === 'instructions' ? 'active' : ''}
						onClick={() => setActiveTab('instructions')}
					>
						Instructions
					</button>
					<button
						className={activeTab === 'ingredients' ? 'active' : ''}
						onClick={() => setActiveTab('ingredients')}
					>
						Ingredients
					</button>
				</div>
				{activeTab === 'instructions' && (
					<div className="mt-5">
						<p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
						<p
							dangerouslySetInnerHTML={{ __html: details.instructions }}
							className="mt-3"
						></p>
					</div>
				)}

				{activeTab === 'ingredients' && (
					<ol className="mt-5">
						{details.extendedIngredients.map((ingredient) => (
							<div className="">
								{/* <BsCheckCircleFill className="font-bold text-lg" /> */}
								<li key={ingredient.id}>{ingredient.original}</li>
							</div>
						))}
					</ol>
				)}
			</div>
		</div>
	);
};

export default Recipe;
