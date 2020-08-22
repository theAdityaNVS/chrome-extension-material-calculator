let displayValue = "";

document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', event => {
        selectInput(item.value);
    });
});


function selectInput(choice) {
    // document.calci.display.value = document.calci.display.value + choice;
    let calciDisplay = document.getElementById("display");
    displayValue = calciDisplay.value + choice;
    calciDisplay.setAttribute("value", displayValue);
    console.log(choice);
}

// function equals() {
// //    let data = document.calci.display.value;
//     let calciDisplay = document.getElementsByClassName("calci-display");
//     let data =  calciDisplay.value;
//    if(data){
//        calciDisplay.setAttribute("value", eval(data));
//     //    document.calci.display.value = eval(data);
//    } 
// }

// function clearDisplay() {
//     // document.calci.display.value = "";
//     let calciDisplay = document.getElementsByClassName("calci-display");
//     calciDisplay.setAttribute("value", "");
// }

// function deleteInput() {
//     // let prevData = document.calci.display.value;
//     let calciDisplay = document.getElementsByClassName("calci-display");
//     let prevData = calciDisplay.value;
//     calciDisplay.setAttribute("value", prevData.substring(0, prevData.length -1));
// }