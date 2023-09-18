import Category from './components/Category';
import Search from './components/Search';
import Wrapper from './components/UI/Wrapper';
import Pages from './pages/Pages';
import Logo from './components/Logo';

import { BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<Wrapper>
			<BrowserRouter>
				<Logo />
				<Search />
				<Category />
				<Pages />
			</BrowserRouter>
		</Wrapper>
	);
};

export default App;
