//String Practice Questions
//1st question
console.log("har\"".length) 
//it is becuase of backward slash it is not occur in forward slash

//2nd question
let newName = "Sujal"
console.log(newName.includes('S'));
console.log(newName.includes('S',1));
console.log(newName.startsWith('S'));
console.log(newName.endsWith('l'));

//3rd question
let anotherName = newName.toLowerCase()
anotherName = newName.toLocaleUpperCase()
console.log(anotherName);

//4th number
let sent = "please give me 1000"
console.log(sent.slice(15));

//5th question
let firstName = "krish"
firstName[0] = 'h';
console.log(firstName);//we cannot change the string because string is immutable