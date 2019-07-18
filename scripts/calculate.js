const addFunction = (num1,num2) =>
 console.log(num1 + num2)

addFunction(3,2)


const multFunction = (num1,num2)=>
console.log(num1 * num2)

multFunction(7,21)

const calculate = (num1, num2, funct) => {
    funct(num1,num2)
}
 
calculate(17,17,multFunction)