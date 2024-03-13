// ADD A FUNCTION CALLED CALCULATE

function calculate() {

    // COLLECT FIRST NUMBER FROM USER
    let x = parseFloat(prompt("Enter the first number"));
    // COLLECT SECOND NUMBER FROM USER
    let y = parseFloat(prompt("Enter the second number"));
    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    let operation = prompt("Enter the operation (add, subtract, multiply, divide)");
    // CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
    
    let result;
        switch (operation) {
            case "add":
                result = x + y;
                break;
            case "subtract":
                result = x - y;
                break;
            case "multiply":
                result = x * y;
                break;
            case "divide":
                result = x / y;
                break;
            default:
                result = "Error!"
        }
    
        alert("Result: ${result}");
    
    
    do {
        operation = prompt("Enter the operation (add, subtract, multiply, divide):");
        if (!(operation === "add" || operation === "subtract" || operation === "multiply" || operation === "divide")) {
            alert("Please enter add, subtract, multiply, or divide.");
        }
    } while (!(operation === "add" || operation === "subtract" || operation === "multiply" || operation === "divide"));
    }
    
    calculate();