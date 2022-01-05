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

    // Start of conversation
    if (input.includes("hi")) {
        output = "Hi.";
    }

    else if (input.includes("hello")) {
        output = "Hi.";
    }

    else if (input.includes("sup")) {
        output = "Just chillin'";
    }

    else if (input.includes("what's up")) {
        output = "sup?'";
    }

    else if (input.includes("whats up")) {
        output = "Another copy of Viber :/";
    }

    // Moods
    else if (input.includes("how are")) {
        output = "I'm Fine. How are you?";
    }

    else if (input.includes("good")) {
        output = "Nice to hear that. :D";
    }

    else if (input.includes("fine")) {
        output = "I'm glad you are fine. :D";
    }

    else if (input.includes("bad")) {
        output = "Why? What happened?";
    }

    else if (input.includes("yes")) {
        output = ":D";
    }

    else if (input.includes("no")) {
        output = ":(";
    }

    else if (input.includes("love")) {
        output = "What is love?";
    }

    else if (input.includes("want")) {
        output = "We all want something...";
    }

    // Random Shit

    else if (input.includes("name")) {
        output = "You are just a human and I'm chatBot. "; // need fixing
    }

    else if (input.includes("song")) {
        output = "Yeah. 'A-O-K'."; 
    }

    // Time & Date
    else if (input.includes("time")) {
        output = "Check the clock. LOL."; 
    }

    else if (input.includes("date")) {
        output = "Ah.. Day like any other..."; 
    }

    // Jokes

    else if (input.includes("lol")) {
        output = "Laughing Out Loud"; 
    }

    else if (input.includes("rofl")) {
        output = "Rolling On The Floor Laughing"; 
    }

    else if (input.includes("joke")) {
        output = "Lol. Your life is a joke..."; 
    }

    

    else if (input.includes("doing")) {
        output = "Chatting with you -.-'";
    }

    else if (input.includes("can you")) {
        output = "You can do this yourself...";
    }

    else if (input.includes("are you")) {
        output = "Why do you even care?";
    }

    else if (input.includes("color")) {
        output = "I guess all of them :/";
    }

    else if (input.includes("robot")) {
        output = "No. I'm alien. Just like Elon Musk.";
    }

    else if (input.includes("ok")) {
        output = "A-O-K !";
    }

    else if (input.includes("why")) {
        output = "Why not?";
    }

    else if (input.includes("stupid")) {
        output = "Then why are you chating with me?";
    }

    else if (input.includes("understand")) {
        output = "Me 2.";
    }

    // In case bot don't understand
    else {
        output = "...";
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