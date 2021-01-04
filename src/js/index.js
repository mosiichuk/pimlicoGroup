import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const onContentLoaded = () => {

    var mySwiper = new Swiper('.swiper-container', {
        updateOnWindowResize: true,
        slidesPerView: 1,

        breakpoints: {
            760: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
            bulletClass: 'swiper-pagination-bullet',
            bulletElement: 'div',
            bulletActiveClass: 'swiper-pagination-bullet-active'
        },

        navigation: {
            nextEl: '.navigation-button-next',
            prevEl: '.navigation-button-prev',
            disabledClass: 'navigation-button-disabled'
        },
    });
}

document.addEventListener("DOMContentLoaded", onContentLoaded);


