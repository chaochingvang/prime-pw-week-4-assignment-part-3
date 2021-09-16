console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function isFull(){
  if (basket.length < maxItems){
    return false;
  }
  else {
    return true;
  }
}

// FROM FEEDBACK: conditionals always returns boolean value, so there's no need to check
//                that boolean value and then return another boolean.
//                the function below works exactly the same as the above.
//
//  function isFull(){
//    return basket.length >= maxItems;
//  }         //returns true if basket.length is greater than maxItems, else returns false
//



function addItem(item){
  if (isFull() === false){
    basket.push(item);
    if (basket[basket.length-1] === item){    //unnecessary
      return true;
    } //end if item added
  } //end if basket full
  return false;
}

function removeItem(item){
  if(basket.indexOf(item) >= 0){    //if item exists
    basket.splice(basket.indexOf(item), 1);   //remove 1 item at found item's index
    return item;
  }
  else{
    return null;
  }
}

function listItems(){
  for (let item of basket)
    console.log(item);
}

function empty(){
  basket = [];
  return basket;
}




console.log(`Basket should currently be empty: ${basket}`);
console.log('Adding apples to basket:', addItem('apples'));
console.log(`Basket now has: ${basket}`);
console.log('Now adding bananas to basket:', addItem('bananas'));
console.log(`Basket now has: ${basket}`);
console.log('Adding sandwiches to basket', addItem('sandwiches'));
console.log('Adding carrot to basket', addItem('carrot'));
console.log('Adding napkins to basket', addItem('napkins'));
console.log('Adding camera to basket', addItem('camera'));
console.log('List items in basket:', listItems());
console.log('Item removed from basket:', removeItem('carrot'));
console.log('List items in basket:', listItems());
console.log('Removing elephant from basket:', removeItem('elephant'));
console.log('List items in basket:', listItems());
console.log('Now adding camera to basket:', addItem('camera'));
console.log('List items in basket:', listItems());
console.log('Emptied basket:', empty());
console.log('List items in basket:', listItems());
