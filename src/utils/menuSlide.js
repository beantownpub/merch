import anime from "animejs";

export function menuOpen() {
  anime({
    targets: ".slide_menu",
    easing: "easeInOutQuad",
    translateX: "25rem"
  })
  anime({
    targets: ".animate",
    easing: "linear",
    translateX: "27rem",
    delay: 300
  })
}

export function menuClose() {
  anime({
    targets: ".slide_menu",
    easing: "easeInOutQuad",
    translateX: "-25rem"
  })
  anime({
    targets: ".animate",
    easing: "linear",
    translateX: "-27rem",
  })
}

export function cartOpen() {
  if (window.innerWidth < 768) {
    anime({
      targets: ".slide_cart",
      easing: "easeInOutQuad",
      translateX: "35em"
    })
    anime({
      targets: ".animate",
      easing: "linear",
      translateX: "26.5em",
      delay: 300
    })
    anime({
      targets: ".slide_menu",
      easing: "easeInOutQuad",
      translateX: "-25rem"
    })
    anime({
      targets: ".animate",
      easing: "linear",
      translateX: "-27rem",
    })
  } else {
    anime({
      targets: ".slide_cart",
      easing: "easeInOutQuad",
      translateX: "39em"
    })
    anime({
      targets: ".animate",
      easing: "linear",
      translateX: "30.5em",
      delay: 300
    })
    anime({
      targets: ".slide_menu",
      easing: "easeInOutQuad",
      translateX: "-31rem"
    })
    anime({
      targets: ".animate",
      easing: "linear",
      translateX: "-31rem",
    })
  }
}

export function cartClose() {
  anime({
    targets: ".slide_cart",
    easing: "easeInOutQuad",
    translateX: "-30em"
  })
  anime({
    targets: ".animate",
    easing: "linear",
    translateX: "-30em",
  })
}
