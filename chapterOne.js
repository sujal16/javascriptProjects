//1st question
let s = "sujal"
let a = 16
let v = s+a
console.log(v)

//2nd Question
console.log(typeof v)

//3rd question 
const holder = {
    email : "sujalvarshney1692@gmail.com"
}
console.log(holder.email);
//we can see that we can add some extra properties to const object
holder.name = "Sujal Varshney"
console.log(holder.name)

//4th question
//we can also change the value in the const object
holder.email = "sujalvarshney255@gmail.com"
console.log(holder.email);

//5th question
const wordDictionary = {
    "apple": "a round fruit with red or green skin and a whitish interior",
    "computer": "an electronic device for storing and processing data",
    "ocean": "a large body of saltwater that covers most of the Earth's surface",
    "mountain": "a large landform that rises prominently above its surroundings",
    "book": "a written or printed work consisting of pages glued or sewn together along one side"
  };
  
  // Function to display the meaning of a word
  function getMeaning(word) {
    return wordDictionary[word] || "Meaning not found in the dictionary";
  }
  
  // Example usage
  console.log("Meaning of 'apple':", getMeaning("apple"));
  console.log("Meaning of 'computer':", getMeaning("computer"));
  console.log("Meaning of 'ocean':", getMeaning("ocean"));
  console.log("Meaning of 'mountain':", getMeaning("mountain"));
  console.log("Meaning of 'book':", getMeaning("book"));
  console.log("Meaning of 'unknownWord':", getMeaning("unknownWord"));
