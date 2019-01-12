class Carousel {
    constructor(el) {
        this.el = el;
        this.currentIndex = 0;
        this.slidesMargin = 0;
        this.initElements();
        this.initCarousel();
        this.listenEvents();
    }

    initElements() {
        this.buttonNext = this.el.querySelector('[data-next]');
        this.buttonPrevious = this.el.querySelector('[data-prev]');
        this.slidesElement = this.el.querySelector('.slides');
    }

    initCarousel() {
        this.initSlides();
    }

    initSlides() {
        this.slides = this.el.querySelectorAll('.slide');
        this.slidesCount = this.slides.length;
    }

    listenEvents() {    
        this.buttonPrevious.addEventListener('click', () => {
            let last = this.slides[this.slidesCount-1];
            this.slidesElement.prepend(last);
            this.initSlides();
        });

        this.buttonNext.addEventListener('click', () => {
            let first = this.slides[0];
            this.slidesElement.appendChild(first);
            this.initSlides();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const carousel = new Carousel(document.querySelector('.carousel'));
    console.dir(carousel);
});