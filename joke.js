
  fetch("https://v2.jokeapi.dev/joke/Any")
  .then((response) => response.json())
  .then((data) => {
  console.log(data);
  console.log(data.joke)
  joke.textContent = data.joke

  })

  