"use strict";

var items = [{
  name: 'books',
  price: 500
}, {
  name: 'fruits',
  price: 250
}, {
  name: 'movie',
  price: 150
}, {
  name: 'grocery',
  price: 200
}];
for (var i = 0; i < items.length; i++) {
  document.body.innerHTML = items[i].name + ' ' + items[i].price;
}
var itemNames = items.map(function (item) {
  return item.name;
});
var selecItems = items.filter(function (item) {
  return item.price >= 200;
});
console.table(itemNames);
console.table(selecItems);
console.log(selecItems.length);