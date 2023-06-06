
function funcion_demo(){
    document.getElementById('lblResultado').innerHTML = 'Este texto se escribió desde la funcion_demo';
}


function click_boton(){
    funcion_demo();
}


function click_boton_cargar_listado(){
    document.getElementById('divCargarListado').style = "display: block;";
    document.getElementById('divMenu').style = "display: none;";
}



function click_boton_obtener_participante(){
    document.getElementById('divObtenerParticipante').style = "display: block;";
    document.getElementById('divMenu').style = "display: none;";
}


function click_boton_registrar_asistencia(){
    document.getElementById('divRegistrarAsistencia').style = "display: block;";
    document.getElementById('divMenu').style = "display: none;"
}


function click_regresar_menu(){
    document.getElementById('divMenu').style = "display: block;"
    document.getElementById('divCargarListado').style = "display: none;";
    document.getElementById('divObtenerParticipante').style = "display: none;";
    document.getElementById('divRegistrarAsistencia').style = "display: none;";
}


var arreglo_nombres = [];
function click_cargar_listado(){
    var texto_original = document.getElementById("taListado").value;
    arreglo_nombres = texto_original.split(",");
    console.log(arreglo_nombres);

}


function click_obtener_estudiante(){
    var numero_aleatorio = Math.random() * (arreglo_nombres.length - 1);
    numero_aleatorio = Math.round(numero_aleatorio);
    document.getElementById("lblObtenerEstudiante").innerHTML = arreglo_nombres[numero_aleatorio];
}


