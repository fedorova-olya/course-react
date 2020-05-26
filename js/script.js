'use strict';

const personaMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personaMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '');

        while (personaMovieDB.count == '' || personaMovieDB.count == null || isNaN(personaMovieDB.count)) {
            personaMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personaMovieDB.movies[a] = b;
                console.log('done');

            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        switch (true) {
            case personaMovieDB.count < 10:
                console.log('мало');
                break;
            case personaMovieDB.count >= 10 && personaMovieDB.count < 30:
                console.log('норм');
                break;
            case personaMovieDB.count >= 30:
                console.log('ого!');
                break;
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personaMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {

            let genres = prompt(`жанры через ","`).toLocaleLowerCase;
            if (genres == '' || genres == null) {
                console.log('Неверно');
                i--;
            } else {
                personaMovieDB.genres = genres.split(', ');
                personaMovieDB.genres.sort();
            }
        }
        personaMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyBD: function () {
        if (personaMovieDB.privat) {
            personaMovieDB.privat = false;
        } else {
            personaMovieDB.privat = true;

        }
    }
};

console.log(personaMovieDB);
