
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


