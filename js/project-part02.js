
// Global variables and global array.
let enteredNameArray = [];
let table;
let form;
let totalNames;
let enteredName;


// This function insures the user is entering a name and not a number
// or empty string. This also includes the necessary logic to give value
// to the form and the .push property to place the name into the array.
function testForNameEntry() {
    "use strict";
    
    enteredName = form.name.value;
    
    if (isNumeric(enteredName) || enteredName === "") {
        alert("Sorry, please enter a name!");
        return;
        
    }
    
    enteredNameArray.push(enteredName);


}

// This function holds the loop for the entries of names within the array. 
// Within the for loop there is innerHTML to display the entered names
// in the output.
function loopForNameArray() {
    "use strict";
    
    for (let index = 0; index < enteredNameArray.length; index++) {
        table.innerHTML += "<tr>" + enteredNameArray[index] + "</tr>";
    }

}


// This controller function holds values for the form, table, and totalNames
// variables as well as the additional HTML logic. 
function part02() { 
    "use strict";
    
    form = document.getElementById("formId");
    table = document.getElementById("myTable");
    totalNames = document.getElementById("totalNamesId");

    testForNameEntry();

    table.innerHTML = "<tr><th>Entered Names<th><tr>";
    
    totalNames.innerHTML = "Total Names: " + enteredNameArray.length;

    loopForNameArray();

    
}
