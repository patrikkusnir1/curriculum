let lunches = [];

const addLunchToEnd = (arr, str) => {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
} 

const addLunchToStart = (arr, str) => {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

const removeLastLunch = arr => {
  if(arr.length > 0) {
    const removedItem = arr.pop();
    console.log(`${removedItem} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return arr;
}

const removeFirstLunch = arr => {
  if (arr.length > 0) {
    const removedItem = arr.shift();
    console.log(`${removedItem} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return arr
}

const getRandomLunch = arr => {
  if (arr.length === 0) {
    console.log("No lunches available.");
  } else {
      const randomLunch = arr[Math.floor(Math.random() * arr.length) ];
      console.log(`Randomly selected lunch: ${randomLunch}`);
  }
}

const showLunchMenu = (arr) => {
  arr.length === 0 ? console.log("The menu is empty.") : console.log(`Menu items: ${arr.join(", ")}`)
}

getRandomLunch(["pizza", "pasta", "soup"])
