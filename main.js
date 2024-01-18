let numberOfFilms 

function start() {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
                numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');
        }
}

//start();

const persomalMovieDB = {
        count : numberOfFilms,
        movies : {},
        actors : {},
        geners : [],
        privat : false
};



 function rememberMyFilms () {
        for (let i = 0; i < 2; i++) {
            const   a = prompt('Один из послледних просмотреных фильмов ?'),
                    b = prompt('На сколько оцените его ?');

                 if (a.length < 1 || a.length > 50 || a === null || b === null ) {
                       i--;
                       alert('ну ты угарный челик')
                 } else {
                       alert('заебца')
                 }
               persomalMovieDB.movies[a] = b;
        }      
 }

 //rememberMyFilms();

function detectPersonalLevel () {
        if ( persomalMovieDB.count < 10) {
                alert('Просмотрено довольно мало фильмов !')
        } else if ( persomalMovieDB.count > 10 && persomalMovieDB.count < 30 ) {
                alert('Вы класический зритель ')   
        } else if ( persomalMovieDB.count > 30 ) {
                alert('Вы киноман')   
        } else {
                alert('Произошла ошибка!')
        };
};

//detectPersonalLevel();

function showMyDB () {
        if (persomalMovieDB.privat === false) {
                console.log(persomalMovieDB)
        };
};

//showMyDB();

function writeYourGeneres () {
        for (let i = 1; i <= 3; i++) {
          persomalMovieDB.geners[i - 1] = prompt(`Ваш любимый жанр под номером ${i} `);
        } 
}
writeYourGeneres();

console.log(persomalMovieDB)
console.log(persomalMovieDB.geners)