// Declaring and assigning variables 
const userInput = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const clearButton = document.querySelector("#clear-btn");
const wordResult = document.querySelector("#result-content");

// Creating functions
function inputNotif(word) {
    alert("Please input a value");
}

function clearContent(word) {
  wordResult.innerHTML = "";
  if (word.value === "") {
    alert("Looks like there's no value to clear!");
    return;
  }
}

function palindromeCheck(word) {
  // Catches empty user input
  if (word.value === "") {
    inputNotif(word);
    return;
  }
  // Handles user input via string-to-array conversion and employs a regex to remove non-alphanumeric characters, as well as changes input to lowercase
  const userArray = word.value.toLowerCase().split("");
  const newArray = userArray.filter((arrayElement) => /[a-z\d]/.test(arrayElement));

  // Uses a counter variable to determine if user input is a palindrome or not
  let charCounter = 0;	
  for (const element of newArray) {
    const originalIndex = newArray.indexOf(element);
    const reverseIndex = newArray.reverse().indexOf(element);
    if (originalIndex === reverseIndex) {
      charCounter ++;
    } else {
      charCounter --;
    }
  }
  // Uses condiional logic to display input results to user
  if (charCounter === newArray.length) {
    wordResult.innerHTML = `${word.value} is a palindrome!`;
  } else {
    wordResult.innerHTML = `${word.value} is not a palindrome!`;
  }
}

// Uses event listeners to call the functions
checkButton.addEventListener("click", () => {palindromeCheck(userInput)});
clearButton.addEventListener("click", ()=> {clearContent(userInput)});