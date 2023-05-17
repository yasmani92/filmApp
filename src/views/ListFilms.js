import Film from './Film';
import PageWraper from './PageWraper';
import Pagination from './Pagination';
import {useEffect, useState} from 'react';
// import filmsJson from './films.json'

function ListFilms() {

  const [actualPage, setActualPage] = useState(1);
  const [films, setFilms] = useState([]);
  let totalOnPage = 4;

  useEffect(() => {
  	searchFilm();
  },[]);
	
  const searchFilm = async() => {
		let url ='/films.json';
		let response = await fetch(url,{
			"method": 'GET',
			"mode":'no-cors',
			"headers":{
				"Accept":'application/json',
				"Content-Type":'application/json',				
			}
		});
		let json = await response.json();
		setFilms(json);
  }
  

 const getTotalPage = ()=>{
	let TotalPagesCuantity = films.length;
	return Math.ceil(TotalPagesCuantity/totalOnPage);
 }

	let filmsByPage = films.slice(
		(actualPage - 1) * totalOnPage,
		actualPage * totalOnPage
	);

  return (    
	<PageWraper>
		{filmsByPage.map(film => {
			return <Film titulo={film.titulo}
				calificacion={film.calificacion}
				duracion={film.duracion}
				fecha={film.fecha}
				director={film.director}
				actores={film.actores}
				img={film.img}>
				<span>{film.descripcion}</span>
			</Film>
		})};
		<Pagination page={actualPage}
			totalPages={getTotalPage()}
			onChange={(page) => {
			setActualPage(page);
		}} />
	</PageWraper>
  );
}

export default ListFilms;