const menu = [
    {name: 'Negroni', price: 13},
    {name: 'Margarita', price: 14},
    {name: 'Old Fashioned', price: 14},
    {name: 'Martini', price: 12},
];

const cashInRegister = 100;
const orderQueue = [];

function addNewCocktail(newCocktail) {
    menu.push(newCocktail);
}