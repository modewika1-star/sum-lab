function calculate() {
     let num1 = prompt("Enter first number:");
     let num2 = prompt("Enter second number:");
     console.log("num1 =", num1, "num2 =", num2);
     let sum = Number(num1) + Number(num2);
     console.log("Sum =", sum);

     document.getElementById("console").innerHTML =
          "num1 = " + num1 + "<br>num2 = " + num2 + "<br>Sum: " + sum;
}