let noRepetirCampos = 0;
const obtener = (e) =>{
    e.preventDefault();
    let tipo    = document.getElementById("tipo").value;
    let anio    = document.getElementById("anio").value;
    let texto   = document.getElementById("texto").value;

    fetch(`http://www.omdbapi.com/?apikey=4830b820&type=${tipo}&s=${texto}&y=${anio}`)
    .then(res => res.json()) 
    .then(res => {
        if (noRepetirCampos == 0){
            let campos                = document.createElement("tr");
            let campoNombre           = document.createElement("th");
            campoNombre.innerHTML     = "Nombre";
            let campoTipo             = document.createElement("th");
            campoTipo.innerHTML       = "Tipo";
            let campoAnio             = document.createElement("th");
            campoAnio.innerHTML       = "Año";
            campos.appendChild(campoNombre);
            campos.appendChild(campoTipo);
            campos.appendChild(campoAnio);
            document.getElementById("table").appendChild(campos);
            noRepetirCampos = 1;
        }
        res.Search.forEach(unidad => {
            let contenido             = document.createElement("tr");
            let contenidoNombre       = document.createElement("td");
            contenidoNombre.innerHTML = unidad.Title;
            let contenidoTipo         = document.createElement("td");
            contenidoTipo.innerHTML   = unidad.Type;
            let contenidoAnio         = document.createElement("td");
            contenidoAnio.innerHTML   = unidad.Year;
            contenido.appendChild(contenidoNombre);
            contenido.appendChild(contenidoTipo);
            contenido.appendChild(contenidoAnio);
            document.getElementById("table").appendChild(contenido);
        })
        /*document.getElementsByTagName("td").classList.add("table-info");
        document.getElementsByTagName("tr").classList.add("table-primary");*/
    })
}