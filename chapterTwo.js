//1st question
let age = 16
if(10<age && age<20){
    console.log(`age is between 10 and 20 and the exact age is ${age}`);
}
else{
    console.log(`age is not between 10 and 20`);
}

//2nd question
switch(age){
    case (age>18):
        console.log(`above age 18`);
        break;
    case (age==18):
        console.log(`ready to give election`);
        break
    default:
        console.log(`less than 18`);
        
}


//3rd question
let n = 3;
if(n%2==0 && n%3==0){
    console.log(`divisible by 2 and 3`);
}

//4th question
if(n%2==0 || n%3==0){
    console.log(`divisible by 2 or 3`);
}

//5th question
let personAge = 20
if(personAge>18){
    console.log(`you can dive`);
}
else{
    console.log(`you cannot dive`);
}