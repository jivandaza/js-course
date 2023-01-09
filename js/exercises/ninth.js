/*
 *    24) Movie class exercise
*/

class Movie {
    constructor({id, title, director, year, countries, genres, score}) {
        //Determine a default value in case the provided data doesn't pass validations
        this.id = "No valid information provided.";
        this.title = "No valid information provided.";
        this.director = "No valid information provided.";
        this.year = "No valid information provided.";
        this.score = "No valid information provided.";
        this.countries = []; 
        this.genres = [];
        this.validateId(id);
        this.validateTitle(title);
        this.validateDirector(director);
        this.validateYear(year);
        this.validateCountries(countries);
        this.validateGenres(genres);
        this.validateScore(score);
    }

    static get acceptedGenres() {
        return [
            "Action",
            "Adult",
            "Adventure",
            "Animation",
            "Biography",
            "Comedy",
            "Crime",
            "Documentary",
            "Drama",
            "Family",
            "Fantasy",
            "Film Noir",
            "Game-Show",
            "History",
            "Horror",
            "Musical",
            "Music",
            "Mystery",
            "News",
            "Reality-TV",
            "Romance",
            "Sci-Fi",
            "Short",
            "Sport",
            "Talk-Show",
            "Thriller",
            "War",
            "Western"
        ];
    }
  
    validateString(str, fieldName) {
        if (!str) 
            return console.warn(`You must provide a valid ${fieldName}.`);
        if (typeof str !== "string")
            return console.warn(`The ${fieldName} "${str}" provided is not valid.`);
        return true;
    }

    validateId(id = undefined) {
        !this.validateString(id, "IMDB id")
            ? console.warn("ID validation unsuccessful.")
            //: id.length !== 9
            //? console.warn("The ID must be 9 characters long.")
            : /^[a-z]{2}\d{7}$/gi.test(id)
                ? (this.id = id)
                : console.warn(`The IMDB id "${id}" doesn't have the correct format.`)
      
    }

    validateTitle(title = undefined) {
        !this.validateString(title, "title")
            ? console.warn("Title validation unsuccessful.")
            : title.length > 100
                ? console.warn("The title must be less than 100 characters long.")
                : this.title = title
    }

    validateDirector(director = undefined) {
        this.validateString(director, "director")
            ? director.length > 50
                ? console.warn("The director must be less than 50 characters long.")
                : this.director = director
            : console.warn("Director validation unsuccessful");
    }

    validateYear(year = undefined) { 
        year === undefined
            ? console.warn("You must provide a valid release year.")
            : typeof year !== "number"
                ? console.warn("The year must be a number.")
                : !/^18|19|20[0-9]{2}/g.test(year)
                    ? console.warn(`The year must be a 4 digit number, ${year} isn't valid.`)
                    : this.year = year;
    }

    validateCountries(countries = undefined) {
        if (countries === undefined)
            return console.warn("You must provide a list of countries.");
        if (!(countries instanceof Array)) 
            return console.warn(`The countries you provided (${countries}) do not seem to be an Array.`);
        if (countries.length < 1) 
            return console.warn("The countries list can't be empty."); 
        if (!countries.every(country => typeof country === "string"))
            return console.warn("All the elements in the countries list must be strings.");
        this.countries = [...countries];
    }

    validateGenres(genres = undefined) {
        if (genres === undefined)
            return console.warn("You must provide a list of genres.");
        if (!(genres instanceof Array)) 
            return console.warn(`The genres you provided (${genres}) do not seem to be an Array.`);
        if (genres.length < 1) 
            return console.warn("The genres list can't be empty."); 
        if (!genres.every(genre => typeof genre === "string"))
            return console.warn("All the elements in the list must be strings.");
        for (let genre of genres){
            if (Movie.acceptedGenres.includes(genre)){
                this.genres.push(genre);
            } else {
                console.warn(
                    `${genre} is not an accepted genre, here's the list: ${Movie.acceptedGenres}`
                );
            } 
        }
    }

    validateScore(score = undefined) {
        if(score === undefined) 
            return console.warn("You must provide a score.");
        if(typeof score !== "number")
            return console.warn(`The score must be a number, "${score}" isn't valid.`);
        if(!(score > 0))
            return console.warn("The score has to be greater than 0.");
        if(score > 10)
            return console.warn("The score can't be greater than 10.");
        if (!/^[0-9]+(\.[0-9]{1})?/g.test(score)) 
            return console.warn("The score doesn't have the correct format.");
        this.score = score;
    }

    printMovieData() {
        console.log(`
            IMDB id: ${this.id}
            Title: ${this.title}
            Director: ${this.director}
            Year: ${this.year}
            Countries: ${this.countries}
            Genres: ${this.genres}
            Score: ${this.score}
        `);
    }

    //will receive an array of objects and create a Movie object from each element in the array
    static createInstances(objects) {
        if(objects.length < 1) 
            return console.warn("The array you provided is empty.");
        if(!objects.every(object => object instanceof Object)) 
            return console.warn("All the elements in the array must be objects.")
        let newObjects = []
        for (let object of objects) {
            newObjects.push(new Movie(object));
        }
        return newObjects;
    }
}

let testObject = {
    id: "IM1234567",
    title: "Test Movie",
    director: "Test Director",
    year: 1998,
    countries: ["Colombia", "USA"],
    genres: ["Action", "NotAValidGenre", "Thriller"], // should output NotAValidGenre is not an accepted genre
    score: 9.8
}
  
let myMovie = new Movie(testObject);
myMovie.printMovieData();
  
testObject = {
    id: "IM234567", // should output The IMDB id "IM234567" doesn't have the correct format.
    title: "", // should output You must provide a valid title. Title validation unsuccessful.
    director: "Josyd",
    year: 2019,
    countries: "Colombia", // should output The countries you provided (Colombia) do not seem to be an Array.
    genres: [""], // should output is not an accepted genre
    score: 10.1 // should output The score can't be greater than 10.
}
  
myMovie = new Movie(testObject);
myMovie.printMovieData();
  
let moviesArray = [
    {
        id: "IM1234567",
        title: "Test Movie",
        director: "Test Director",
        year: 1998,
        countries: ["Colombia", "USA"],
        genres: ["Action", "NotAValidGenre", "Thriller"],  // should output NotAValidGenre is not an accepted genre
        score: 9.8
    },
    {
        id: "IMM234567",  // should output The IMDB id "IMM234567" doesn't have the correct format.
        title: "",  // should output You must provide a valid title. Title validation unsuccessful.
        director: "Josyd",
        year: 2019,
        countries: "Colombia", // should output The countries you provided (Colombia) do not seem to be an Array.
        genres: ["MovieGenre"], // should output MovieGenre is not an accepted genre
        score: 10.1 // should output The score can't be greater than 10.
    },
    {
        // You must provide a valid IMDB id. ID validation unsuccessful.
        title: "myTitle",
        director: "Josyd",    
        year: 2019,
        countries: "Colombia",  // should output The countries you provided (Colombia) do not seem to be an Array.
        // You must provide a list of genres.
        score: 9
    }
];
  
let [first, second, third] = Movie.createInstances(moviesArray);
first.printMovieData();
second.printMovieData();
third.printMovieData();
  
console.log(Movie.acceptedGenres);