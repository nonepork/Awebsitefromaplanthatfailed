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

    const textContent = document.getElementById("decide")
    const form = document.getElementById('form');

    const button = document.getElementById('button');
    const box = document.getElementById('input_bar')
    const iris = document.getElementById('iris')
    const pupil = document.getElementById('pupil')
    const coolbox = document.getElementById('coolbox')

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const value = document.getElementById("input_bar").value
        fetch('/goblet_of_fire', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ value: value })
        });

        button.style.display = "none";
        box.style.display = "none";
        iris.style.display = "none";
        pupil.style.display = "none";
        coolbox.style.backgroundColor = "#1E1E1E";
        setTimeout(function(){
            textContent.style.transform = "scale(" + 2 + ")";
            setTimeout(function(){
                new Typed(textContent, {
                    strings: ["", "Thanks for your participation"],
                    typeSpeed: 120,
                    backSpeed: 40,
                    startDelay: 100,
                    showCursor: false,
                });
            }, 2000);
        }, 1500);
    })
});
