const obtener = (e) =>{
    e.preventDefault();
    let tipo    = document.getElementById(tipo).value;
    let anio    = document.getElementById(anio).value;
    let texto   = document.getElementById(texto).value;

    if (tipo.isNull()){
        const fetch = fetch(`http://www.omdbapi.com/?apikey=4830b820&s=${texto}&y=${anio}`)
    }
    else if (anio.isNull()){
        const fetch = fetch(`http://www.omdbapi.com/?apikey=4830b820&type=${tipo}&s=${texto}`)
    }
    else{
        const fetch = fetch(`http://www.omdbapi.com/?apikey=4830b820&type=${tipo}&s=${texto}&y=${anio}`)
    }
    .then(res => res.json()) 
    .then(res => {
        console.log(res)
        if (res.isArray()){
            console.log("es array")
        }   
    })     
}