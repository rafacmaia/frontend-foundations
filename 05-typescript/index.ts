type DrinkObj = {
    name: string,
    price: number,
}

const menu = [
    {name: 'Negroni', price: 13},
    {name: 'Margarita', price: 14},
    {name: 'Old Fashioned', price: 14},
    {name: 'Martini', price: 12},
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue = [];

function addNewDrink(newDrink: DrinkObj) {
    menu.push(newDrink);
}

function placeOrder(drinkName : string) {
    DrinkObj selectedDrink = menu.find(drink => drink.name === drinkName);
    cashInRegister += selectedDrink.price;
    const order = {
        id: nextOrderId++,
        cocktail: selectedDrink,
        status: 'ordered',
    };
    orderQueue.push(order);
    return order;
}

function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId);
    order.status = 'completed';
    return order;
}

addNewCocktail({name: 'Last Word', price: 15});
addNewCocktail({name: 'Mai Tai', price: 13.5});
addNewCocktail({name: 'Pisco Sour', price: 14.5});

placeOrder('Pisco Sour');
completeOrder('1');

console.log('Menu: ', menu);
console.log('Cash in register: ', cashInRegister);
console.log('Order queue: ', orderQueue);
