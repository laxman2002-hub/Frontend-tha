let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let ScreenValue = '';
for (item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        // console.log('botton text is ', buttonText);
        if (buttonText == '×'){
            ScreenValue += '*'
        }
        else if (buttonText == '÷'){
            ScreenValue += '/'
        }
        else if (buttonText == 'C'){
            ScreenValue = ''
            screen.value = '';
        }
        else if (buttonText == '='){
            screen.value = eval(ScreenValue) ;
        }
        else if (buttonText == '←'){
            ScreenValue = ScreenValue.slice(0,-1)
            // console.log(ScreenValue)
        }
        else{
            ScreenValue += buttonText ;
            // console.log(ScreenValue)
        }
        
        if(buttonText == '←'){
            screen.value = screen.value.slice(0,-1)
        }
        else if (buttonText != '=' && buttonText != 'C' && buttonText != '←'){
        screen.value += buttonText 
        }
        
        
    })

}