/*

Url for sprite : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
Url from our pokeAPI : "https://pokeapi.co/api/v2/pokemon/33/"

splitting strings?: const splitArray = pokemon.url.split("/");  log out splitArray
using url object?
searching through string?
hard coding a test solution?

*/

const id = 10;
const url = "https://pokeapi.co/api/v2/pokemon/33/";
const splitUrl = url.split("/");
console.log(splitUrl);
console.log(splitUrl[6]);
console.log(splitUrl[splitUrl.length - 2]);

const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

//solve the same problem using the URL object instead of string.split()
const urlObject = new URL("https://pokeapi.co/api/v2/pokemon/33/");
