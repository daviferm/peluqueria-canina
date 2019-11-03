const iconMenu = document.querySelector('.bars'),
    $barraA = document.querySelector('.barra_a'),
    $barraB = document.querySelector('.barra_b'),
    $barraC = document.querySelector('.barra_c'),
    $menu = document.querySelector('.menu'),
    $ul = document.getElementById('ul'),
    $lista = document.getElementsByTagName('li'),
    $main = document.getElementById('contenido'),
    $header = document.getElementById('header'),
    $textoUno = document.getElementById('text-uno'),
    $textoDos = document.getElementById('text-dos'),
    $textoTres = document.getElementById('text-tres'),
    $TitleDos = document.querySelector('.Title-dos'),
    $TitleTres = document.querySelector('.Title-tres'),
    $btnSend = document.getElementById('btn-send'),
    $body = document.getElementById('body'),
    $Principal = document.getElementById('principal'),
    $Img = document.getElementById('imagenes');

let menuActive = false;
iconMenu.addEventListener('click', activarMenu);
document.addEventListener('scroll', function() {
    // Posición en pixeles de la distancia recorrida del scroll
    if (window.scrollY > 80) {
        $textoUno.classList.add('elevator');
    }
    // Plegar el header
    if (window.scrollY > 135) {
        $header.classList.add('top-header');
    } else {
        $header.classList.remove('top-header');
    }

    if (window.scrollY > 205) {
        iconMenu.classList.add('sub-icon-menu')
    } else {
        iconMenu.classList.add('top-icon-menu');
        iconMenu.classList.remove('sub-icon-menu');
    }

    if (window.scrollY > 370) {
        $TitleDos.classList.add('Title-uno');
    }
    if (window.scrollY > 430) {
        $textoDos.classList.add('elevator');
    }
    if (window.scrollY > 1070) {
        $TitleTres.classList.add('Title-uno');
    }
    if (window.scrollY > 1120) {
        $textoTres.classList.add('elevator');
    }

    // console.log(window.scrollY);
    // console.log($TitleDos.getBoundingClientRect());
})
$btnSend.addEventListener('click', function() {
    console.log('hover');
})


function activarMenu() {
    if (!menuActive) {
        $menu.classList.remove('plegar-menu');

        iconMenu.classList.add('iconActive');

        $barraA.classList.add('animateA');
        $barraB.classList.add('animateB');
        $barraC.classList.add('animateC');
        menuActive = true;
        $menu.classList.add('desplegar-menu');
        $header.classList.remove('top-header');
        iconMenu.classList.add('top-icon-menu');
        iconMenu.classList.remove('sub-icon-menu');
        $ul.classList.add('fadeInMenu');
        $body.style.height = '100vh';
        $body.style.overflow = 'hidden';
        $btnSend.style.display = 'none';

        setTimeout(() => {
            iconMenu.classList.remove('iconDesactive');
            $barraA.classList.remove('desAnimateA');
            $barraB.classList.remove('desAnimateB');
            $barraC.classList.remove('desAnimateC');
        }, 100)
    } else {
        $menu.classList.remove('desplegar-menu');
        iconMenu.classList.add('iconDesactive');

        $barraA.classList.add('desAnimateA');
        $barraB.classList.add('desAnimateB');
        $barraC.classList.add('desAnimateC');
        menuActive = false;
        $menu.classList.add('plegar-menu');
        $ul.classList.remove('fadeInMenu');
        if (window.scrollY > 135) {
            $header.classList.add('top-header');
        }
        $body.style.height = 'auto';
        $body.style.overflow = 'auto';
        $btnSend.style.display = 'block';

        setTimeout(() => {
            iconMenu.classList.remove('iconActive');
            $barraA.classList.remove('animateA');
            $barraB.classList.remove('animateB');
            $barraC.classList.remove('animateC');

        }, 100)
    }
}

function cambiarVista(vista) {
    if (vista === 'img') {
        $Img.style.display = 'block';
        $Principal.style.display = 'none';
        $btnSend.style.zIndex = '-1';
        activarMenu();
    } else {
        $Img.style.display = 'none';
        $Principal.style.display = 'block';
        $btnSend.style.zIndex = '10000';
        activarMenu();
        // window.location.href = 'index.html';
    }
}