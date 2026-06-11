function searchMovie() {

    let movie =

    document
    .getElementById(
    "movie"
    ).value;

    fetch(
    "https://www.omdbapi.com/?t="
    + movie +
    "&apikey=trilogy"
    )

    .then(function(response){

        return response.json();

    })

    .then(function(data){

        document
        .getElementById(
        "title"
        )

        .innerText =
        data.Title;

        document
        .getElementById(
        "poster"
        )

        .src =
        data.Poster;

        document
        .getElementById(
        "year"
        )

        .innerText =
        "Year: "
        + data.Year;

    });

}
