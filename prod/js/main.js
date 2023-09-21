function changeNavbar(){
    var header = document.getElementById('header');
    var profileIcon = document.getElementById('profile-icon');
    var headerList = document.getElementById('nav-list');
    var scrollValue = window.scrollY;
    if(scrollValue < 150){
        header.classList.remove('navBag');
        profileIcon.classList.remove('userIcon');
        headerList.classList.remove('navList');
    } else{
        header.classList.add('navBag');
        profileIcon.classList.add('userIcon');
        headerList.classList.add('navList');

    }
}
window.addEventListener('scroll', changeNavbar);

var swiper = new Swiper(".mySwiper", {
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        // when window width is >= 480px
        600: {
         slidesPerView: 2,
         spaceBetween: 20,
        },
        // when window width is >= 640px
        900: {
         slidesPerView: 3,
         spaceBetween: 15,
        }
       },
    draggable:true,
    effect: 'slide',
    direction: 'horizontal',
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    breakpoints: {
        // when window width is >= 650px
        650: {
         slidesPerView: 2,
         spaceBetween: 10
        },
        // when window width is >= 1050px
        1050: {
         slidesPerView: 3,
         spaceBetween: 20
        },
        // when window width is >= 1500px
        1500: {
         slidesPerView: 4,
         spaceBetween: 15
        }
       },
    // autoplay: {
    //     delay: 1500,
    //     disableOnInteraction: true,
    // },
    draggable:true,
    effect: 'slide',
    direction: 'horizontal',
    freeMode: false,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Get the button:
let mybutton = document.getElementById("toTop");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}