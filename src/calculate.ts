export function calculate(input: string): number {
  const items = input.match(/\d*\.?\d+|[+\-*/]/g);

  if (!items) {
    // should throw an error?
    console.log("no input");
    return 0;
  }

  const stack: number[] = [];
  let currentOperator = "+";

  for (let item of items) {
    if (["+", "-", "*", "/"].includes(item)) {
      currentOperator = item;
    } else {
      let num = parseFloat(item);

      switch (currentOperator) {
        case "+":
          stack.push(num);
          break;
        case "-":
          stack.push(-num);
          break;
        case "*":
          // should check for undefined before performing operation
          stack.push(stack.pop()! * num);
          break;
        case "/":
          // should check for undefined before performing operation
          stack.push(stack.pop()! / num);
          break;
        default:
          break;
      }
    }
  }

  return stack.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}
