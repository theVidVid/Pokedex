//Pokemon object
class Pokemon {
	//Creating a blueprint for the pokemon object
	constructor(name, image, hp, atk, def, pokeType, abilities) {
		this.name = name;
		this.image = image;
		this.hp = hp;
		this.atk = atk;
		this.def = def;
		this.pokeType = pokeType;
		this.abilities = abilities;
	}
}
//Trainer object
class Trainer {
	constructor() {
		// empty array that will store my pokemon lineup (pokeTeam)
		this.pokeTeam = [];
	}
	all () {
		return this.pokeTeam;
	}
	get (name) {
		// method to retrieve each pokemon by name
		for(let i = 0; i < this.pokeTeam.length; i++) {
			let pokeName = this.pokeTeam[i].stats.name;
			if(pokeName === name) {
				return this.pokeTeam[i];
			} else {
				return "You got the wrong Pokemon, try again."
			}
		}
	}
}
let pokeThrasher = new Trainer();
let renderPokemon = (pokemon) => {
	$("#name").html(`Pokemon: ${pokemon.name}`);
	$(".icon-display").children('img').attr('src', pokemon.image);
	$(".hp").html(`HP: ${pokemon.hp}`);
	$(".atk").html(`ATK: ${pokemon.atk}`);
	$(".def").html(`DEF: ${pokemon.def}`);
	$(".type").html(`Type: ${pokemon.pokeType}`);
	$("#abilities").html("");
		for (i = 0; i < pokemon.abilities.length; i++) {
			if (i === pokemon.abilities.length-1) {
				$(".abilities").children('#abilities').append(`${pokemon.abilities[i]}`);
			} else {
				$(".abilities").children('#abilities').append(`${pokemon.abilities[i]}, `);
			}
		}	
};

//Pokemon ajax call
let electrode = () => {
$.ajax({
	url: "https://pokeapi.co/api/v2/pokemon/101",
	type: 'GET',
	success: function(pokeData) {
		console.log("success!");
			let name = pokeData.name;
			let image = pokeData.sprites.front_default;
			let hp = pokeData.stats[5].base_stat;
			let atk = pokeData.stats[4].base_stat;
			let def = pokeData.stats[3].base_stat;
			let pokeType = pokeData.types[0].type.name;
			let getAbilities = () => {
				let abilities = []
				for (let i = 0; i < pokeData.abilities.length; i++) {
					abilities.push(pokeData.abilities[i].ability.name);  	
				}	
				return abilities; 	
			} 		
			let abilitiesList = getAbilities();
			let pokemon = new Pokemon(name, image, hp, atk, def, pokeType, abilitiesList);	
			pokeThrasher.pokeTeam.push(pokemon);
			// $("#name").append(pokeData.name);
			// $(".icon-display").children('img').attr('src','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png');
			// $(".hp").append(pokeData.stats[5].base_stat);
			// $(".atk").append(pokeData.stats[4].base_stat);
			// $(".def").append(pokeData.stats[3].base_stat);
			// $(".type").append(pokeData.types[0].type.name);
			// $(".abilities").children('#abilities').append(getAbilities(abilities));
			// 	let pokemonStats = getPokemonStats(pokemon);
			// 	$("#name")
			// 	for (i = 0; i < pokemonStats.length; i++) {
			// 	//iterating through all the pokemon stats that I selected
			// 		if (pokemonStats[i] === name) {
			// 			break;
			// 		} else if (pokemonStats[i] === image) {
			// 			break;
			// 		} else if (pokemonStats[i] === hp) {
			// 			break;
			// 		} else if (pokemonStats[i] === atk) {
			// 			break;
			// 		} else if (pokemonStats[i] === def) {
			// 			break;
			// 		} else if (pokemonStats[i] === pokeType) {
			// 			break;
			// 		} else {
			// 			break;
			// 		}
			// 		console.log(pokemonStats[i]); //displays all the stats without repeating
			// 		console.log(name);
			// 		console.log(image);
			// 		console.log(hp, atk, def, pokeType); 
			// 		console.log(abilitiesList[i]);
	
				// }
		}
	});	
}

//Pokemon ajax call
let marowak = () => {
$.ajax({
	url: "https://pokeapi.co/api/v2/pokemon/105",
	type: 'GET',
	success: function(pokeData) {
		console.log("success!");
			let name = pokeData.name;
			let image = pokeData.sprites.front_default;
			let hp = pokeData.stats[5].base_stat;
			let atk = pokeData.stats[4].base_stat;
			let def = pokeData.stats[3].base_stat;
			let pokeType = pokeData.types[0].type.name;
			let getAbilities = () => {
				let abilities = []
				for (let i = 0; i < pokeData.abilities.length; i++) {
					abilities.push(pokeData.abilities[i].ability.name); 
				}
				return abilities; 	
			}
			let abilitiesList = getAbilities();
			let pokemon = new Pokemon(name, image, hp, atk, def, pokeType, abilitiesList);	
			pokeThrasher.pokeTeam.push(pokemon);
			// $("#name").append(pokeData.name);
			// $(".icon-display").children('img').attr('src','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png');
			// $(".hp").append(pokeData.stats[5].base_stat);
			// $(".atk").append(pokeData.stats[4].base_stat);
			// $(".def").append(pokeData.stats[3].base_stat);
			// $(".type").append(pokeData.types[0].type.name);
			// $(".abilities").children('#abilities').append(getAbilities(abilities));
			// 	let pokemonStats = getPokemonStats(pokemon);
			// 	for (i = 0; i < pokemonStats.length; i++) {
			// // 	console.log(pokemonStats[i]);
			// 	}
		}
	});	
}

//Pokemon ajax call
let crobat = () => {
$.ajax({
	url: "https://pokeapi.co/api/v2/pokemon/169",
	type: 'GET',
	success: function(pokeData) {
		console.log("success!");
			let name = pokeData.name;
			let image = pokeData.sprites.front_default;
			let hp = pokeData.stats[5].base_stat;
			let atk = pokeData.stats[4].base_stat;
			let def = pokeData.stats[3].base_stat;
			let pokeType = pokeData.types[0].type.name;
			let getAbilities = () => {
				let abilities = []
				for (let i = 0; i < pokeData.abilities.length; i++) {
					abilities.push(pokeData.abilities[i].ability.name); 
				}
				return abilities; 	
			}
			let abilitiesList = getAbilities();
			let pokemon = new Pokemon(name, image, hp, atk, def, pokeType, abilitiesList);	
			pokeThrasher.pokeTeam.push(pokemon);
			// 	$("#name").append(pokeData.name);
			// 	$(".icon-display").children('img').attr('src','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png');
			// 	$(".hp").append(pokeData.stats[5].base_stat);
			// 	$(".atk").append(pokeData.stats[4].base_stat);
			// 	$(".def").append(pokeData.stats[3].base_stat);
			// 	$(".type").append(pokeData.types[0].type.name);
			// 	$(".abilities").children('#abilities').append(getAbilities(abilities));
			// 		let pokemonStats = getPokemonStats(pokemon);
			// 		for (i = 0; i < pokemonStats.length; i++) {
			// 			console.log(pokemonStats[i]);
			// 	}
		}
	});	
}

$( "#blue" ).click(function() {
	renderPokemon(pokeThrasher.pokeTeam[0]);
});
  
$( "#green" ).click(function() {
	renderPokemon(pokeThrasher.pokeTeam[1]);
});

$( "#yellow" ).click(function() {
	renderPokemon(pokeThrasher.pokeTeam[2]);
});
// calling each individual pokemon
electrode();
marowak();
crobat();





