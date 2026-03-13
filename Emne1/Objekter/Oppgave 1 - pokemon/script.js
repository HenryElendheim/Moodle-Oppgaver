let pikachu = {
  name: "Pikachu",
  health: 45,
  image: "Images/pikachu.png",
  level: 8,
};

let bulbasaur = {
  name: "Bulbasaur",
  health: 70,
  image: "Images/bulbasaur.png",
  level: 12,
};

let oranguru = {
  name: "Oranguru",
  health: 170,
  image: "Images/oranguru.png",
  level: 45,
};

let drowzee = {
  name: "Drowzee",
  health: 90,
  image: "Images/drowzee.png",
  level: 33,
};


let player = {
  name: "Henry",
  image: "Images/pokemonTrainerIdle.png",
  pokemon: [],
};


let possiblePokemon = [pikachu, bulbasaur, oranguru, drowzee];
let randomPokemon = null;
let app = document.getElementById("app");
let pokemonList = "";
let currentIndex = 0;





function updateView() {
  getRandomPokemon()
  app.innerHTML = /*HTML*/ `
  <div class="container">
    <div class="opposingPokemon">
        <div>${randomPokemon.name}</div> 
        <div>lvl: ${randomPokemon.level}</div>
        <img src="${randomPokemon.image}">
    </div>
    
    <div class="bottomScreen">
        <div class="player">
            <img src="${player.image}">
            <div>${player.name}</div>
        </div>

        <div class="buttonContainer">
            <button onclick="catchPokemon()">Fang</button>    
            <button onclick="updateView()">Finn en annen</button>
            <button onclick="showPokemonView()">Vis dine pokemon</button>       
        </div>

    </div>
  </div>
  `;
}
updateView();


function caughtPokemonView() {
  app.innerHTML = /*HTML*/`
  <div class="caughtContainer">
    <h1>Du fanget ${player.pokemon[player.pokemon.length - 1].name}</h1>
    <div class="buttonContainer">
          <button onclick="updateView()">Finn en annen</button>
          <button onclick="showPokemonView()">Vis dine pokemon</button>
    </div>
  </div>
  `;
}


function showPokemonView() {
  console.log(player.pokemon);


  for (let i = currentIndex; i < player.pokemon.length; i++) {
    currentIndex++; // dette stopper den fra å legge til de samme pokemonene du allerede har.
    pokemonList += player.pokemon[i].name + " ";
  }

  app.innerHTML = /*HTML*/`
  <div class="caughtContainer">
    <h1>${player.name} sine pokemon er:</h1> 
    <br>
    <h1>${pokemonList}</h1>
    <div class="buttonContainer">
          <button onclick="updateView()">Fang flere pokemon</button>
    </div>
  </div>
  `;
}





function catchPokemon() {
  player.pokemon.push(randomPokemon);
  caughtPokemonView();
}


function getRandomPokemon() {
  let randomNum = Math.floor(Math.random() * possiblePokemon.length);
  randomPokemon = possiblePokemon[randomNum];
}