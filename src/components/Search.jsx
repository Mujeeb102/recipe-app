import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Search = () => {
	const [input, setInput] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/searched/${input}`);
	};

	return (
		<div className="search__component pt-10 px-7 max-w-[700px] m-auto ">
			<form onSubmit={handleSubmit} action="" className="relative">
				<FaSearch className="absolute top-[50%] left-0 translate-x-[50%] -translate-y-[50%] text-white" />
				<input
					onChange={(e) => setInput(e.target.value)}
					type="text"
					value={input}
					className="bg-gradient-to-br from-[#494949] to-[#313131] outline-none w-full h-[40px] rounded-md px-8 text-white"
				/>
			</form>
		</div>
	);
};

export default Search;
