document.cookie = "name=Alejandro;";
document.cookie = "favorite_food=lentejas;";
document.cookie = "name=Pepe;"

window.onload = ()=>{
    if(document.cookie)
        console.log(document.cookie) 
}
