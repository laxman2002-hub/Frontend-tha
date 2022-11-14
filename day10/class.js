let names = ['Ashutosh', 'Atharva', 'Captain', 'Chaitanya', 'Laxman', 'Mayank', 'Rahul', 'Ritika'];
names = [...names, ...names];
var select = document.getElementById('select');
var destroy = document.getElementById('destroy');
var win = document.getElementById('win');
var lose = document.getElementById('lose');

const buttons = document.querySelectorAll('.card');
let moves = document.getElementById('move');
let grid = document.getElementById('grid');
moves.innerHTML = 30;
buttons.forEach(button => {
    var a = names[Math.floor(Math.random() * names.length)];
    button.innerHTML = a;
    index = names.indexOf(a);
    names.splice(index, 1);
})

var matches = 0;
var f = 0;
var pre_button;
var game = true;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (!button.classList.contains('flip') && game) {
            game = false;
            select.play();
            
            if (moves.innerHTML == 0){
                moves.innerHTML = '!!! Opps You Lose !!!' ;
                lose.play();
                grid.classList.add('hidden');
                
            }
            else{
            moves.innerHTML--;
            button.classList.add('flip');
            setTimeout(() => {
                if (f == 1000) {
                    f = 0;
                    if (button.innerHTML == pre_button.innerHTML) {
                        destroy.play()
                        button.classList.add('hidden')
                        pre_button.classList.add('hidden');
                        matches++;
                        if (matches == 8){
                            moves.innerHTML = '*****  You Won *****';
                            var head = document.getElementById('head');
                                head.classList.add('hidden');
                            var grid = document.getElementById('grid');
                                grid.classList.add('winner');
                            win.play();
                        }

                    }
                    else {
                        button.classList.remove('flip');
                        pre_button.classList.remove('flip');
                    }
                }
                else {
                    pre_button = button
                    f = 1000
                }
                game = true
            }, f)
        
        }

    }
    })
})


