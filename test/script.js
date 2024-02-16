window.addEventListener("DOMContentLoaded", () => {
    var star = document.getElementById("middle-cross");
    var intro = document.getElementById("intro");

    // TODO: add an enter button or some sort of stuff to make audio play works
    var audio = new Audio("kaigan.mp3").play();

    if (audio !== undefined) {
        audio.then(_ => {
            console.log("Autoplay started!");
        }).catch(_ => {
            console.log("Autoplay was prevented.");
        });
    }

    star.addEventListener("animationend", function() {
        setTimeout(() => {
            intro.style.animation = "descend 2s ease-in-out forwards";

            intro.addEventListener("animationend", function() {
                intro.style.display = "none"; // Hide the intro
            });
        }, 1000);
    });
});
