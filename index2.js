// const sayHello = () => 'Hello';
/* É igual a escrever isto: */

// function sayHellov2() {
//   return 'Hello';
// }

/* end */

// const sayHello = (name) => `Hello ${name}`;
/* isto é igual a isto */

const sayHello = name => `Hello ${name}`;

const printHello = (name) => {
  console.log(`Hello ${name}`);
};

const getSiblings = n => ({ previous: n - 1, next: n + 1 });

console.log(sayHello);
console.log(sayHello('jose'));
printHello('Carlos');
console.log(getSiblings(20));
// console.log(sayHellov2());
