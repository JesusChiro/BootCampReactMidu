console.log("Hola Mundo");

let firstname = "Jesus"
const lastName = 4
var isDeveloper = true

const list = []
const anotherList = list.concat(157)

const persona = {
    name: 'Miguel',
    twitter: '@chiroque1993',
    age: 18,
    isDeveloper: true,
    links: ['https://github.com', 'https://google.com']
}
const field = 'twitter'
console.log(persona.name);
console.log(persona.links[0]);
console.log(persona[field]);

const sumar = (a, b) => {
    console.log(a);
    console.log(b);
    return a + b
}
const op1 = 8
const op2 = 2
console.log(sumar(op1, op2));

function sumarf(a, b) {
    return a - b
}
const op3 = 9
const op4 = 5
console.log(sumarf(op3, op4));