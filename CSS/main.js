let animado =document.querySelectorAll(".contenedor-tecno");
let animado2=document.querySelectorAll(".contenedor-trabajos");
let animado3=document.querySelectorAll(".formulario");



function mostrarScroll(){
    let scrollTop=document.documentElement.scrollTop;
    for(var i=0;i<animado.length;i++){
        let alturaAnimado=animado[i].offsetTop;
        if(alturaAnimado-950<scrollTop){
            animado[i].style.animation='fadeInDown 2s';
            animado[i].style.visibility='visible';
        }
    }
    for(var i=0;i<animado2.length;i++){
        let alturaAnimado=animado2[i].offsetTop;
        if(alturaAnimado-900<scrollTop){
            animado2[i].style.animation='backInUp 1.5s';
            animado2[i].style.visibility='visible';
        }
    }
    for(var i=0;i<animado3.length;i++){
        let alturaAnimado=animado3[i].offsetTop;
        if(alturaAnimado-900<scrollTop){
            animado3[i].style.animation='fadeInTopLeft 1.5s';
            animado3[i].style.visibility='visible';
        }
    }
}
window.addEventListener('scroll',mostrarScroll);