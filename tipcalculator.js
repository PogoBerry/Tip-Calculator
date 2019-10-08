// A function to calculate the tip
function calculateTip() {
    var billAmount = document.getElementById ("billAmount").value;

    var serviceQuality = document.getElementById("serviceQuality").value;

    var peopleAmount = document.getElementById("peopleAmount").value;

    // Validates the user's input
    if (billAmount === "" || serviceQuality == 0) {
        alert ("Please input your bill amount and the quality of your service.");
        return;

    } // if

    //Checks to see if number of people is empty or less than or equal to 1
    if (peopleAmount === "" || peopleAmount <= 1) {
        peopleAmount = 1;
        document.getElementById ("each").style.display = "none";
    
    } // if
    
    else {
        document.getElementById("each").style.display = "block";

    } // else

    // Calculates the tip
    var total = (billAmount * serviceQuality) / peopleAmount;
    
    // Rounds the total to two decimal places
    total = Math.round (total * 100) / 100;

    /* The toFixed function formats the total such that there are always two
    digits after the decimal point
    */
    total = total.toFixed (2);

    // Displays the tip to the HTML document
    document.getElementById ("totalTip").style.display = "block";
    document.getElementById ("tip").innerHTML = total;

} // calculateTip

// Hides the tip amount upon loading 
document.getElementById ("totalTip").style.display = "none";
document.getElementById ("each").style.display = "none";

/* When a user clicks the 'Calculate' button, the calculateTip function
is called */
document.getElementById ("calculate").onclick = function () {
    calculateTip ();
};
