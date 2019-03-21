viewPokemones();
//


let array; 
function SelectFilter(){
 const a = document.getElementById('FilterSelect').value;
    if(a==='1'){
          array=["Grass","Poison","Fire"];

    }else if(a ==="2"){
         array=['1ª Evolucion','2ª Evolucion','3ª Evolucion'];
    }else{
        
         array=[];
    }
   let string='';
   
    for (let i = 0; i<array.length; i++) {
      let eleccion=array[i];   
     string =string+ '<option value="'+i+'">'+eleccion+'</option>';        
    }
    
    string='<select id="filterType">'+string+'</select>';
   document.getElementById('FilterType').innerHTML=string
   
   const filterType=document.getElementById('filterType');
     filterType.addEventListener('change',()=>{
     condition=filterType.value;
     const pokedexFiltrado=pokemon.filterData(Data,condition);
     console.log(pokemon.filterData(Data,condition));
    
     // crearPlantilla(pokedexFiltrado);
})
}


// const crearPlantilla = (Data) => {
//      let listaMostrada = [];
//      Data.forEach((data)=>{
//          let card =`
//          <div class="card-item grow">
//          <h1>N° ${data.num}</h1>
//          <img class="img-res" src='${data.img}'>
//          <p>${data.name}</p>
//          </div>
//          `;
//          listaMostrada +=card;
//      });
//      return listaMostrada;
//  };












  
