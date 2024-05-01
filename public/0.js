window.addEventListener("DOMContentLoaded", () => { var star = document.getElementById("middle-cross");
    var intro = document.getElementById("intro");
    var middleCross = document.querySelector(".middle-cross");
    var vAndHCross1 = document.getElementsByClassName('v-and-h-cross')[0];
    var vAndHCross2 = document.getElementsByClassName('v-and-h-cross')[1];

    function loadIntro() {
        const introAnimation = localStorage.getItem('introAnimation');

        if (!introAnimation) {
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
            localStorage.setItem('introAnimation', false);
        } else if (introAnimation == 'false') {
            intro.style.display = "none"; // Hide the intro
        }
    }

    loadIntro();

    const textContent = document.getElementById("decide");
    const form = document.getElementById('form');

    const button = document.getElementById('button');
    const input = document.getElementById('input_bar');
    const iris = document.getElementById('iris');
    const pupil = document.getElementById('pupil');
    const coolbox = document.getElementById('coolbox');
    const rainbowInput = document.querySelector('.rainbow_input');
    const rainbowButton = document.querySelector('.rainbow_button');
    let secPercentage = 0;
    let aCond = false;

    function updateBackgroundPosition() {
        secPercentage = parseInt(getComputedStyle(pupil).backgroundPosition.split(' ')[1].slice(0, -1));
        if (secPercentage !== -139) {
            requestAnimationFrame(updateBackgroundPosition);
        } else {
            pupil.style.animationPlayState = 'paused';
        }
    }

    input.addEventListener('input', function(e) {
        if (e.target.value != '') {
            if (!aCond) {
                updateBackgroundPosition(); 
                aCond = true;
                button.style.display = 'block';
                button.style.borderRadius = '0px 5px 5px 0px';
            }
        } else {
            pupil.style.animationPlayState = 'running';
            aCond = false;
            button.style.display = 'none';
            button.style.borderRadius = '5px';
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const value = input.value
        fetch('/goblet_of_fire', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ value: value })
        });

        button.style.display = "none";
        input.style.display = "none";
        iris.style.display = "none";
        pupil.style.display = "none";
        rainbowInput.style.display = "none";
        rainbowButton.style.display = "none";
        coolbox.style.backgroundColor = "#1E1E1E";
        setTimeout(function(){
            textContent.style.transform = "scale(" + 2 + ")";
            setTimeout(function(){
                new Typed(textContent, {
                    strings: ["", "Thanks for your participation."],
                    typeSpeed: 120,
                    backSpeed: 40,
                    startDelay: 100,
                    showCursor: false,
                });
            }, 2000);
        }, 1500);
    })
});
