

$.ajax({
	url: "https://pokeapi.co/api/v2/pokemon/101",
	type: 'GET',
	success: function(electrode) {
		// console.log(electrode.sprites.front_default.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"); 
		console.log(electrode);
		let name = electrode.name;
		let type = electrode.types["0"].type.name;
		let hp = electrode.stats[5].base_stat;
		let atk = electrode.stats[4].base_stat;
		let def = electrode.stats[3].base_stat;
		let statsArray = [name, type, hp, atk, def];
		let abilities = electrode.abilities["0"].ability.name;
		let image = electrode.sprites.front_default.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"
		// let newDiv = $('<div class="electrode"></div>')

		// $('.poke-thrasher').append(newDiv);
		
	}

})

$.ajax({
	url: "https://pokeapi.co/api/v2/pokemon/105",
	type: 'GET',
	success: function(marowak) {
		// console.log(marowak);
		let name = marowak.name;
		let type = marowak.types["0"].type.name;
		let hp = marowak.stats[5].base_stat;
		let atk = marowak.stats[4].base_stat;
		let def = marowak.stats[3].base_stat;
		let statsArray = [name, type, hp, atk, def];
		let abilities = marowak.abilities["0"].ability.name;
		let image = marowak.sprites.front_default.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"
		// let newDiv = $('<div class="marowak"></div>')
	}
})

$.ajax({
	url: "https://pokeapi.co/api/v2/pokemon/169",
	type: 'GET',
	success: function(crobat) {
		// console.log(crobat);
		let name = crobat.name;
		let type = crobat.types["0"].type.name;
		let hp = crobat.stats[5].base_stat;
		let atk = crobat.stats[4].base_stat;
		let def = crobat.stats[3].base_stat;
		let statsArray = [name, type, hp, atk, def];
		let abilities = crobat.abilities["0"].ability.name;
		let image = crobat.sprites.front_default.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png"
		// let newDiv = $('<div class="crobat"></div>')

	}
})

	// <!-- <div class="Poke-thrasher">
	// 	<div class="top-display">
	// 		<button id="blue"></button>
	// 		<button id="red"></button>
	// 		<button id="yellow"></button>
	// 		<button id="green"></button>
	// 	</div>
	// 	<div class="icon-display">
	// 		<div class="pokemon-image">
	// 		</div>
	// 	</div>
	// 	<div class="door">
	// 		<div class="stats-display">
	// 			<ul class="stats">
	// 				<li>Pokemon:</li>
	// 				<li>HP:</li>
	// 				<li>ATK:</li>
	// 				<li>Speed:</li>
	// 				<li>Special:</li>
	// 				<li>Total:</li>
	// 			</ul>
	// 		</div>
	// 		<div class="nav-buttons">
	// 			<button id="left"></button>
	// 			<button id="right"></button>
	// 		</div>
	// 	</div>
	// </div> -->

