const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

const persomalMovieDB = {
        count : numberOfFilms,
        movies : {},
        actors : {},
        geners : [],
        privat : false
};

const a = prompt('Один из послледних просмотреных фильмов ?'),
      b = prompt('На сколько оцените его ?'),
      c = prompt('Один из послледних просмотреных фильмов ?'),
      d = prompt('На сколько оцените его ?');

persomalMovieDB.movies[a] = b;
persomalMovieDB.movies[c] = d;

console.log(persomalMovieDB)