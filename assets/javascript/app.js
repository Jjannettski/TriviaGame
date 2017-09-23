
//Sets the timer to 30 seconds
var timer = 30;

var newTime;

function run() {
      newTime = setInterval(decrement, 1000);
    }

//  The decrement function.
    function decrement() {
      //  Decrease number by one.
      timer--;
      //  Show the number in the #show-number tag.
      $("#clock").html("<h2>" + "Time Remaining:" + " " + timer + " " + "Seconds" + "</h2>");
      //  Once number hits zero...
      if (timer === 0) {

      	stopTimer();
        printResults();
        

      }
    }

    //function that stops the time

    function stopTimer(){

    	clearInterval(newTime);

    }

    run();


//printing the questions and assigning values to them


   var q = {
   	question: "What did the Earth do in 1910 that caused unnecessary fear for many people around the world?",
   	answers: ["Passed through a comet tail", "Reversed its magnetic poles", "Nearly missed an asteroid", "Got hit by a solar flare"],
   	correctIndex: 0
   }

   var q2 = {
   	question: "The planets make up what percentage of the mass in our solar system?",
   	answers: ["1.35%", "13.5%", "0.0135%", "0.135%"],
    correctIndex: 7
   }

   var q3 = {
   	question: "What are the only two planets in our solar system without moons?",
   	answers: ["Mercury & Venus", "Venus & Mars", "Uranus & Neptune", "Neptune & Pluto"],
   	correctIndex: 8
   }

    var q4 = {
   	question: "What year boasted the first woman in space?",
   	answers: ["1968", "1973", "1963", "1983"],
   	correctIndex: 14
   }


   $("#question").html("<h2>" + q.question + "</h2>");
   $("#question-two").html("<h2>" + q2.question + "</h2>");
   $("#question-three").html("<h2>" + q3.question + "</h2>");
   $("#question-four").html("<h2>" + q4.question + "</h2>");



   for (var i = 0; i < 4; i++) {

   		$("#answers").append("<input type='radio' name='trivia' class='answer' id='answer-"+ i +"'data-answer-index=" + i + ">" + q.answers[i])
   		$("#answers-two").append("<input type='radio' name='trivia-two' class='answer' id='answer-"+ i +"'data-answer-index=" + (i + 4) + ">" + q2.answers[i])
   		$("#answers-three").append("<input type='radio' name='trivia-three' class='answer' id='answer-"+ i +"'data-answer-index=" + (i + 8) + ">" + q3.answers[i])
   		$("#answers-four").append("<input type='radio' name='trivia-four' class='answer' id='answer-"+ i +"'data-answer-index=" + (i + 12) + ">" + q4.answers[i])

   };




  var correctNumber = 0;
  var incorrectNumber = 0;
  var storedInputOne;
  var storedInputTwo;
  var storedInputThree;
  var storedInputFour;


 $("body").on("click", ".answer", function(){


  var userInputOne = $("input[name='trivia']:checked").data("answerIndex");
  storedInputOne = userInputOne;

  var userInputTwo = $("input[name='trivia-two']:checked").data("answerIndex");
  storedInputTwo = userInputTwo;

  var userInputThree = $("input[name='trivia-three']:checked").data("answerIndex");
  storedInputThree = userInputThree;

  var userInputFour = $("input[name='trivia-four']:checked").data("answerIndex");
  storedInputFour = userInputFour;

  console.log ($("input[name='trivia']:checked").val());
  console.log ($("input[name='trivia-two']:checked").val());
  console.log ($("input[name='trivia-three']:checked").val());
  console.log ($("input[name='trivia-four']:checked").val());

   });  


 function printResults(){


if(storedInputOne === q.correctIndex){
  correctNumber++;
}else{
  incorrectNumber++;
}

if(storedInputTwo === q2.correctIndex){
  correctNumber++;
}else{
  incorrectNumber++;
}
if(storedInputThree === q3.correctIndex){
  correctNumber++;
}else{
  incorrectNumber++;
}
if(storedInputFour === q4.correctIndex){
  correctNumber++;
}else{
  incorrectNumber++;
}


// AWREGEARDFHSRTGHNBTGDFB
        var statsBank = $("<div>");
        var statsHeading = $("<h2>").text("Here Are Your Results:");

        statsBank.append(statsHeading);
        $("#end-stats").prepend(statsBank);

       
        var resultsDiv = $("<div>");
        var p = $("<p>").text("Number of Correct Answers:" + correctNumber);
        var p2 = $("<p>").text("Number of Incorrect Answers:" + incorrectNumber);

        resultsDiv.append(p);
        resultsDiv.append(p2);
        $("#results").prepend(resultsDiv);

 }