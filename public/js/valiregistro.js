window.addEventListener("load", function(){
    let formulario = document.querySelector("form.formregister");
    formulario.addEventListener("submit", function(e){

        let errores = []; 

        let campoNombre = document.querySelector("input.name");
        if (campoNombre.value == ""){
            errores.push("El nombre no puede estar vacio");
        }else if (campoNombre.value.length < 3){
            errores.push("El nombre debe tener mas de 3 letras");
        };

        let campoUsuario = document.querySelector("input.usuario");
        if (campoUsuario.value == ""){
            errores.push("El usuario no puede estar vacio");
        }else if (campoUsuario.value.length < 8){
            errores.push("El usuario debe tener mas de 8 caracteres");
        };

        let campoPass = document.querySelector("input.password");
        if (campoPass.value == ""){
            errores.push("La contraseña no puede estar vacia");
        }else if (campoPass.value.length < 6 || campoPass.value.length > 10){
            errores.push("La contraseña debe tener entre 6 y 10 caracteres");
        };

        let campoPass2 = document.querySelector("input.password2");
        if (campoPass2.value != campoPass.value){
            errores.push("La contraseña no coincide");
        };

        let campoEmail = document.querySelector("input.email");
        if (campoEmail.value == ""){
            errores.push("El email no puede estar vacio")
        };

        let campoEdad = document.querySelector("input.edad");
        if (campoEdad.value == ""){
            errores.push("La edad no puede estar vacia");
        }else if (parseInt(campoEdad.value) < 18 || parseInt(campoEdad.value) > 99){
            errores.push("Ingrese una edad valida");
        };

        let campoTele = document.querySelector("input.telefono");
        if (campoTele.value == ""){
            errores.push("El telefono no puede estar vacio");
        };

        if (errores.length > 0){
            e.preventDefault();
            let ulError = document.querySelector("div.listaerrores ul");
            ulError.innerHTML = '<div class="listaerrores"></div>'
            for (let i = 0; i<errores.length; i++){
                ulError.innerHTML += "<li>"+ errores[i] +"</li>";
                
            }
        };
        errores = []; 
    });
});