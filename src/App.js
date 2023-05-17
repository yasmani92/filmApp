// import { BrowserRouter, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ListFilms from './views/ListFilms';
import Blog from './views/Blog';


function App() {

  
  return (
  	<Router>
		<Routes>
			<Route path="/" element={<ListFilms />} />
			<Route path="/blog" element={<Blog />} />
		</Routes>
	</Router>
  );
}

export default App;