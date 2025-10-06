function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultsDiv = document.getElementById("results");

  if (isNaN(num1) || isNaN(num2)) {
    resultsDiv.innerHTML = "<p>Please enter valid numbers.</p>";
    return;
  }

  const add = num1 + num2;
  const subtract = num1 - num2;
  const multiply = num1 * num2;
  const divide = num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero";
  const modulus = num2 !== 0 ? num1 % num2 : "Undefined";

  const square1 = num1 ** 2;
  const square2 = num2 ** 2;

  const root1 = num1 >= 0 ? Math.sqrt(num1).toFixed(2) : "NaN";
  const root2 = num2 >= 0 ? Math.sqrt(num2).toFixed(2) : "NaN";

  const factorial = (n) => {
    if (n < 0 || !Number.isInteger(n)) return "Undefined";
    return n === 0 ? 1 : Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a * b, 1);
  };

  const fact1 = factorial(num1);
  const fact2 = factorial(num2);

  resultsDiv.innerHTML = `
    <p><strong>Addition:</strong> ${add}</p>
    <p><strong>Subtraction:</strong> ${subtract}</p>
    <p><strong>Multiplication:</strong> ${multiply}</p>
    <p><strong>Division:</strong> ${divide}</p>
    <p><strong>Modulus:</strong> ${modulus}</p>
    <p><strong>Square of ${num1}:</strong> ${square1}</p>
    <p><strong>Square of ${num2}:</strong> ${square2}</p>
    <p><strong>Square Root of ${num1}:</strong> ${root1}</p>
    <p><strong>Square Root of ${num2}:</strong> ${root2}</p>
    <p><strong>Factorial of ${num1}:</strong> ${fact1}</p>
    <p><strong>Factorial of ${num2}:</strong> ${fact2}</p>
  `;
}