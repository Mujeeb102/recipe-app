import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_KEY } from '../apiKey';

const Searched = () => {
	const [searchedRecipes, setSearchedRecipes] = useState([]);
	let params = useParams();

	const getSearched = async (name) => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}`
		);
		const recipes = await data.json();
		setSearchedRecipes(recipes.results);
	};

	useEffect(() => {
		getSearched(params.search);
	}, [params.search]);

	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 px-7">
			{searchedRecipes.map((item) => {
				return (
					<Link to={`/recipe/${item.id}`}>
						<div key={item.id}>
							<img src={item.image} alt="" className="w-full rounded-md" />
							<h4 className="text-center pb-5">{item.title}</h4>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Searched;
