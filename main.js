const pop = new Audio("pop.mp3")

var inputed="RandomText"
var output = "TestText"




//var x = 1;
//var name = "";

function submit() {
    inputed = text.value;
    input = inputed.toLowerCase();
    text.value = ""; //Returning blank input

/*
    if (x === 1) {
        nameLogic()  // Asking for name only once
    }
*/

    logic()

    displayMytext()
   
    setTimeout(displayBotText, 3000)
    }

/*
function nameLogic() {

    
    if (input.includes("my name is")) {
        input = input.replace("my name is", "")
    }
    else if (input.includes("i am")) {
        input = input.replace("i am", "")
    }
    else if (input.includes("i'm")) {
        input = input.replace("i'm", "")
    }

    else if (input.includes("im")) {
        input = input.replace("im", "")
    }

    name = input;
    output = "Hi " + name + ". How are you?"
    x = 0;
}
*/

function logic() {
    if (input.includes("hi")) {
        output = "Hi.";
    }

    if (input.includes("hello")) {
        output = "Hi.";
    }

    if (input.includes("how are")) {
        output = "I'm Fine. How are you?";
    }

    if (input.includes("good")) {
        output = "Nice to hear that. :D";
    }

    if (input.includes("bad")) {
        output = "Why? What happened?";
    }

    if (input.includes("ok")) {
        output = "A-O-K !";
    }

    if (input.includes("name")) {
        output = "You are " + name + ", and I'm chatBot. "; // need fixing
    }

    if (input.includes("song")) {
        output = "Yeah. One of the best mood songs. :D"; 
    }

    if (input.includes("song")) {
        output = "Yeah. One of the best mood songs. :D";
    }




 


}



function displayMytext() {
    pop.play()
    var myText = document.createElement("P");
    myText.className = "myText"
    myText.innerText = inputed; // My Text (Inputed)
    document.getElementById("scroll").appendChild(myText);
    var myDiv = document.getElementById("scroll");
    myDiv.scrollTop = myDiv.scrollHeight;
}

function displayBotText() {
    pop.play()
    var botText = document.createElement("P");
    botText.className = "botText"
    botText.innerText = output; // Bot's Text
    document.getElementById("scroll").appendChild(botText);
    var myDiv = document.getElementById("scroll");
    myDiv.scrollTop = myDiv.scrollHeight;
}