const screenText = document.getElementById("screen-text");
const btnAllClear = document.getElementById('all-clear');
const btnPosNeg = document.getElementById("pos-neg");
const btnPercent = document.getElementById("percent");
const btnDivide = document.getElementById("divide");
const btnSeven = document.getElementById("seven");
const btnEight = document.getElementById("eight");
const btnNine = document.getElementById("nine");
const btnMultiply = document.getElementById("multiply");
const btnFour = document.getElementById("four");
const btnFive = document.getElementById("five");
const btnSix = document.getElementById("six");
const btnSubtract = document.getElementById("subtract");
const btnOne = document.getElementById("one");
const btnTwo = document.getElementById("two");
const btnThree = document.getElementById("three");
const btnAdd = document.getElementById("add");
const btnZero = document.getElementById("zero");
const btnDecimal = document.getElementById("decimal");
const btnEquals = document.getElementById("equals");

const numBtns = document.querySelectorAll(".num")
const operatorBtn = document.querySelectorAll(".operator");

const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	return nums.reduce((a, b) => a + b, 0);
};

const multiply = function(a, b) {
  return a * b;
};

const divide = function(a, b) {
    return a / b;
}

let a = "";
let operator = "";
let b = "";



const defaultScreen = () => {
    screenText.innerText = "000000000000"
    screenText.style.opacity = "0.2";
    btnDecimal.disabled = false;
}

defaultScreen();

btnDecimal.addEventListener("click", () => {
    if(operator === "") {
        a += ".";
        screenText.innerText = a;
    }else{
        b += ".";
        screenText.innerText = b;
    }
    console.log(a);
    btnDecimal.disabled = true;

})

btnAllClear.addEventListener("click", () => {
    a = "";
    operator = "";
    b = "";
    defaultScreen();
})

numBtns.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (operator === ""){
            a += Number(event.target.innerText);
            console.log(Number(a));
            screenText.style.opacity = "1";
            screenText.innerText = a;
        } else {
            b += Number(event.target.innerText);
            console.log(Number(b));
            screenText.style.opacity = "1";
            screenText.innerText = b;
        }
    })
});

operatorBtn.forEach((button)=> {
    button.addEventListener("click", (event) => {
        screenText.innerText = "";
        btnDecimal.disabled = false;
        operator = event.target.innerText;
        console.log(operator)
    })
})

btnEquals.addEventListener("click", operate);

function operate() {
    let result;
    operandA = Number(a);
    operandB = Number(b);

    if (operator === "/" && (operandB  === 0)) { 
        console.log("zero division ERROR")
        screenText.innerText = "ERROR";
        a = "";
        b = "";
        operator = "";
        return;
    }

    console.log(operandA, operator, operandB)

    switch (operator) {
        case "+":
            result = add(operandA , operandB);
            break;
        case "-":
            result = subtract(operandA , operandB);
            break;
        case "x":
            result = multiply(operandA , operandB);
            break;
        case "÷":
            result = divide(operandA , operandB);
            break;
        default:
            result = "ERROR";
    }
    screenText.innerText = Number.isInteger(result) ?result : result.toFixed(2);
    a = result;
    b = "";
    //operator = "";

    console.log(a, operator, b)
}

