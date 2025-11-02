const questions = [
  {
    category: "space",
    question: "What planet is known as the Red Planet?",
    choices: ["Venus", "Mars", "Jupiter"],
    answer: "Mars",
  },
  {
    category: "books",
    question: "Who wrote “Harry Potter”?",
    choices: ["Suzanne Collins", "Stephen King", "J.K. Rowling"],
    answer: "J.K. Rowling",
  },
  {
    category: "chemistry",
    question: "Which gas do plants absorb from the air?",
    choices: ["Oxygen", "Nitrogen", "Carbon Dioxide"],
    answer: "Carbon Dioxide",
  },
  {
    category: "geography",
    question: "What is the longest river in the world?",
    choices: ["Nile", "Amazon", "Mississippi"],
    answer: "Nile",
  },
  {
    category: "geology",
    question: "What is the hardest natural substance on Earth?",
    choices: ["Gold", "Diamond", "Quartz"],
    answer: "Diamond",
  },
];

const getRandomQuestion = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomComputerChoice = choicesArray => {
    return choicesArray[Math.floor(Math.random() * choicesArray.length)];
};


const randomQuestion = getRandomQuestion(questions);
console.log(`Question: ${randomQuestion.question}`);

const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log(`Computer choice: ${computerChoice}`);

const getResults = (randomQuestion, computerChoice) => {
  if (computerChoice === randomQuestion.answer) {
    return "The computer's choice is correct!"
  } else {
    return `The computer's choice is wrong. The correct answer is: ${randomQuestion.answer}`
  }
}

console.log(getResults(randomQuestion, computerChoice));