const pokemonAPI = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10";

const getJSON = (endpoint) => {
  return fetch(endpoint)
    .then(response => 
      {
        if (!response.ok)
          throw Error(response.statusText);
        
        return response.json();
      })
    .catch(error => console.log(error));
};

const renderPokemon = (pocketMonsters, pokeListElement) => {
  pokeListElement.innerHTML = `
  <thead>
    <tr>
      <th>Name</th>
    </tr>
  </thead>`;
  pocketMonsters.forEach(pocketMonster => {
    let listItem = document.createElement("tr");
    listItem.innerHTML = `<td><a href="${pocketMonster.url}">${pocketMonster.name}</a></td>`;

    listItem.addEventListener("click", (event) => {
      event.preventDefault();
      renderPokeDetails(pocketMonster.url);
    });

    pokeListElement.appendChild(listItem);
  });
};

const renderPokeDetails = (pokeDetailsEndpoint) => {
  const orderElement = document.getElementById("order");
  const nameElement = document.getElementById("name");
  const spriteElement = document.getElementById("sprite");
  const heightElement = document.getElementById("height");
  const weightElement = document.getElementById("weight");

  getJSON(pokeDetailsEndpoint).then((data) => {
    orderElement.innerHTML = data.order;
    nameElement.innerHTML = data.name;
    spriteElement.src = data.sprites.front_default;
    heightElement.innerHTML = data.height;
    weightElement.innerHTML = data.weight;
    showDetails();
  })
}

const showDetails = () => {
  const detailsElement = document.getElementById("detailsbox");
  detailsElement.className = "";
}

const hideDetails = () => {
  const detailsElement = document.getElementById("detailsbox");
  detailsElement.className = "hidden";
}

const showPokemon = (url = pokemonAPI) => {
  getJSON(url).then((data) => {
    console.log(data);
    const results = data.results;

    const pokeListElement = document.getElementById("pokelist");
    renderPokemon(results, pokeListElement);

    if (data.next) {
      const next = document.getElementById("next");
      next.onclick = () => {
        hideDetails();
        showPokemon(data.next);
      };
    }

    if (data.previous) {
      const prev = document.getElementById("previous");

      prev.onclick = () => {
        hideDetails();
        showPokemon(data.previous);
      };
    }
  });
}

const getPokeDetails = (url) => {
  getJSON(url).then((data) => {
    renderPokeDetails(data);
  });
}

showPokemon();