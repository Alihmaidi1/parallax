let scroll;

window.addEventListener("scroll", (event) => {

    let parallax = document.getElementById("parallax");
    parallax.style.backgroundPositionY = `${window.scrollY/2}px`;
});