import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<div className="logo px-7 pt-10 ">
			<Link to="/">
				<span className="font-bold text-3xl text-[#313131]">Tasty</span>
				<span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#f27121] to-[#e94057]">
					tales.
				</span>
			</Link>
		</div>
	);
};

export default Logo;
