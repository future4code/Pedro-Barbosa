const insertOperator = process.argv[2];
const number1 = Number(process.argv[3]);
const number2 = Number(process.argv[4]);
let result;

switch (insertOperator) {
  case "sum":
    result = number1 + number2;
    break;
  case "sub":
    result = number1 - number2;
    break;
  case "mult":
    result = number1 * number2;
    break;
  case "div":
    result = number1 / number2;
    break;
  default:
    console.log("Operador não escontrado");
}

console.log(`Resposta: ${result}`);
