const Wrapper = (props) => {
	return (
		<div className="app max-w-[1000px] m-auto h-full pb-10">
			{props.children}
		</div>
	);
};

export default Wrapper;
