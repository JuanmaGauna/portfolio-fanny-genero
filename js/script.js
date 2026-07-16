// Header al hacer scroll

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

// Barra de progreso

const progress = document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

    const total =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progressWidth =
    (window.scrollY/total)*100;

    progress.style.width = progressWidth + "%";

});

// Inicializar AOS

AOS.init({

    duration:900,

    once:true

});
/*==================================================
                BACK TO TOP
==================================================*/
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});