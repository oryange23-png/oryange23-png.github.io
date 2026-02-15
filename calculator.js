document.write(`
<style>
    table {
        border-collapse: collapse;
        margin: 20px 0;
        width: 60%;
    }
    th, td {
        border: 1px solid black;
        padding: 8px;
        text-align: center;
    }
    th {
        background-color: #f2f2f2;
    }
</style>
`);

document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

let results = [];
let keepGoing = true;

while (keepGoing) {
    let x = prompt("Enter the first number:");
    if (x === null) break;

    let operator = prompt("Enter an operator (+, -, *, /, %):");
    if (operator === null) break;

    let y = prompt("Enter the second number:");
    if (y === null) break;

    let num1 = parseFloat(x);
    let num2 = parseFloat(y);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Error: Invalid number";
    } else {
        switch (operator) {
            case "+":
                result = num1 + num2;
                results.push(result);
                break;
            case "-":
                result = num1 - num2;
                results.push(result);
                break;
            case "*":
                result = num1 * num2;
                results.push(result);
                break;
            case "/":
                if (num2 === 0) {
                    result = "Error: Division by zero";
                } else {
                    result = num1 / num2;
                    results.push(result);
                }
                break;
            case "%":
                result = num1 % num2;
                results.push(result);
                break;
            default:
                result = "Error: Invalid operator";
        }
    }

    document.write(
        "<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>"
    );

    keepGoing = confirm("Click OK to continue or Cancel to stop.");
}

document.write("</table>");

/* ===== Summary Table ===== */
if (results.length > 0) {
    let total = results.reduce((sum, val) => sum + val, 0);
    let min = Math.min(...results);
    let max = Math.max(...results);
    let avg = total / results.length;

    document.write("<h2>Summary of Valid Results</h2>");
    document.write("<table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write(
        "<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>"
    );
    document.write("</table>");
} else {
    document.write("<p>No valid results to summarize.</p>");
}
