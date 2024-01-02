
// Global variables and global array.
let uniqueZipCodeArray = [];
let index;
let zipCode;
let output;

// This function contains the logic to determine if a zip code is unique or not.
// This logic is the "brains" of the program. 
function discoverUniqueZipCode(zipCode) {
    "use strict";
    
    if (uniqueZipCodeArray.length === 0) {
        return true; 
    }
    for (index = 0; index < uniqueZipCodeArray.length; index++) {
        if (uniqueZipCodeArray[index] === zipCode) {
            return false;
        }

    }
    return true;


}

// This function contains the logic to display the identified unique zip codes
// in an ordered list. 
function displayOutput() {
    "use strict";
    
    output = document.getElementById("zipCodeOutput");
    output.innerHTML = "";
    for (index = 0; index < uniqueZipCodeArray.length; index++) {
        output.innerHTML += "<li>" + uniqueZipCodeArray[index] + "</li>";
    }
}

// This is the controller function that holds the records loop, 
// unique zip function, push property, and display function.
function part01() {
    "use strict";
    
    let records;

    records = openZipCodeStudyRecordSet();

    while (records.readNextRecord()) {
        zipCode = records.getSampleZipCode();
        if (discoverUniqueZipCode(zipCode)) {
            uniqueZipCodeArray.push(zipCode);
            

        }

    }

    displayOutput();

}