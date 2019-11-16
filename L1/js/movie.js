








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

console.log(movies);


for (var i = 0; i < movies.length; i++) {


  var url = "http://www.omdbapi.com/?t=" + movies[i].movieTitle + "&apikey=907e8f2a";

  //define container by finding the "i" of classname "movietitlebox"
  let container = document.getElementsByClassName("movietitlebox")[i];

  //h2 tag 1-create 2-give class "movietitle"
  const h2 = document.createElement('h2');
  h2.setAttribute("class", "movietitle");

  fetch(url)

    .then(response => {
      return response.json();
    })

    .then(movie => {

      //put h2 to the title of movie
      h2.innerText = movie.Title;

      //put h2 in the container
      container.appendChild(h2);

    });

}
