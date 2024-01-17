const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

const persomalMovieDB = {
        count : numberOfFilms,
        movies : {},
        actors : {},
        geners : [],
        privat : false
};

// const a = prompt('Один из послледних просмотреных фильмов ?'),
//       b = prompt('На сколько оцените его ?'),
//       c = prompt('Один из послледних просмотреных фильмов ?'),
//       d = prompt('На сколько оцените его ?');

let a, b;

 for (let i = 0; i < 2; i++) {
        a = prompt('Один из послледних просмотреных фильмов ?');
        b = prompt('На сколько оцените его ?');
          if (a.length < 1 || a.length > 50 || a === null || b === null ) {
                i--;
                alert('ну ты угарный челик')
          } else {
                alert('заебца')
          }
        
        persomalMovieDB.movies[a] = b;
 }      


if ( persomalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов !')
} else if ( persomalMovieDB.count > 10 && persomalMovieDB.count < 30 ) {
        alert('Вы класический зритель ')   
} else if ( persomalMovieDB.count > 30 ) {
        alert('Вы киноман')   
} else {
        alert('Произошла ошибка!')
}


console.log(persomalMovieDB)