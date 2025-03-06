document.addEventListener('DOMContentLoaded', ()=>{
    var publicaciones = document.getElementsByClassName('publicacion');
    var asesores = document.getElementsByClassName('asesorItem');
    var grupos = document.getElementsByClassName('comunidadItem');

    document.getElementById('btnPublicaciones').addEventListener('click', ()=>{
        desesconderTodo();
        for (var i=0; i<grupos.length; i++){
            grupos[i].classList.add('esconder');
        }
        for (var i=0; i<asesores.length; i++){
            asesores[i].classList.add('esconder');
        }
        
    });
    document.getElementById('btnGrupo').addEventListener('click', ()=>{
        desesconderTodo();
        for (var i=0; i<asesores.length; i++){
            asesores[i].classList.add('esconder');
        }
        for (var i=0; i<publicaciones.length; i++){
            publicaciones[i].classList.add('esconder');
        }
    });
    document.getElementById('btnAsesores').addEventListener('click', ()=>{
        desesconderTodo();
        for (var i=0; i<grupos.length; i++){
            grupos[i].classList.add('esconder');
        }
        for (var i=0; i<publicaciones.length; i++){
            publicaciones[i].classList.add('esconder');
        }
    });
    document.getElementById('btnTodo').addEventListener('click', ()=>{
        desesconderTodo();
    });

    var desesconderTodo = ()=>{
        for (var i=0; i<publicaciones.length; i++){
            publicaciones[i].classList.remove('esconder');
        }
        for (var i=0; i<asesores.length; i++){
            asesores[i].classList.remove('esconder');
        }
        for (var i=0; i<grupos.length; i++){
            grupos[i].classList.remove('esconder');
        }
    };
})