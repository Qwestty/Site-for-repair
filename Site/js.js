let element = document.querySelector('.head');
let upButton = document.querySelector('.up-button');
let leftButton = document.querySelector('.carousel__prev');
let rightButton = document.querySelector('.carousel__next');


window.onscroll = function () {
    if (window.pageYOffset > 1000) {
        upButton.classList.add('shown');
    }else {
        upButton.classList.remove('shown');
    }
};

function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth"
    })
}
upButton.addEventListener('click', () =>{
    scrollTo(element);
});
