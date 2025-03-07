const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2000,           // Задержка 2 секунды перед сменой слайда
        disableOnInteraction: false,  // Не останавливать автопрокрутку при взаимодействии с пользователем
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 9,
        }
    }
});
