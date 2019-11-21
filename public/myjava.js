function myChuckJoke(){
fetch('http://api.icndb.com/jokes/random')
  .then(response => response.json())
  .then(data => document.getElementById('ChuckNorris').innerHTML = data.value.joke)

}

function myDadJoke(){
  fetch('https://icanhazdadjoke.com/', {
    method: 'get',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Accept': 'application/json'
    },
  }).then(res=>res.json())
  .then(data => document.getElementById('DadJoke').innerHTML = data.joke)

}

