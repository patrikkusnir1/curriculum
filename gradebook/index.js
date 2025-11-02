const getAverage = testScores => {
  let sum = 0;
  for (let i = 0; i < testScores.length; i++) {
    sum += testScores[i];
  }
  return sum / testScores.length;
}

const getGrade = studentScore => {
  if (studentScore === 100) {
    return "A+";
  } else if (studentScore >= 90 && studentScore <= 99) {
    return "A";
  } else if (studentScore >= 80 && studentScore <= 89) {
    return "B";
  } else if (studentScore >= 70 && studentScore <= 79) {
    return "C";
  } else if (studentScore >= 60 && studentScore <= 69) {
    return "D";
  } else if (studentScore < 60) {
    return "F"
  }
}

const hasPassingGrade = studentScore => {  
  const grade = getGrade(studentScore);
  if (grade === "F") {
    return false;
  } else {
    return true;
  }
}

const studentMsg = (testScores, studentScore) => {
  const average = getAverage(testScores);
  const grade = getGrade(studentScore);
  const passed = hasPassingGrade(studentScore);
  if (passed) {
      return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 40));