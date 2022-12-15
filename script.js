// elementi nella lista
const listItems = ['lattuga', 'uova', 'pane', 'latte'];
const listElement = document.getElementById('shopping--list')



// while
let i = 0;
while(i < listItems.length){

    const item = document.createElement('li');
    item.append(shoppingList[i]);
    listElement.appendChild (item);
    i++;
}

console.log(listItems);