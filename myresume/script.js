// window.addEventListener("load", function () {
//     const loader = document.querySelector(".loader");
//     loader.className += " hidden";
// });

//SECTION TYPEWRITING ABOUT ME

let first = 0;
let txt = 'I am Tigran Nazaryan, Front-End Developer.';
let speedTypeWriter = 50;
typeWriter();

function typeWriter() {
    if (first < txt.length){
        document.getElementById("about_me").textContent += txt.charAt(first);
        first++;
        setTimeout(typeWriter, speedTypeWriter);
    }
}
//SLIDER SECTION

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");


    if (n > slides.length) {
        slideIndex = 1;
    }


    if (n < 1) {
        slideIndex = slides.length;
    }


    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

