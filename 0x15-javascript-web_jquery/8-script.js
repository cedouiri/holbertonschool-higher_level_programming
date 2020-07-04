// a Javascript script that fetches and lists all movies title by using this URL:
// https://swapi-api.hbtn.io/api/films/?format=json
$(() => {
  $.get('https://swapi-api.hbtn.io/api/films/?format=json', (data, textStatus) => {
    if (textStatus === 'success') {
      const films = data.results;
      films.forEach(film => {
        $('#list_movies').append('<li>' + film.title + '</li>');
      });
    }
  });
});
