

 
for (let i = 0; i <POKEMON.pokemon.length ; i++) {
const con=document.getElementById('root').innerHTML+=
` <div class="conteiner-pokemon">
    <p> ${POKEMON.pokemon[i].num}</p>
    <img src="${POKEMON.pokemon[i].img}">

  </div>
`;

}


  
