import anime from 'animejs';

export function menuOpen() {
    anime({
        targets: '.slide_menu',
        easing: 'easeInOutQuad',
        translateX: '22em'
    })
    anime({
        targets: '.animate',
        easing: 'linear',
        translateX: '17.5em',
        delay: 300
    })
}

export function menuClose() {
    anime({
        targets: '.slide_menu',
        easing: 'easeInOutQuad',
        translateX: '-20em'
    })
    anime({
        targets: '.animate',
        easing: 'linear',
        translateX: '-20em',
    })
}

export function cartOpen() {
    anime({
        targets: '.slide_cart',
        easing: 'easeInOutQuad',
        translateX: '32em'
    })
    anime({
        targets: '.animate',
        easing: 'linear',
        translateX: '26.5em',
        delay: 300
    })
}

export function cartClose() {
    anime({
        targets: '.slide_cart',
        easing: 'easeInOutQuad',
        translateX: '-30em'
    })
    anime({
        targets: '.animate',
        easing: 'linear',
        translateX: '-30em',
    })
}