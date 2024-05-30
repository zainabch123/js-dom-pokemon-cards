console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0]);
const list = document.querySelector(".cards");

for (i = 0; i < data.length; i++) {
  const pokemon = data[i];

  const card = document.createElement("li");
  card.classList.add("card");
  list.appendChild(card);

  const h2 = document.createElement("h2");
  h2.classList.add("card--title");
  h2.innerText = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  card.appendChild(h2);

  const img = document.createElement("img");
  img.classList.add("card--img");
  img.src = pokemon.sprites.other["official-artwork"].front_default;
  card.appendChild(img);

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

  let games = "";

  for (j = 0; j < pokemon.game_indices.length; j++) {
    games = games + pokemon.game_indices[j].version.name.toUpperCase() + ", ";
  }

  const gamesAppeared = document.createElement("li");
  gamesAppeared.innerText = "GAMES: " + games;
  cardText.appendChild(gamesAppeared);

  console.log(card);
}
