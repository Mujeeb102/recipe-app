import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_KEY } from '../apiKey';

const Cuisine = () => {
	let params = useParams();

	const [cuisine, setCuisine] = useState([]);

	const getCuisine = async (name) => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${name}`
		);
		const recipes = await data.json();
		setCuisine(recipes.results);
	};

	useEffect(() => {
		getCuisine(params.type);
		console.log(params.type);
	}, [params.type]);

	return (
		<div className="px-7 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
			{cuisine.map((item) => {
				return (
					<Link to={`/recipe/${item.id}`}>
						<div key={item.id}>
							<img src={item.image} alt="" className="w-full rounded-md" />
							<h4 className="text-center py-2">{item.title}</h4>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Cuisine;
