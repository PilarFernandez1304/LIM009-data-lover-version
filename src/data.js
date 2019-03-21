/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;
//window.viewPokemones=viewPokemones;
//Mostrar Data
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

//Obteniendo Data

   const Data=POKEMON.pokemon;
   

//  // DOMContentLoader
//  const Datos=ObtenerData();
//  addEventListener('DOMContentLoaded',()=>{
//     MostrarDatos(Datos);
//  })

 //Mostrar Resultado de Filtrado
 function MostrarDatos(Datos){
  const contenedor= document.getElementById('FilterType');
   Datos.forEach(Pokemon=> {
     const PokemonHTML=document.createElement('p');
     PokemonHTML.innerHTML=`
     <p> ${Pokemon.name}</p>
     `
     
   });

}


const filterData = (Data,condition) =>{
  listaFiltrada = Data.filter((element)=>{
    for(let i = 0 ; i < element.type.length ; i++){
      if (element.type[i] === condition) {
        return 1;
      }
    }
  });
  return listaFiltrada;
}

// const FiltrarTipo =() =>{
  
//   const resultFiltrado = POKEMON.pokemon.filter(FiltrarTipo=>
//   FiltrarTipo.type=='Grass' || FiltrarTipo.type=='Poison' || FiltrarTipo.type == 'Normal'
//   || FiltrarTipo.type=='Flying')
//   return resultFiltrado;
// }

// console.log(FiltrarTipo());

window.pokemon={
  filterData:filterData,
  Data:Data
}