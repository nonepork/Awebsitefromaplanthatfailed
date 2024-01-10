const textContent = document.getElementById("decide")
const form = document.getElementById('form');

const button = document.getElementById('button');
const box = document.getElementById('input_bar')
const iris = document.getElementById('iris')
const pupil = document.getElementById('pupil')
const coolbox = document.getElementById('coolbox')

form.addEventListener('submit', function(e) {
    e.preventDefault(); // don't submit
    button.style.display = "none";
    box.style.display = "none";
    iris.style.display = "none";
    pupil.style.display = "none";
    coolbox.style.backgroundColor = "#1E1E1E";
    setTimeout(function(){
        textContent.style.transform = "scale(" + 2 + ")";
        setTimeout(function(){
            new Typed(textContent, {
                strings: ["", "Thanks for your participation", "You will be inform soon"],
                typeSpeed: 100,
                backSpeed: 40,
                startDelay: 100,
                showCursor: false,
            });
        }, 2000);
    }, 1500);
})
