let equalsBtn = document.querySelector(".equal-btn");
let cancelBtn = document.querySelector(".c-btn");
let displayValue = "";

document.querySelectorAll('.inp-btn').forEach(item => {
    item.addEventListener('click', event => {
        selectInput(item.value);
    });
});

equalsBtn.addEventListener("click", function() {equals()});
cancelBtn.addEventListener("click", function() {clearDisplay()});

function selectInput(choice) {
    let calciDisplay = document.getElementById("display");
    displayValue = calciDisplay.value + choice;
    calciDisplay.setAttribute("value", displayValue);
}

function equals() {
    let calciDisplay = document.getElementById("display");
    let data =  calciDisplay.value;
    if(data){
        let ans = eval(data);
        console.log(ans);
        calciDisplay.setAttribute("value", ans);
    } 
}

function clearDisplay() {
    let calciDisplay = document.getElementById("display");
    calciDisplay.setAttribute("value", "");
}

// function deleteInput() {
//     // let prevData = document.calci.display.value;
//     let calciDisplay = document.getElementsByClassName("calci-display");
//     let prevData = calciDisplay.value;
//     calciDisplay.setAttribute("value", prevData.substring(0, prevData.length -1));
// }