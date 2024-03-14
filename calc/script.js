function addNumbers() {
 
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    // Check if the input is a valid number
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }

    // Calculate 
    var result = num1 + num2;
    document.getElementById("result").textContent = result;

    // Change the color of the button to green
    var calculateButton = document.getElementById("calculateButton");
    calculateButton.style.backgroundColor = "green";


    displayGreeting();
}

function displayGreeting() {
   
    var currentTime = new Date();
    var currentHour = currentTime.getHours();

    var greetingMessage = "";

    if (currentHour < 12) {
        greetingMessage = "Good morning!";
    } else if (currentHour < 18) {
        greetingMessage = "Good afternoon!";
    } else if (currentHour < 20){
        greetingMessage = "Good evening!";
    } else{
        greetingMessage = "Good night!";
    }

    alert(greetingMessage);
}