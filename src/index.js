console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0]);
const list = document.querySelector(".cards");

for (i = 0; i < data.length; i++) {
  const pokemon = data[i];

  //Creating the cards:
  const card = document.createElement("li");
  card.classList.add("card");
  list.appendChild(card);

  //Adding Pokemon names to cards:
  const h2 = document.createElement("h2");
  h2.classList.add("card--title");
  h2.innerText = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  card.appendChild(h2);

  //Creating image container which will include backButton image and forwardButtion:
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image--container");
  imageContainer.style.textAlign = "center";
  card.appendChild(imageContainer);

  const backButton = document.createElement("button");
  backButton.classList.add("button");
  backButton.setAttribute("id", "backwards");
  backButton.innerText = "-";
  backButton.style.width = "25px";
  backButton.style.height = "25px";
  backButton.style.display = "inline-block";
  imageContainer.appendChild(backButton);

  const img = document.createElement("img");
  img.classList.add("card--img");
  img.src = pokemon.sprites.other["official-artwork"].front_default;
  img.style.width = "80%";
  img.style.display = "inline-block";
  imageContainer.appendChild(img);

  const forwardButton = document.createElement("button");
  forwardButton.classList.add("button");
  forwardButton.setAttribute("id", "forwards");
  forwardButton.innerText = "+";
  forwardButton.style.display = "inline-block";
  forwardButton.style.width = "25x";
  forwardButton.style.height = "25px";
  imageContainer.appendChild(forwardButton);

  //Creating an array of addtional images I want to include:
  let optionalImgs = [
    pokemon.sprites.other["official-artwork"].front_default,
    pokemon.sprites.front_default,
    pokemon.sprites.back_default,
    pokemon.sprites.front_shiny,
    pokemon.sprites.back_shiny,
  ];

  //Creating the function which enable user to toggle between different images:
  let clickCounter = 0;

  document.querySelector("#forwards").addEventListener("click", function () {
    clickCounter += 1;
    if (clickCounter > optionalImgs.length - 1) {
      clickCounter = 0;
    }
    img.src = optionalImgs[clickCounter];
  });

  document.querySelector("#backwards").addEventListener("click", function () {
    clickCounter -= 1;
    if (clickCounter < 0) {
      clickCounter = optionalImgs.length - 1;
    }
    img.src = optionalImgs[clickCounter];
  });

  //Creating the list which will include Pokemon Stats:
  const cardText = document.createElement("ul");
  cardText.classList.add("card--text");
  card.appendChild(cardText);

  const hp = document.createElement("li");
  hp.innerText = "HP: " + pokemon.stats[0].base_stat;
  cardText.appendChild(hp);

  const attack = document.createElement("li");
  attack.innerText = "ATTACK: " + pokemon.stats[1].base_stat;
  cardText.appendChild(attack);

  const defense = document.createElement("li");
  defense.innerText = "DEFENSE: " + pokemon.stats[2].base_stat;
  cardText.appendChild(defense);

  const specialAttack = document.createElement("li");
  specialAttack.innerText = "SPECIAL-ATTACK: " + pokemon.stats[3].base_stat;
  cardText.appendChild(specialAttack);

  const specialDefense = document.createElement("li");
  specialDefense.innerText = "SPECIAL-DEFENSE: " + pokemon.stats[4].base_stat;
  cardText.appendChild(specialDefense);

  const speed = document.createElement("li");
  speed.innerText = "SPEED: " + pokemon.stats[5].base_stat;
  cardText.appendChild(speed);

  //Creating the additional section to include all the games each pokemon has appreared in:
  let games = "";

  for (j = 0; j < pokemon.game_indices.length; j++) {
    games = games + " " + pokemon.game_indices[j].version.name.toUpperCase();
  }

  const gamesAppeared = document.createElement("li");
  gamesAppeared.innerText = "GAMES: " + games;
  cardText.appendChild(gamesAppeared);

  console.log(card);
}
