window.addEventListener("DOMContentLoaded", () => {
    var star = document.getElementById("middle-cross");
    var intro = document.getElementById("intro");
    var middleCross = document.querySelector(".middle-cross");
    var vAndHCross1 = document.getElementsByClassName('v-and-h-cross')[0];
    var vAndHCross2 = document.getElementsByClassName('v-and-h-cross')[1];

    document.addEventListener("click", Clicked);
    function Clicked() {

        new Audio('kaigan.mp3').play();
        document.removeEventListener('click', Clicked);

        // This works, why? I haven't the faintest
        middleCross.classList.add("middle-cross-animation");
        middleCross.classList.add("middle-cross-animation::after");
        vAndHCross1.style.animation = "ig 2s forwards";
        vAndHCross2.style.animation = "an 2s forwards";

        star.addEventListener("animationend", function() {
            setTimeout(() => {
                intro.style.animation = "descend 2s ease-in-out forwards";

                intro.addEventListener("animationend", function() {
                    intro.style.display = "none"; // Hide the intro
                });
            }, 1000);
        });
    }
});
