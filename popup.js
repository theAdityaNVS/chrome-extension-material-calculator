let equalsBtn = document.querySelector(".equal-btn");
let cancelBtn = document.querySelector(".c-btn");
let deleteBtn = document.querySelector(".del-btn");
let displayValue = "";
let audio = new Audio('click.wav');

document.querySelectorAll('.inp-btn').forEach(item => {
    item.addEventListener('click', event => {
        selectInput(item.value);
    });
});

document.addEventListener('keydown',(key)=>{
    if (key.code === "Digit0" || key.code === "Numpad0") {
        selectInput("0");
    } else if (key.code === "Digit1" || key.code === "Numpad1") {
        selectInput("1");
    } else if (key.code === "Digit2"|| key.code === "Numpad2") {
        selectInput("2");
    } else if (key.code === "Digit3"|| key.code === "Numpad3") {
        selectInput("3");
    } else if (key.code === "Digit4"|| key.code === "Numpad4") {
        selectInput("4");
    } else if (key.code === "Digit5"|| key.code === "Numpad5") {
        selectInput("5");
    } else if (key.code === "Digit6"|| key.code === "Numpad6") {
        selectInput("6");
    } else if (key.code === "Digit7"|| key.code === "Numpad7") {
        selectInput("7");
    } else if (key.code === "Digit8"|| key.code === "Numpad8") {
        selectInput("8");
    } else if (key.code === "Digit9"|| key.code === "Numpad9") {
        selectInput("9");
    } else if (key.code === "NumpadMultiply") {
        selectInput("*");
    } else if ( key.code === "NumpadDivide") {
        selectInput("/");
    } else if ( key.code === "NumpadAdd") {
        selectInput("+");
    } else if ( key.code === "NumpadSubtract") {
        selectInput("-");
    } else if ( key.code === "NumpadEnter" || key.code === "Enter" ) {
        equals();
    } else if (key.code === "Backspace") {
        deleteInput();
    } else {
        console.log("not a valid input")
    }
})


equalsBtn.addEventListener("click", function() {equals()});
cancelBtn.addEventListener("click", function() {clearDisplay()});
deleteBtn.addEventListener("click", function() {deleteInput()});

function selectInput(choice) {
  audio.pause()
  audio.play()
    let calciDisplay = document.getElementById("display");
    displayValue = calciDisplay.value + choice;
    calciDisplay.setAttribute("value", displayValue);
}

function equals() {
    let calciDisplay = document.getElementById("display");
    let data =  calciDisplay.value;
    if(data){
        let ans = evaluate(data).toFixed(0);
        calciDisplay.setAttribute("value", ans);
    } 
}

function clearDisplay() {
    let calciDisplay = document.getElementById("display");
    calciDisplay.setAttribute("value", "");
}

function deleteInput() {
    let calciDisplay = document.getElementById("display");
    let prevData = calciDisplay.value;
    calciDisplay.setAttribute("value", prevData.substring(0, prevData.length -1));
}

function evaluate(dataInput) {
    function splitFunction(dataInput) {
      var index = 0;
      var splitArray = dataInput.split("").reduce((arr, v, i) => {
        if (isNaN(parseInt(v))) {
          arr.push(dataInput.slice(index, i));
          arr.push(v);
          index = i + 1;
        }
        return arr;
      }, []);
      splitArray.push(dataInput.slice(index));
      return splitArray;
    }
  
    function findOperator(arr, o) {
      return arr.findIndex(i => i == o);
    }
  
    function arithmetic(o, a, b) {
      var arithmeticObject = {
        "*": a * b,
        "/": a / b,
        "+": +a + +b,
        "-": a - b
      };
      return arithmeticObject[o];
    }
  
    function compute(arr, o) {
      var index = findOperator(arr, o);
      arr[index] = arithmetic(o, arr[index - 1], arr[index + 1]);
      return arr.filter((c, i) => {
        return i !== index - 1 && i !== index + 1;
      });
    }
    function containsOperators(arr) {
      return arr.some(i => i === "*" || i === "/" || i === "+" || i === "-");
    }
  
    function simplify(arr) {
      while (containsOperators(arr)) {
        if (arr.includes("*") && arr.includes("/")) {
          if (findOperator(arr, "/") < findOperator(arr, "*")) {
            arr = compute(arr, "/");
          } else {
            arr = compute(arr, "*");
          }
        } else if (arr.includes("*")) {
          arr = compute(arr, "*");
        } else if (arr.includes("/")) {
          arr = compute(arr, "/");
        } else if (arr.includes("+") && arr.includes("-")) {
          if (findOperator(arr, "-") < findOperator(arr, "+")) {
            arr = compute(arr, "-");
          } else {
            arr = compute(arr, "+");
          }
        } else if (arr.includes("+")) {
          arr = compute(arr, "+");
        } else {
          arr = compute(arr, "-");
        }
      }
      return arr;
    }
  
    var arithmeticArray = splitFunction(dataInput);
    return parseInt(simplify(arithmeticArray));
  }