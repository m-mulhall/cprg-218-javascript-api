const miscButton = document.getElementById("miscellaneous");
  
  fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
  .then(response => response.json())
  .then(data => {
  console.log(data);
  console.log(data.joke);

  if (data.type === "single") {
  
    joke.textContent = data.joke

  } else if (data.type === "twopart"){

    joke.textContent = data.setup + "..." + data.delivery

  }

  });

  programming.addEventListener('click', function(){
  fetch("https://v2.jokeapi.dev/joke/Programming?safe-mode")
  .then(response => response.json())

  .then(data => {
  console.log(data);
  console.log(data.joke);

  title.textContent = "A Random Programming Joke"

  if (data.type == "single") {

    joke.textContent = data.joke

  }

  else {
    joke.textContent = data.setup + "..." + data.delivery
  }
  
  })

  });

  miscellaneous.addEventListener('click', function(){
    fetch("https://v2.jokeapi.dev/joke/Misc?safe-mode")
    .then(response => response.json())
  
    .then(data => {
    console.log(data);
    console.log(data.joke);
  
    title.textContent = "A Random Miscellaneous Joke"
  
    if (data.type == "single") {
  
      joke.textContent = data.joke
  
    }
  
    else {
      joke.textContent = data.setup + "..." + data.delivery
    }
    
    })
  
    });

    pun.addEventListener('click', function(){
      fetch("https://v2.jokeapi.dev/joke/Pun?safe-mode")
      .then(response => response.json())
    
      .then(data => {
      console.log(data);
      console.log(data.joke);
    
      title.textContent = "A Random Pun"
    
      if (data.type == "single") {
    
        joke.textContent = data.joke
    
      }
    
      else {
        joke.textContent = data.setup + "..." + data.delivery
      }
      
      })
    
      });

      spooky.addEventListener('click', function(){
      fetch("https://v2.jokeapi.dev/joke/Spooky?safe-mode")
      .then(response => response.json())
    
      .then(data => {
      console.log(data);
      console.log(data.joke);
    
      title.textContent = "A Random Spooky Joke"
    
      if (data.type == "single") {
    
        joke.textContent = data.joke
    
      }
    
      else {
        joke.textContent = data.setup + "..." + data.delivery
      }
      
      })
    
      });

      christmas.addEventListener('click', function(){
        fetch("https://v2.jokeapi.dev/joke/Christmas?safe-mode")
        .then(response => response.json())
      
        .then(data => {
        console.log(data);
        console.log(data.joke);
      
        title.textContent = "A Random Christmas Joke"
      
        if (data.type == "single") {
      
          joke.textContent = data.joke
      
        }
      
        else {
          joke.textContent = data.setup + "..." + data.delivery
        }
        
        })
      
        });
  