// const result = confirm("Do you sleap all night?")
// console.log('====================================');
// console.log(result);
// console.log('====================================');
// const result = +prompt("Do you sleap 7 hour?"); // приходит всегда строка, + переобразует в число
// console.log("====================================");
// console.log(typeof result);
// console.log("====================================");

// 1)
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

let filmName = prompt("Один с последних просмотреных фильмов?");
let filmName2 = prompt("Один с последних просмотреных фильмов?");

let raitingFilm = +prompt("На сколько оценете эго?");
let raitingFilm2 = +prompt("На сколько оценете эго?");

// 2)
const personalMovieDB = {
  count: 2,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
personalMovieDB.count = numberOfFilms;
personalMovieDB.movies.logan = raitingFilm;
personalMovieDB.movies[filmName] = raitingFilm;
personalMovieDB.movies[filmName2] = raitingFilm2;

console.log("====================================");
console.log(personalMovieDB);
console.log("====================================");
