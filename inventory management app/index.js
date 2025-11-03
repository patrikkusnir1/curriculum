const inventory = [];

const findProductIndex = productName => {
  const searchName = productName.toLowerCase();
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === searchName) {
      return i;
    }
  }
  return -1;
}

const addProduct = productObj => {
  let copiedObj = {...productObj}
  const searchName = copiedObj.name.toLowerCase();
  copiedObj.name = searchName;
  const productIndex = findProductIndex(searchName); 
    if (productIndex > -1) {
      inventory[productIndex].quantity += productObj.quantity;
      console.log(productObj.name.toLowerCase() + " quantity updated");
    } else {
        inventory.push(copiedObj);
        console.log(productObj.name.toLowerCase() + " added to inventory");
    }
  }

const removeProduct = (productName, productQuantity) => {
  const productIndex = findProductIndex(productName);
  if (productIndex === -1) {
    console.log(`${productName.toLowerCase()} not found`);
  }
  else {
      const quantityRemaining = inventory[productIndex].quantity - productQuantity;
      if (quantityRemaining === 0) {
        inventory.splice(inventory[productIndex], 1);
      } else if (quantityRemaining < 0) {
        console.log(
          `Not enough ${productName.toLowerCase()} available, remaining pieces: ${
            inventory[productIndex].quantity
          }`
        );
      } else {
        inventory[productIndex].quantity = quantityRemaining;
        console.log(
          `Remaining ${productName.toLowerCase()} pieces: ${quantityRemaining}`
        );
      }
  }
}
removeProduct("FLOUR", 5);


