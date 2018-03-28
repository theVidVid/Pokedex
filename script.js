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
		this.pokeTeam = [];
	}
	all () {
		return this.pokeTeam;
	}

	get (name) {
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
// //Pokemon ajax call
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
			$("#name").append(pokeData.name);
			$(".icon-display").children('img').attr('src','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png');
			$(".hp").append(pokeData.stats[5].base_stat);
			$(".atk").append(pokeData.stats[4].base_stat);
			$(".def").append(pokeData.stats[3].base_stat);
			$(".type").append(pokeData.types[0].type.name);
			$(".abilities").children('#abilities').append(getAbilities(abilities));
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
			// $(".name").append(pokeData.name);
			// $(".icon-display").children('img').attr('src','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png');
			// $(".hp").append(pokeData.stats[5].base_stat);
			// $(".atk").append(pokeData.stats[4].base_stat);
			// $(".def").append(pokeData.stats[3].base_stat);
			// $(".type").append(pokeData.types[0].type.name);
			// $(".abilities").append(getAbilities(abilities));
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
			// $(".name").append(pokeData.name);
			// $(".icon-display").children('img').attr('src','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png');
			// $(".hp").append(pokeData.stats[5].base_stat);
			// $(".atk").append(pokeData.stats[4].base_stat);
			// $(".def").append(pokeData.stats[3].base_stat);
			// $(".type").append(pokeData.types[0].type.name);
			// $(".abilities").append(getAbilities(abilities));
		}
	});	
}
electrode();
marowak();
crobat();
console.log(pokeThrasher);


