
let cont=0
let añadir=document.querySelector(".btt")
añadir.addEventListener("click",añadira);
function añadira(){
    
    cont=cont+1
    let papa=document.getElementById('papa') 
    console.log(cont)
    papa.innerHTML+=`<div class="target" ><h2>modulo ${cont}</h2><p>hoy estamos de buenas</p><button class="comprar">comprar</button><button class="btm" onclick="borrara(this)">borrar</button></div>`

}
/* let borrar=document.querySelector(".btm") */
/* borrar.addEventListener("click",borrara); */
function borrara(yo){  
        /* let papa=document.getElementById("papa") */
        yo.parentNoe.remove(yo.parentNode)
        /* parentNode.removeChild(papa.parentNode); */
   
   
   }
   
