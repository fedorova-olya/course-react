'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');


const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');


    // if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    //     personaMovieDB.movies[a] = b;
    //     console.log('done');

    // } else {
    //     console.log('error');
    //     i--;
    // }

    a != null && b != null && a != '' && b != '' && a.length < 50 ? console.log('done') : i--;

}



switch (true) {
    case personaMovieDB.count < 10:
        console.log('мало');
        break;
    case personaMovieDB.count >= 10 &&  personaMovieDB.count < 30:
        console.log('норм');
        break;
    case personaMovieDB.count >= 30:
        console.log('ого!');
        break;
}

// if(personaMovieDB.count < 10) {
//     console.log('мало');
// }  else if(personaMovieDB.count >= 10 &&  personaMovieDB.count < 30) {
//     console.log('норм');
// } else if (personaMovieDB.count >= 30) {
//     console.log('ого!');
// } else {
//     console.log('упс(')
// }

//personaMovieDB.count < 10 ? console.log('мало') : null;






console.log(personaMovieDB);
