const menuButton = document.querySelector('.nav__mobile-button');
const menu = document.querySelector('.nav__list');
const menuLinks = document.querySelectorAll('.nav__link');
const slider = document.querySelector('.swiper');
const scrollTopButton = document.querySelector('.scroll-top');



// Mobile menu
const toggleDisplayMenu = () => {
    menuButton.classList.toggle('toggle');
    menu.classList.toggle('mobile-show');
}

const mobileClick = () => {
    if (menuButton.classList.contains('toggle')) {
        toggleDisplayMenu();
    }
}

menuButton.addEventListener('click', () => {
    toggleDisplayMenu();
});


menuLinks.forEach(link => {
    link.addEventListener('click', mobileClick);
})


// SWIPER
const swiper = new Swiper(slider, {
    navigation: {
        nextEl: slider.querySelector('.swiper-button-next'),
        prevEl: slider.querySelector('.swiper-button-prev')
    },
});


// scroll top button
const displayButton = () => {
    window.scrollY > window.innerHeight
    ? scrollTopButton.classList.add("show")
    : scrollTopButton.classList.remove("show");
}

const scrollTop = () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
      })
}

window.addEventListener('scroll', displayButton);
scrollTopButton.addEventListener('click', scrollTop)