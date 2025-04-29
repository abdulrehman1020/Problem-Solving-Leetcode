var evalRPN = function(tokens) {
    let stack = [];
    for (const ex of tokens) {
        if (ex === "+" || ex === "-" || ex === "*" || ex === "/") {
            const second = stack.pop();
            const first = stack.pop();
            let val;
            switch (ex) {
                case "+":
                    val = first + second;
                    break;
                case "-":
                    val = first - second;
                    break;
                case "*":
                    val = first * second;
                    break;
                case "/":
                    val = Math.trunc(first / second); // Truncate toward zero
                    break;
            }
            stack.push(val);
        } else {
            stack.push(Number(ex)); // Convert string to number
        }
    }
    return stack.pop();
};