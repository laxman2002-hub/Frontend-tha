/* Q5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
       Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased
*/

var information = {c1: {radius: 10 , height: 5} ,
                   c2: {radius: 7 , height: 3} , 
                   c3: {radius: 9 , height: 4} ,
                   c4: {radius: 15 , height: 8}
                  }
             
for (let item in information) {
    r = information[item].radius
    h = information[item].height
    console.log(((22/7) *r*r*h).toFixed(4));
 }   
         