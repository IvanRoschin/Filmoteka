import { debounce } from 'debounce';
import { refs } from './../refs';
// import fetchFilms from './fetch_search_films';
import MoviesApiService from '../api/moviesApiServiceClass';
import renderMarkupSearchFilms from './render_search_films';

const moviesApiService = new MoviesApiService();

// refs.formSearch.addEventListener(
//   'input',
//   debounce(onSearchByKeyword, refs.DEBOUNCE_DELAY)
// );

// * функція обробляє результат fetch та викликає на його основі рендеринг випадаючого меню
// function onSearchByKeyword(e) {
//   const filmName = e.target.value.trim();

//   if (!filmName) {
//     refs.filmsSearchList.innerHTML = '';
//     refs.filmsSearchList.classList.remove('search-form__list--bgc');
//     return;
//   }

//   try {
//     moviesApiService.fetchSearchingMovies().then(films => {
//       renderMarkupSearchFilms(films);
//     });
//   } catch (err) {
//     err => console.log(err);
//   }
// }