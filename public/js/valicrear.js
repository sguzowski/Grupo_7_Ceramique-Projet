window.addEventListener("load", function(){
    let formulario = document.querySelector("form.formcrear");
    formulario.addEventListener("submit", function(e){
      
        let errores = [];

        let campoNombre = document.querySelector("input.name");
        if (campoNombre.value == ""){
            errores.push("El nombre no puede estar vacio");
        };

        let campoDescripcion = document.querySelector("input.descripcion");
        if (campoDescripcion.value == ""){
            errores.push("La descripcion no puede estar vacia");
        };

        
        let campoMarca = document.querySelector("input.marca");
        if (campoMarca.value == ""){
            errores.push("La marca no puede estar vacia");
        };

        let campoPrecio = document.querySelector("input.precio");
        if (campoPrecio.value == ""){
            errores.push("El precio no puede estar vacio");
        };

        if (errores.length > 0){
            e.preventDefault();
            let ulError = document.querySelector("div.listaerrores ul");
            ulError.innerHTML = '<div class="listaerrores"></div>'
            for (let i=0;i<errores.length;i++){
                ulError.innerHTML += "<li>" + errores[i] + "</li>";
            }
        };
    });
});