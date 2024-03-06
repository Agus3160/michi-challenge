//Variables
const ajax = new XMLHttpRequest() //ajax
let imagenIndex = 0               //posicion de la lista de imagenes
let imagenIndexLimit = 0          //limite de la lista
let data = []                     //lista de imagenes

//Elementos del DOM (HTML)
const imagen = document.getElementById('imagen')
const boton = document.getElementById('boton')

//Agregamos un evento al boton para que al darle click, cambie la imagen
boton.onclick = changeImage

//Decimos que al cargar la pagina, obtenga la lista de michis
window.onload = getData

//Funcion de Ajax para obtener la lista de michis del archivo json y guardarlos en la variable
ajax.onreadystatechange = function () {
  if (ajax.readyState == 4 && ajax.status == 200) {
    data = ajax.response                //Guarda la lista de michis en la variable 'data' 
    
    imagenIndexLimit = data.length - 1  //Guarda el limite de la lista en la variable 'imagenIndexLimit'

    console.log("Se guardo la lista de michis en la variable 'data'")
  }
}

//Funcion para llamar a ajax para obtener la lista de michis
function getData() {
  ajax.open('GET', 'michis.json')
  ajax.responseType = 'json'
  ajax.send()
}

//Funcion para cambiar la imagen haciendo click al boton
function changeImage() {
  
  console.log("Este es el michi de la posicion: " + imagenIndex)

  imagen.src = data[imagenIndex] //Cambia la imagen

  //Verificar que no la posicion no exceda el limite
  if (imagenIndex === imagenIndexLimit) {
    imagenIndex = 0                   //Si el michi esta en la ultima posicion, se pone en la primer posicion
  } else {
    imagenIndex = imagenIndex + 1     //Si el michi no esta en la ultima posicion, se pone en la siguiente
  }
}