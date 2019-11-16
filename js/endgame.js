const movies = [
  {
    "movieTitle": "Avengers",
    "youtubeID": "eOrNdBpGMv8"
  },

  {
    "movieTitle": "Avengers: Age of Ultron",
    "youtubeID": "tmeOjFno6Do"
  },

  {
    "movieTitle": "Avengers: Infinity War",
    "youtubeID": "6ZfuNTqbHE8"
  },

  {
    "movieTitle": "Avengers: Endgame",
    "youtubeID": "TcMBFSGVi1c"
  }
];

//Find out how many titles it need to input
let firstmovie = document.getElementsByClassName("titlehere");

const url = "http://www.omdbapi.com/?t=" + movies[3].movieTitle + "&apikey=907e8f2a";

fetch(url)

  .then(response => {
    return response.json();
  })

  .then(movie => {

    console.log(movie.Plot);
    //adding plot
    const p = document.getElementById("plot");
    let plot = document.createTextNode(movie.Plot);
    p.appendChild(plot);


    //adding imdbRating
    const rat = document.getElementById("imdb");
    let rating = document.createTextNode("IMDB rating: " + movie.imdbRating + " out of 10 ");
    rat.appendChild(rating);


    //FORLOOP for the 2 titles
    for (let i = 0; i < firstmovie.length; i++) {

      //define container by finding the "i" of classname "movietitlebox"
      let container = document.getElementsByClassName("titlehere")[i];

      //h1 tag, create
      const h1 = document.createElement('h1');
      h1.classList.add("lookhere");

      if (i == 1) {
        h1.classList.add("themovietitle")
      }

      //put h1 to the title of movie
      h1.innerText = movie.Title;

      //put h1 in the container
      container.appendChild(h1);
    }

  });

//Youtube trailer
let container = document.getElementById("trailer");

const trailer = document.createElement("iframe");
trailer.setAttribute("id", "show");
trailer.setAttribute("class", "trailer");
trailer.setAttribute("width", "680");
trailer.setAttribute("height", "346");
trailer.setAttribute("frameborder", "0");
trailer.setAttribute("samesite", "none");
trailer.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
trailer.setAttribute("src", "https://www.youtube.com/embed/" + movies[3].youtubeID);

container.appendChild(trailer);


