function selectInput(choice) {
    document.calci.display.value = document.calci.display.value + choice;
}

function equals() {
   let data = document.calci.display.value;
   if(data){
       document.calci.display.value = eval(data);
   } 
}

function clearDisplay() {
    document.calci.display.value = "";
}

function deleteInput() {
    let prevData = document.calci.display.value;
    document.calci.display.value = prevData.substring(0, prevData.length -1);
}