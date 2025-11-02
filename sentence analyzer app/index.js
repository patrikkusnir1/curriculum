const getVowelCount = sentence => {
  let count = 0;
  const vowels = "aeiou";

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++
    }
  }
  return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

const getConsonantCount = sentence => {
  let count = 0;
  const consonants = "bcdfghjklmnpqrstvwxyz";
  for (const char of sentence.toLowerCase()){
    if (consonants.includes(char)) {
      count++
    }
  }
  return count;
}

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`)

const getPunctuationCount = sentence => {
  let count = 0;
  const punctuations = ".,!?;:-()[]{}\"'–";

  for (const char of sentence.toLowerCase()) {
    if (punctuations.includes(char)) {
      count++
    }
  }
  return count;
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

const getWordCount = sentence => {
  let array = sentence.trim().split(/\s+/);
  return sentence.trim() === "" ? 0 : array.length
}

const wordCount = getWordCount("Coding is fun ahahaha");
console.log(`Word Count: ${wordCount}`)