let screen1 = document.getElementById("screen1");
let screen2 = document.getElementById("screen2");
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('buttonclick')) {
            button.classList.remove('buttonclick')
            screen2.innerHTML++
            screen1.innerHTML--
        } else {
            button.classList.add('buttonclick')
            screen2.innerHTML--
            screen1.innerHTML++
        }
    })
}) 