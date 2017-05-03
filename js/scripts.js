

var pigLatin = function(userInput) {

  for(i = 0; i < userInput.length; i++) {

    if(userInput[i] === "a" || userInput[i] === "e" || userInput[i] === "i" || userInput[i] === "o" || userInput[i] === "u" || userInput[i] === "A" || userInput[i] === "E" || userInput[i] === "I" || userInput[i] === "O" || userInput === "U") {

      userInput = userInput.join("");
      // return userInput + "way";
      console.log(userInput);
    }
    // if(userInput[i] === "b" || userInput[i] === "c" || userInput[i] === "d" || userInput[i] === "f" || userInput[i] === "g" || userInput[i] === "h" || userInput[i] === "j" || userInput[i] === "k"                  || userInput[i] === "l" || userInput[i] === "m" || userInput[i] === "n" || userInput[i] === "p"  || userInput[i] === "q" || userInput[i] === "r" || userInput[i] === "s" || userInput[i] === "t" || userInput[i] === "v" || userInput[i] === "w"  || userInput[i] === "x" || userInput[i] === "y"
    // || userInput[i] === "z") {
    //
    // }
    }


};

////User Interface////
$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#pigWord").val();
    console.log(userInput);
    userInput = userInput.split("");

    // console.log(userInput);
    var result = pigLatin(userInput);


// userInput = userInput.join("");
      //  console.log(userInput);


    $("#result").text(userInput +"way");
  });
});
