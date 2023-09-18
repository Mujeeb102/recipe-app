import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { styles } from '../style';

const Category = () => {
	return (
		<div className="flex justify-center my-6 gap-4">
			<NavLink to={'/cuisine/Italian'} className={styles.catLinks}>
				<FaPizzaSlice />
				<h4 className="text-[10px]">Italian</h4>
			</NavLink>
			<NavLink to={'/cuisine/American'} className={styles.catLinks}>
				<FaHamburger />
				<h4 className="text-[10px]">American</h4>
			</NavLink>
			<NavLink to={'/cuisine/Thai'} className={styles.catLinks}>
				<GiNoodles />
				<h4 className="text-[10px]">Thai</h4>
			</NavLink>
			<NavLink to={'/cuisine/Japanese'} className={styles.catLinks}>
				<GiChopsticks />
				<h4 className="text-[10px]">Japanese</h4>
			</NavLink>
		</div>
	);
};

export default Category;
