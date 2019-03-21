// viewPokemones();
//
let array; 
function SelectFilter(){
 const a = document.getElementById('FilterSelect').value;
    if(a==='1'){
          array=["Grass","Poison"];

    }else if(a ==="2"){
         array=['1ª Evolucion','2ª Evolucion','3ª Evolucion'];
    }else{
        
         array=[];
    }
   let string='';
    for (let i = 0; i<array.length; i++) {
     string =string+ '<option>'+array[i]+'</option>';
        
    }
    string='<select name="filterType">'+string+'</select>';
    document.getElementById('FilterType').innerHTML=string;
}






  
