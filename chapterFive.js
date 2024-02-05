//Array Questions
//1st and 2nd Question we have to take input but i can't take
//  input from VS code we can do this in browser

//3rd question
let arr = [1,2,3,4,5,6,7,8,9]
let n = arr.filter((x)=>{
    return x%2==0
})
console.log(n);

//4th question
let brr = []
for (let i = 0; i < arr.length; i++) {
    let b = arr[i]*arr[i]
    brr.push(b);
}
console.log(brr);

//5th question
let fact = arr.reduce((x1,x2)=>{
    return x1*x2
})
console.log(fact);