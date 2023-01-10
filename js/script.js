let btnLeft = document.querySelector('.btn-left')
let btnRight = document.querySelector('.btn-right')
let btnMobile = document.querySelector('.btn-mobile')
let slideIndex = 1

btnMobile.addEventListener('click', function() {
    let menuMobile = document.querySelector('.menu-mobile')
    if (menuMobile.classList.contains('mostrar-menu-mobile')) {
        menuMobile.classList.remove('mostrar-menu-mobile')
    } else {
        menuMobile.classList.add('mostrar-menu-mobile')
    }
})

btnLeft.addEventListener('click', function() {
    showSlides(slideIndex += -1)
})

btnRight.addEventListener('click', function() {
    showSlides(slideIndex += 1)
})

function automatic() {
    showSlides(slideIndex += 1)
}

function showSlides(index) {
    let slides = document.querySelectorAll('.area-banner')
    if (index > slides.length) {
        slideIndex = 1
    }
    if (index <1) {
        slideIndex = slides.length 
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    slides[slideIndex - 1].style.display = 'block'
}

setInterval(automatic, 6000)