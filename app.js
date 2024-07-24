//Prompt for user's name
var input = require('readline-sync');
console.log("Welcome to Movie Review Program");
var name = input.question("Please enter your name:\t");

//Generate output of movie details
class movie {
    constructor(Name, Genre, RunningTime, ReleaseDate, Rating, Review) {
        this.Name = Name;
        this.Genre = Genre;
        this.RunningTime = RunningTime;
        this.ReleaseDate = ReleaseDate;
        this.Rating = Rating;
        this.Review = Review;
    }

    //Method to display movie details
    displayMovieDetails() {

        //Using str to contain all the movie details to be displayed 
        let str = "";
        str += "Name\t\t: " + this.Name;
        str += "\nGenre\t\t: " + this.Genre.join(", ") + "\n";

        //Converting minutes to hours and minutes
        if (this.RunningTime < 60) {
            str += "Running Time\t: " + this.RunningTime + "m";
        }
        else if (this.RunningTime > 60 && this.RunningTime % 60 == 0) {
            str += "Running Time\t: " + this.RunningTime / 60 + "h";
        }
        else {
            str += "Running Time\t: " + Math.floor(this.RunningTime / 60) + "h " + this.RunningTime % 60 + "m";
        }
        str += "\nRelease Date\t: " + this.ReleaseDate + "\n";

        //Ensuring that output of rating is not NaN
        if (this.Rating[1] == 0) {
            str += "Rating\t\t: 0 (0 voters)\n";
        }
        else {
            str += "Rating\t\t: " + Math.round((this.Rating[1] / this.Rating[0]) * 10) / 10 + " (" + this.Rating[0] + " voters)\n";
        }
        return str;
    }
}

//Declare 5 movies in 5 different arrays
var movie1 = new movie(
    "Black Panther: Wakanda Forever 2022",
    ["Adventure", "Action", "Drama", "Fantasy", "Sci-Fi", "Thriller"],
    161,
    "11 Nov 2022",
    [9, 42],
    ["What a fabulous movie delivered by marvel for its fans",
        "#wakandaforever  is one of the most amazing movies ever created",
        "Good acting and nice effects, but you leave the film feeling underwhelmed by a silly plot "]
);

var movie2 = new movie(
    "Avatar: The Way of Water",
    ["Adventure", "Sci-Fi"],
    192,
    "16 Dec 2022",
    [4, 15],
    ["Stunning Sequel",
        "3D experience is visually stunning and super",
        "Good CG doesn't make a film good",
        "This movie was such a disappointment"]
);

var movie3 = new movie(
    "Fast X",
    ["Crime", "Action", "Mystery", "Thriller"],
    43,
    "19 May 2023",
    [28, 60],
    ["In my opinion, this was an absolute cinematic delight",
        "This is seriously a must watch in the theatre"]
);

var movie4 = new movie(
    "Ant-Man and the Wasp: Quantunmania",
    ["Adventure", "Action"],
    120,
    "16 Feb 2023",
    [18, 80],
    ["Yup I feel lucky to have seen this",
        "Good film and a SOLID start to the MCU's Phase 5",
        "Mediocre at its best moments"]
);

var movie5 = new movie(
    "M3GAN",
    ["Horror", "Mystery", "Thriller"],
    102,
    "6 Jan 2023",
    [20, 70],
    ["What an amazing movie this was it was funny and scary",
        "I watched M3GAN twice last night on 123movies and I was sold",
        "M3gan is a well made movie with a unique storyline"]
);

//Declare movieList array
var movieList = [movie1, movie2, movie3, movie4, movie5];

//Sorting out movie genres
function displayGenres() {

    ///Pushing all movie genres into an array
    RawMovieGenre = []
    for (var i = 0; i < movieList.length; i++) {
        currentMovieGenre = movieList[i].Genre;
        for (var j = 0; j < currentMovieGenre.length; j++) {

            //Add each genre from the current movie's genre aray to RawMovieGenre
            RawMovieGenre.push(currentMovieGenre[j]);
        }
    }

    //Create an array to store unique genres and remove duplicates
    oldmovieGenre = [];

    //Checking for duplicated genres in the array
    for (var k = 0; k < RawMovieGenre.length; k++) {
        var genre = RawMovieGenre[k];
        var isDuplicate = false;
        for (var m = 0; m < oldmovieGenre.length; m++) {

            //Check if the genre is already present in oldmovieGenre array
            if (oldmovieGenre[m] === genre) {
                isDuplicate = true;
                break;
            }
        }

        //If the genre is not a duplicate add it to the oldmovieGenre
        if (!isDuplicate) {
            oldmovieGenre.push(genre);
        }
    }

    //Sorting genres in alphabetical order
    movieGenre = [];
    movieGenre = oldmovieGenre.sort();

    //Returns the sorted array of movie genres
    return movieGenre;
}

//Checking for duplicate genre input 
function genreDuplicateCheck() {
    resultToReturn = false;

    //'some' function returns true if at least one duplicate is found 
    resultToReturn = genres.some((element, index) => {

        //'indexOf' function returns first index of the element in the array
        //current index is not equal to the index of occurrence means duplicate is found
        return genres.indexOf(element) !== index;
    });
    if (resultToReturn) {
        console.log("\tPlease enter valid genre option(s)! There were duplicate inputs!");
    }
}

//Displaying movie details - case 1
function allMovieDetails() {
    for (var i = 0; i < movieList.length; i++) {
        console.log(movieList[i].displayMovieDetails());
    }
}

//Adding a new movie together with its details - case 2
function newMovieName() {
    do {
        //Comparing new movie name to ensure it is not repeated
        newMovieQns = input.question("\n\tPlease enter Movie's name: ");
        isUniqueMovie = true;
        for (var j = 0; j < movieList.length; j++) {
            movieCheck = movieList[j].Name
            if (newMovieQns.toLowerCase() == movieCheck.toLowerCase()) {
                console.log("\tPlease enter a unique movie name!");
                isUniqueMovie = false;
            }
        }
    } while (!isUniqueMovie)
    return newMovieQns;
}

//Adding new movie's genres - case 2
function newMovieGenre() {

    //Sorting and displaying the genres
    displayGenres();
    newMovieGenresQns = [];
    var genreInputValidation = false;
    while (!genreInputValidation || resultToReturn == true) {
        console.log("\n\tPlease enter Movie's genre(s): ");
        let l = 1;
        for (k = 0; k < movieGenre.length; k++) {
            console.log("\t" + l + ") " + movieGenre[k]);
            l++;
        }
        newGenreInput = input.question("\t>> ");
        newMovieGenresQns = getMovieGenre(newGenreInput);

        //Validating user input 
        if (genres.length === 0 || newGenreInput.includes(".")) {
            console.log("\tPlease enter valid genre option(s)!");
        } else {
            genreInputValidation = true;
        }

        //Checking for duplicates in user input 
        genreDuplicateCheck();
    }
}

//Adding new genre into an array - case 2
function getMovieGenre(newGenreInput) {
    var genreInputs = newGenreInput.split(",");
    genres = [];

    //Removing empty spaces from the user's input
    for (let i = 0; i < genreInputs.length; i++) {

        //Trim the input to remove any trailing spaces 
        let trimmedInput = genreInputs[i].trim();

        //Subtract 1 from the parsed value from genre indices 
        let genreIndex = parseInt(trimmedInput, 10) - 1;
        if (genreIndex >= 0 && genreIndex < movieGenre.length && !isNaN(genreIndex)) {
            genres.push(movieGenre[genreIndex]);
        }
    }
    return genres;
}


//Adding new movie's release date - case 2
function newMovieReleaseDate() {
    newMovieDateQns = input.question("\n\tPlease enter Movie's release date: ");
    return newMovieDateQns;
}

//Adding new movie's running time - case 2
function newMovieRunningTime() {
    do {
        newMovieRunTimeQns = input.question("\n\tPlease enter Movie's running time (mins): ");
        if (!Number.isInteger(parseInt(newMovieRunTimeQns)) || newMovieRunTimeQns % 1 !== 0 || newMovieRunTimeQns.includes(".")) {
            console.log("\tPlease enter valid running time!");
        }
    } while (!Number.isInteger(parseInt(newMovieRunTimeQns)) || newMovieRunTimeQns % 1 !== 0 || newMovieRunTimeQns.includes("."));
    return parseInt(newMovieRunTimeQns);
}

//Add rating to a movie - case 3
function addRating() {
    do {
        console.log("\n\tSelect the movie to add a rating: ");
        var num = 1;

        //Displaying the different movie's
        for (k = 0; k < movieList.length; k++) {
            console.log("\t" + num + ") " + movieList[k].Name);
            num++;
        }
        k++;
        console.log("\t" + k + ") Go Back to Main Menu.");
        var movieIndex = input.question(
            "\t>> "
        );

        //Checking if user wants to exit to main menu
        if (movieIndex == k) {
            break;
        }

        //Adding a rating to a new movie
        if (movieIndex >= 1 && movieIndex <= movieList.length && !movieIndex.includes(".")) {
            selectedMovie = movieList[movieIndex - 1];
            var rating = input.question(
                "\n\tEnter your rating for \"" + selectedMovie.Name + "\" (1 to 5 inclusive): "
            );

            //Validate the rating and add it to the movie
            while (isNaN(rating) || rating < 1 || rating > 5 || rating.includes(".")) {
                console.log("\n\tEnter a valid rating!");
                rating = input.question(

                    "\n\tEnter your rating for \"" + selectedMovie.Name + "\" (1 to 5 inclusive): "
                );
            }
            selectedMovie.Rating[0] += Number(rating);
            selectedMovie.Rating[1] += 1;
            console.log(
                "\n\tThe rating of " + rating + " has been added to \"" + selectedMovie.Name + "\"!"
            );
        } else {
            console.log("\n\tKindly enter a valid input!");
        }
    } while (movieIndex != k)
}

//Arrange movie release date in descending order using sort function - case 4
function readWriteReview() {
    do {
        console.log("\n\tSelect a movie you would like to read or write a review on: ");
        let number = 1, string = "";
        for (var g = 0; g < movieList.length; g++) {
            string += "\t" + number + ") " + movieList[g].Name + "\n";
            number++;
        }
        let movieChoice = parseInt(input.question(string +
            "\t" + number + ") Go Back to Main Menu." +
            "\n\t>> "));
        let chosenMovie = movieList[movieChoice - 1];

        if (isNaN(movieChoice) || movieChoice < 1 || movieChoice > movieList.length || movieChoice.toString().includes(".")) {
            console.log("\tPlease enter a valid input!");
        }

        do {
            actionChoice = input.question("\n\tWould you like to: " +
                "\n\t1) Read the currently available reviews for " + chosenMovie.Name +
                "\n\t2) Write your own review on " + chosenMovie.Name +
                "\n\t3) Exit " +
                "\n\t>> ");
            switch (actionChoice) {
                case "1":
                    let index = 1, line = "";
                    for (var p = 0; p < chosenMovie.Review.length; p++) {
                        line += "\n\tReviewer " + index + ": " + chosenMovie.Review[p];
                        index++;
                    }
                    if (chosenMovie.Review.length === 0) {
                        console.log("\n\tCurrently there are no available reviews for " + chosenMovie.Name);
                    } else {
                        console.log(line);
                    }
                    break;

                case "2":
                    let userReview = input.question("\n\tWrite your reviews here (To exit, click \"Enter\")" +
                        "\n\t>> ");
                    chosenMovie.Review.push(userReview);
                    break;

                case "3":
                    console.log("\n\tThank you " + name + " for leaving a review on " + chosenMovie.Name);
                    break;

                default:
                    console.log("\n\tPlease enter a valid input!");
            }
        } while (actionChoice !== "3");
    } while (actionChoice !== "3" && movieChoice !== number);
}

//Main programme
do {

    //Prompt for the user's choices
    var number = input.question(
        "\nHi " + name + ", please select your choice:\n" +
        "\t1. Display All Movies \n" +
        "\t2. Add Movie \n" +
        "\t3. Add Rating \n" +
        "\t4. Read or Write a review \n" +
        "\t5. Exit \n" +
        "\t>> ");

    //Choosing the different user options
    switch (number) {
        case "1":

            //Display all movie details
            allMovieDetails()
            break;

        case "2":

            //Adding a new movie together with its details
            newMovieName();
            newMovieGenre();
            newMovieRunningTime();
            newMovieReleaseDate();
            var newMovieRating = [0, 0];
            var newMovieReview = [];
            var movie6 = new movie(newMovieQns, genres, newMovieRunTimeQns, newMovieDateQns, newMovieRating, newMovieReview);
            movieList.push(movie6);
            break;

        case "3":

            //Add rating to a movie
            addRating();
            break;

        case "4":

            //Write or read reviews
            readWriteReview();
            break;

        case "5":

            //Exits the code
            console.log("Thank you & Goodbye!");
            break;

        default:
            console.log("Please enter a valid input.");
            break;
    }
} while (number != "5")

