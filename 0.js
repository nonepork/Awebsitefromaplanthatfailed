const textContent = document.getElementById("dec")
const form = document.getElementById('form');

const button = document.getElementById('button');
const box = document.getElementById('id_field')
const iris = document.getElementById('iris')
const pupil = document.getElementById('pupil')
const coolbox = document.getElementById('coolbox')

form.addEventListener('submit', function(e) {
    e.preventDefault(); // don't submit
    button.style.display = "none";
    box.style.display = "none";
    iris.style.display = "none";
    pupil.style.display = "none";
    coolbox.style.backgroundColor = "#222222";
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
