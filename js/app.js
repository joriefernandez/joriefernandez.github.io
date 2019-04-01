'use strict';

// Input Name

do{
  var userName = prompt('What is your name?');
  if (!userName){
    alert('Please enter a valid name!');
  }
  console.log('User entered ' + userName);

}while (!userName);


//Check name
if (userName === 'Jorie'){
  alert('Hey we\'ve got the same name!');
  console.log('Same name? Yes!');
}else if (userName === 'sam'){
  console.log('you must be my teacher');
} else{
  console.log('Welcome to the site ' + userName );
}

var greeting = 'Hi ' + userName + '. Welcome to my site!';
document.getElementById('user-profile').innerHTML = greeting;



alert('Welcome to the site ' + userName + '. Please answer Y for Yes or N for No to the questions.');

// Questions to ask
var question1 = 'Am I good singer?';
var question2 = 'Do I like foods?';
var question3 = 'Do I like hiking?';
var question4 = 'Have I visited other states?';
var question5 = 'Did I do something for the first time recently?';
var question6 = 'How many dogs I had?';
var question7 = 'What are the countries that I want to visit?';

// question array
var questions = [question1, question2, question3, question4,
  question5, question6, question7];

//Possible Answers
var noAns = ['N', 'NO'];
var yesAns = ['Y', 'YES'];
var numDogs = 4;
var placeToVisit = ['JAPAN', 'KOREA', 'ROME'];

// Answer bank
var answers = [noAns, yesAns, yesAns, yesAns, yesAns, numDogs, placeToVisit];
//score
var score = 0;
//alert for correct answer
var correctAlert = 'Your response is correct!';


//Loop through the list of questions
for (var index = 0; index < questions.length; index++){
  //message for the correct answer
  var correctAns = 'The correct answer is ' + answers[index];
  //user input
  var userAns;
  //current number of tries
  var numTry;
  //initial alert for user input
  var initMsg = 'Your answer is ';
  //maximum number of tries
  var limit;

  //Check if questions 1-5
  if(index < 5){
    //Show the yes/no prompts and validation
    promptUserYesOrNo(questions[index]);
  }

  //Numeric input for question 6
  if(index === 5){
    //set max limit
    limit = 4;

    //loop until max try
    for (numTry = 1; numTry <= limit; ++numTry){
      //Check if the user entered the correct answer
      if(promptUserNumber(questions[index])){
        score++;
        alert(correctAlert);
        break;
      }
    }

    //If user reached the max without getting the correct answer
    if(answers[index] !== userAns && numTry > limit){
      alert(correctAns + '. Better luck next time!');
    }
  }

  //Prompt for question 7
  if(index === 6){
    limit = 6;
    for(numTry = 1; numTry <= limit; numTry++){
      if(promptUserText(questions[index])){
        console.log('Try ' + numTry + ': user guessed one of the answers');
        alert(correctAlert);
        score++;
        break;
      }
    }
    //If user reached the max without getting the correct answer
    if(answers[index] !== userAns && numTry > limit){
      alert(correctAns + '. Better luck next time!');
    }
  }
}

//Show user total number of correct guesses
alert('You got ' + score + ' out of ' + answers.length +
'. \n\nThank you for playing ' + userName + '. You can now see my full portfolio!');


/*
Function to show the user yes/no  questions and validate
the input.
Input: userQuestion - question for the user
*/
function promptUserYesOrNo(userQuestion){
  //Store user answer
  userAns = prompt(userQuestion);
  console.log('User entered ' + userAns + ' for question ' +
      userQuestion );

  //validate input
  if(userAns){
    if(answers[index].includes(userAns.toUpperCase())){
      console.log('User got the right answer');
      alert('You guessed it right!');
      score++;
    } else{
      alert(correctAns + '. Incorrect response.');
    }
  }else{
    alert('Invalid response. Your answer is marked as incorrect.');
  }
}


/*
Function to show the user the number  question and validate
the input.
Input: userQuestion - question for the users
Return: flag - indicate valid answer
      true - valid input
      false - invalid input
*/
function promptUserNumber(userQuestion){
  userAns = parseInt(prompt(userQuestion));
  var flag = true;
  console.log('Try ' + numTry + ': User answered ' + userAns + ' for question ' + userQuestion);
  if(!(isNaN(userAns))){
    console.log('User entered a number');

    if(userAns > answers[index]){
      alert(initMsg + 'too high.');
      flag = false;
    } else if (userAns < answers[index]){
      alert(initMsg + 'too low.');
      flag = false;
    }
  }else{
    alert(initMsg + 'not a number.');
    flag = false;
  }
  return flag;
}



/*
Function to show the user question with possible answers and validate
the input.
Input: userQuestion - question for the users
Return: flag - indicate valid answer
      true - valid input
      false - invalid input
*/
function promptUserText(userQuestion){
  userAns = prompt(userQuestion);
  if(!answers[index].includes(userAns.toUpperCase())){
    console.log('Try ' + index + ': user entered ' + userAns);
    alert('Sorry your response is incorrect. Try again!');
    return false;
  }
  return true;
}


