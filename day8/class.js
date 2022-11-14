var outerbox=document.querySelector(".outer-box");
//console.log(outerbox);
const defaultWhite=[ 98, 99, 115, 116, 117, 118, 132, 133, 134, 135, 136, 137, 149, 150, 152,
    153, 155, 156, 167, 168, 169, 170, 171, 172, 173, 174, 187, 190, 204, 206,
    207, 209, 221, 223, 226, 228,];

function innerBox()
{
    let div=document.createElement('div');
    div.style.height= '20px';
    div.style.width= '20px';
    div.style.border= '1px solid black';
    div.style.backgroundColor= 'blue'
    div.className= 'inner-box';
    return div;
}
for(let i=0;i<306;i++)
{
    outerbox.appendChild(innerBox());
}

outerbox.addEventListener("click", (e) =>{
    let background=e.target.style.backgroundColor;
    let border=e.target.style.borderColor;
    if(background==='blue')
    {
        background='white';
        // border='white';
    }
    else {
        background='blue';
        border='black';
    }
    e.target.style.backgroundColor=background;
    e.target.style.borderColor=border;
})

const insidebox=document.querySelectorAll('.inner-box');
//console.log(insidebox);
for(let i=0;i<306;i++)
{
    if (defaultWhite.includes(i))
    {
        insidebox[i].style.backgroundColor='white';
        insidebox[i].style.borderColor='black';
    }
}