var arreglo_estudiantes = [];

function click_boton_cargar_listado(){
    //Este es un comentario
    document.getElementById("divCargarEstudiantes").style="text-align: center; display: block;";
    document.getElementById("divMenu").style="display: none;";
}


function click_boton_obtener_participante(){
    document.getElementById("divObtenerParticipante").style="text-align: center; display: block;";
    document.getElementById("divMenu").style="display:none";
}


function click_boton_registrar_asistencia(){
    document.getElementById("divAsistencia").style="text-align: center; display: block;";
    document.getElementById("divMenu").style="display:none";
}

function click_boton_regresar(){
    document.getElementById("divCargarEstudiantes").style="text-align: center; display: none;";
    document.getElementById("divObtenerParticipante").style="text-align: center; display: none;";
    document.getElementById("divAsistencia").style="text-align: center; display: none;";
    document.getElementById("divMenu").style="display:block";
}


function click_boton_cargar(){
    var listado_estudiantes = document.getElementById("taEstudiantes").value;
    arreglo_estudiantes = listado_estudiantes.split(",");
    console.log(arreglo_estudiantes);
}


function click_boton_obtener(){
    //obtener un estudiante aleatorio de nuestro arreglo arreglo_estudiante
    var valor_aleatorio = obtener_numero_aleatrorio(0, arreglo_estudiantes.length - 1)
    document.getElementById("nombreEstudiante").innerHTML = arreglo_estudiantes[valor_aleatorio];
}

function obtener_numero_aleatrorio(valor_inicial, valor_final){
    //vamos a retornar un valor que esté comprendido dentro de nuestro rango.
    var numero = Math.random() * (valor_final - valor_inicial);
    numero = Math.round(numero + valor_inicial);
    return numero;
}


