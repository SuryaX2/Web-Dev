const searchBar = document.querySelector('#input');
const searchBtn = document.querySelector('.s-btn');
const weatherIcon = document.querySelector('.weather-icon');
const pokeInfo = document.querySelector('.pokeinfo');

async function getPokemon(pokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        let data = await response.json();
        console.log(data);

        let pokeString =
            `<img src="${data.sprites.other["official-artwork"].front_default}"
            class="poke-img">
        <h1 class="poke-name">${data.name}</h1>
        <button class="type">${data.types[0].type.name.toUpperCase()}</button>
        <div class="details">
            <div class="column id">
                ID : ${data.id}
            </div>
            <div class="column abb">
                Ability : ${data.abilities[0].ability.name}
            </div>
            <div class="column">
                Height : ${data.height}
            </div>
            <div class="column">
                Weight : ${data.weight}
            </div>
            <div class="column">
                Base-Stat :  ${data.stats[0].base_stat}
            </div>
            <div class="column">
                Move :  ${data.moves[0].move.name}
            </div>
        </div>`;

        pokeInfo.innerHTML = pokeString;

        document.querySelector('.pokeinfo').style.display = "block";
        document.querySelector('.e-cont').style.display = "none";

        document.querySelector('.container').classList.add('ani');
        document.querySelector('.pokeinfo').classList.add('ani');

        setTimeout(() => {
            document.querySelector('.pokeinfo').classList.remove('ani');
        }, 1000);

    } catch (error) {
        console.error('Error parsing JSON:', error);
        document.querySelector('.e-cont').style.display = "block";
        document.querySelector('.e-cont').classList.add('ani');
        document.querySelector('.container').classList.add('ani');
        document.querySelector('.pokeinfo').style.display = "none";
    }


}
searchBtn.addEventListener('click', () => {
    let searchBarValue = searchBar.value.toLowerCase();
    console.log(searchBarValue);
    getPokemon(searchBarValue);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        let searchBarValue = searchBar.value.toLowerCase();
        console.log(searchBarValue);
        getPokemon(searchBarValue);
    }
});