//1st question
let marks = {
    "harry": 98,
    "rohan" : 70,
    "aakash" : 7
}
for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log(`${Object.keys(marks)[i]} score ${marks[Object.keys(marks)[i]]} in exam`);
}

//2nd question
for (let key in marks){
    console.log(`${key} score ${marks[key]} number in exam`);
}
//3rd question
//not getting executed in vs code but i think it will be executed in web browser console
let cn = 24 
let a
while(true){
    a = prompt("enter a number")
    if(cn==a){
        console.log(`you got right number`);
        break;
    }
    else{
        console.log(`Try again`);
    }
}

//4th question
let arr = [50,60,75,12,90]
let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum/5);