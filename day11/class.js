let questions = [
    {
        question: 'Sum of 45 and -15 ?',
        options: ['30', '60', '45', 'not possible']
    },

    {
        question: 'What is Unit of Current ?',
        options: ['Ampere', 'Farad', 'Resistance', 'Volt']
    },

    {
        question: 'What is first law of motion ?',
        options: ['Inertia', 'Momentum conservation', 'Action Reaction', "Gravity's law"]
    },

    {
        question: 'Who give the relativity principle ?',
        options: ['Albert Einstein', 'Isaac Newton', 'Heinrich Rudolf Hertz', 'Nikola Tesla']
    },

    {
        question: 'Who is father of science?',
        options: ['Galileo Galilei', 'Albert Einstein', 'sIsaac Newton', 'Thales']
    }

]

let ques = document.getElementById( 'question' );
let h = document.getElementById( 'options' );
let nxt = document.getElementById('next');


q = 0; 
var score = 0;

myFunction()

function myFunction() {
    if (q<5){
        q++;

    var a = questions[Math.floor( Math.random() * questions.length )];
    ques.innerHTML = a.question;
    const ops = document.querySelectorAll( '.option' );
    var ans = a.options[0];

    ops.forEach(option =>{
        if (option.classList.contains('correct')){
        option.classList.remove('correct')
        }
        if(option.classList.contains('incorrect')){
        option.classList.remove('incorrect')
        }

    })
    ops.forEach( option => {
        op = a.options[Math.floor( Math.random() * a.options.length )]
        option.innerHTML = op;
        index = a.options.indexOf( op );
        a.options.splice( index, 1 );
    } )

    ind = questions.indexOf( a );
    questions.splice( ind, 1 );

     var flag = true
    console.log('ans=',ans);
    ops.forEach( button => {
        // console.log( button );
        if ( flag ) {
            button.addEventListener( 'click', () => {
                flag = false;
                
                if ( button.innerHTML == ans ) {
                    score+=5;
                    console.log("correct");
                    // button.classList.add('correct')
                    
                }
                else {
                    
                    button.classList.add('incorrect')
                    ops.forEach( but => {
                        if ( but.innerHTML == ans ) {
                            but.classList.add('correct')
                        }
                    } )
                }
                
            } )
        }
        
    } )

}
else{
ques.innerHTML = 'Your Score is = '+ score ;
h.classList.add('hidden');
nxt.classList.add('hidden');


}

}