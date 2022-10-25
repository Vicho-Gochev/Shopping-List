function shoppingList(input) {
    let groceries = input.shift().split("!");
    for (element of input) {
      element = element.split(" ");
      if (element[0] === "Urgent") {
        if (!groceries.includes(element[1])) {
          groceries.unshift(element[1]);
        }
  
        
      } else if (element[0] === "Unnecessary") {
        if (groceries.includes(element[1])) {
          let index = groceries.indexOf(element[1]);
          let firstPart = groceries.slice(0, index);
          let secondPart = groceries.slice(index + 1);
          groceries = firstPart.concat(secondPart);
        }
      } else if (element[0] === "Correct") {
        if (groceries.includes(element[1])) {
          let index = groceries.indexOf(element[1]);
          let newElement = element[2];
          let firstPart = groceries.slice(0, index);
          let secondPart = groceries.slice(index + 1);
          let g  = firstPart.concat(newElement)
          groceries = g.concat(secondPart)
        }
      } else if (element[0] === "Rearrange") {
        if (groceries.includes(element[1])) {
          let index = groceries.indexOf(element[1]);
          let firstPart = groceries.slice(0, index);
          let secondPart = groceries.slice(index + 1);
          groceries = firstPart.concat(secondPart);
          groceries.push(element[1]);
        }
      }
    }
    console.log(groceries.join(", "));
  }