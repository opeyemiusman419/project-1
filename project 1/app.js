// header menu toggale

const bar = document.getElementById("bar");
const nav = document.getElementById("nav");

bar.onclick = (e) => {
    const icon = e.target.getAttribute("class")

    if (icon =="fa-solid fa-bars"){
        e.target.setAttribute("class","fa-solid fa-xmark");
    }else{
        e.target.setAttribute("class","fa-solid fa-bars");

    }


    nav.classList.toggle("showNav")
}

// carousel
const carouselContainer = document.querySelector('.carouselContainer');
const eachCarousel = document.querySelector('.eachCarousel').clientWidth;
const alleachCarousel = document.querySelectorAll('.eachCarousel')
const allindicator = document.querySelectorAll('.indicator');


const slidecarousel = (index) => {
   for( let x=0; x<allindicator.length; x++)
    { if (x===index){
        alleachCarousel[x].classList.add("eachCarouselBorder")
        allindicator[x].classList.add('indicator-active')
    }else{
        alleachCarousel[x].classList.remove("eachCarouselBorder")
        allindicator[x].classList.remove('indicator-active')
    }

}

    carouselContainer.scrollLeft = (index * (eachCarousel + 10))
}

