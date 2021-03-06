import Student, { server, sayHI } from "./module1.js";

let std1 = new Student("Indal Kumar", 20, 99);

document.body.innerHTML += `
    <h1>${std1.name}</h1>
    <h2>${std1.age}</h2>
    <h2>${std1.marks}</h2>
`;

console.log(std1);
console.log(server);
sayHI();
