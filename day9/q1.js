// Q.1 Create 2 objects and try to use call, apply and bind on them

const Man1 = {
    ManName:"Ram",
    age: function(a){
        console.log('the age of ',this.ManName ,'is' , a);
    }
}
const Man2 = {
    ManName:"Shyam",
    age: function(a){
        console.log('the age of ',this.ManName ,'is' , a);
    }
}

Man1.age.call(Man2,18);

Man1.age.apply(Man2 , [18]);

const ab = Man1.age.bind(Man1,18)
ab()