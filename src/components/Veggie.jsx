import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import '@splidejs/splide/dist/css/splide.min.css';

import { API_KEY } from '../apiKey';

const Veggie = () => {
	const [veggie, setVeggie] = useState([]);
	const [perPage, setPerPage] = useState(1);

	useEffect(() => {
		getVeggie();
	}, []);

	const getVeggie = async () => {
		const check = localStorage.getItem('veggie');

		if (check) {
			setVeggie(JSON.parse(check));
		} else {
			const api = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9&tags=vegetarian`
			);
			const data = await api.json();

			localStorage.setItem('veggie', JSON.stringify(data.recipes));
			setVeggie(data.recipes);
			console.log(data);
		}
	};

	useEffect(() => {
		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleResize = () => {
		if (window.innerWidth >= 1024) {
			setPerPage(3);
		} else if (window.innerWidth >= 570) {
			setPerPage(3);
		} else {
			setPerPage(1);
		}
	};

	return (
		<div className="veggie px-7 mt-10">
			<h1 className="font-bold text-xl mb-2">Our Vegetarian Picks</h1>
			<div className="card__container">
				<Splide
					options={{
						perPage: perPage,
						arrows: true,
						pagination: false,
						drag: 'free',
						gap: '1rem',
					}}
				>
					{veggie.map((recipe) => {
						return (
							<SplideSlide key={recipe.id}>
								<Link to={`/recipe/${recipe.id}`}>
									<div
										key={recipe.id}
										className="card min-h-[200px] w-full relative rounded-lg overflow-hidden"
									>
										<p className="absolute z-20 left-[50%] bottom-0 -translate-x-[50%] translate-y-0 text-white w-full font-semibold flex justify-center items-center h-[40%] text-center">
											{recipe.title}
										</p>
										<img
											src={recipe.image}
											alt={recipe.title}
											className="h-full w-full absolute left-0 object-cover"
										/>
										<div className="z-10 absolute w-full h-full bg-gradient-to-t from-[#00000090] to-[#00000080]"></div>
									</div>
								</Link>
							</SplideSlide>
						);
					})}
				</Splide>
			</div>
		</div>
	);
};

export default Veggie;
