require('./ejercicio-1');










// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

// drinks = [
//   {name: "lemonade", price: 50},
//   {name: "lime", price: 10}
// ]
// The output of the sorted drinks object will be:

// Examples
// sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50},{name: "pera", price: 500}]

// const sortByPrice = (arr) => arr.sort((a, b) => a.price - b.price);

// console.log(
//   sortByPrice([
//     { name: 'lemonade', price: 50 },
//     { name: 'lime', price: 10 },
//     { name: 'pera', price: 500 },
//   ])
// );

// const separar = (objeto) => {
//   let keysOrdenados = Object.keys(objeto).sort((a, b) => a - b);
//   let values = keysOrdenados.map((el) => objeto[el]);
//   return [keysOrdenados, values];
// };
// console.log(separar({ name: 'lemonade', price: 50 }));

// const howMuchIstrue = (arr) => {
//   let count = 0;

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] == true) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(howMuchIstrue([true, false]));

// const tue = (arr) =>{
//     let count = 0;
//     for(i = 0; i <arr.length;i++){
        
//     }
// }

const boom =(arr)=>/7/.test(arr.join('')) ? console.log('baaaaaam') : console.log('jajjajjjajj');
console.log(boom([2,4,5,6,7,8,899,7,7,7,6]))