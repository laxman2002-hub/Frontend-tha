/* Q2. 2. Write a JavaScript program to delete the rollno property from the following object.
 Also print the object before or after deleting the property.
  Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
 */

  var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

  console.log(student) ;

//   delete student.rollno ; // delete student['rollno'] ;

var newstudent =  Object.create({});
for (let item in student){
    if (item != 'rollno'){
    newstudent[item] = student[item] ;
    }
}

student = newstudent ;
  console.log(student) ;
