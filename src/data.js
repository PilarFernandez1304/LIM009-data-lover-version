/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;
//window.viewPokemones=viewPokemones;
const viewPokemones = () =>{
for (let i = 0; i <POKEMON.pokemon.length ; i++) {
  const con=document.getElementById('root').innerHTML+=
  ` <div class="conteiner-pokemon">
      <p> ${POKEMON.pokemon[i].num}</p>
      <img src="${POKEMON.pokemon[i].img}">
      <p> ${POKEMON.pokemon[i].name}
  
    </div>
  `;
  
  }
}

//Mostrar

const FiltrarTipo =() =>{
  
  const resultFiltrado = POKEMON.pokemon.filter(FiltrarTipo=>
  FiltrarTipo.type=='Grass' || FiltrarTipo.type=='Poison' || FiltrarTipo.type == 'Normal'
  || FiltrarTipo.type=='Flying')
  return resultFiltrado;
}

console.log(FiltrarTipo());

