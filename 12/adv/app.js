const items = [{
        name: 'books',
        price: 500
    },
    {
        name: 'fruits',
        price: 250
    },
    {
        name: 'movie',
        price: 150
    },
    {
        name: 'grocery',
        price: 200
    }
];

for (let i = 0; i < items.length; i++) {
    document.body.innerHTML += items[i].name + ' ' + items[i].price;
}

const itemNames = items.map((item) => {
    return item.name;
});

const selecItems = items.filter((item) => {
    return item.price >= 200;
});

console.table(itemNames);
console.table(selecItems);
console.log(selecItems.length);