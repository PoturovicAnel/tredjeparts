function myFunction(){
fetch('http://api.icndb.com/jokes/random')
  .then(response => response.json())
  .then(data => document.getElementById('ChuckNorris').innerHTML = data.value.joke)

}

