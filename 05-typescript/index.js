const menu = [
    {name: 'Negroni', price: 13},
    {name: 'Margarita', price: 14},
    {name: 'Old Fashioned', price: 14},
    {name: 'Martini', price: 12},
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue = [];

function addNewCocktail(newCocktail) {
    menu.push(newCocktail);
}

function placeOrder(cocktailName) {
    const order = {
        id: nextOrderId++,
        cocktail: menu.find(cocktail => cocktail.name === cocktailName),
        status: 'ordered',
    };

    cashInRegister += order.cocktail.price;
    orderQueue.push(order);

    return order;
}

function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId);
    order.status = 'completed';
    return order;
}