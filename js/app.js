const url = 'https://api.giphy.com/v1/gifs/search';
let busqueda = '?q=';
const key = '&api_key=VUFksjupeQfhsEb3HULIPNknLK0ikRkM';
const limite = '&limit=24';
let qbusqueda = '';
let urlCompleta = '';

const btn = document.getElementById('btn');


//  Evento
btn.onclick = () =>{
    document.getElementById('buscar').innerHTML = '';

    qbusqueda = document.getElementById('buscar').value;
    urlCompleta = url + busqueda + qbusqueda + key + limite;
    getData();
}


//  Funcion Asincrona
const getData = async () => {
    //  Con AWAIT se pausa hasta recibir la informacion
    await fetch(urlCompleta)
    .then((response) => response.json())
    .then((datos) => {
        console.log(datos)

         //  Recorriendo las imagenes
        for(let i = 0; i<datos.data.length; i++){
            //  Acada dato recorrido se asignara a una etiqueta <img>
            const gif = document.createElement('img');
            gif.src = datos.data[i].images['original'].url;
            gif.className = 'mb-3';
            document.getElementById('gifs').appendChild(gif);
        }
    })

}

getData();