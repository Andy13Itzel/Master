//Paso 0: compruebo que pueda leer mi array//
//console.log(pokemons);//

var pokeHTML= "";

//Paso 1: //
for (var index = 0; index < pokemons.length; index++) {
    var elPokemon = pokemons[index];

    var numPokemon = index+1;
    if (numPokemon.toString().length == 1){
        //CASO 1 Añadir 2 ceros
        numPokemon = '00' +  numPokemon;
    } else if (numPokemon.toString().length == 2){
    //  CASO 2 AÑADIR UN CERO
    numPokemon= '0' + numPokemon; 
    }

    var img =  `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numPokemon}.png`;

    //Paso 2 Dar formato a los pokemons//
    pokeHTML = pokeHTML + `
        <h1>${index+1}. ${elPokemon}</h1>
        <img src="${img}"/>
        `
}

document.write(pokeHTML);