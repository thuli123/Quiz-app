let quizData = [
    {

   question: 'JavaScript is a ____________ language.',
   a: 'Object-Based',
   b: 'Assembly-language',
   c: 'Object-Oriented',
   d: 'High-level',
   correct: 'a'
},
{

   question: 'what is popular programming language',
   a: 'java',
   b: 'c',
   c: 'php',
   d: 'javascript',
   correct:'a'



},
{
   question: 'Arrays in JavaScript are defined by which of the following statements ?',
   a:'It is an ordered list of values',
   b:'It is an ordered list of objects',
   c:'It is an ordered list of string',
   d:'It is an ordered list of functions',
   correct:'a'
  


},
{

  question:'What does HTML stand for ?',
  a: 'Hypertext Markup Language',
  b:'Cascading Style Sheet',
  c:'Json Object Notation',
  d:'Application Programming interface',
  correct:'a'


},
{
    question:'What year was JavaScript launched ?',
    a: '1995',
    b:'2019',
    c:'2018',
    d:'none of the above',
    correct:'a'
  



}


];
let answerEls = document.querySelectorAll(".answer");
let questionEl =document.getElementById("question");
let quiz =document.getElementById("quiz");

let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz(){

    deselectAnswer(); 

    let currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;





}

function getSelected() {
    


let answer = undefined;

answerEls.forEach((answerEl) => {

  if(answerEl.checked){
    answer = answerEl.id;


  }



});

   return answer; 
}

function deselectAnswer() {
    
    
    
    answerEls.forEach((answerEl) => {

        if(answerEl.checked){
          answerEl.checked = false;
      
      
        }
      
      
      
      });


    
}



submitBtn.addEventListener("click",() => {

    //check to see the answer
    let answer = getSelected();

   console.log(answer);

    if(answer){

        if(answer === quizData[currentQuiz].
            correct){


              score++;

            }

        currentQuiz++;

        if(currentQuiz < quizData.length){

            loadQuiz();
        } else{
    
              //Show result
           quiz.innerHTML = `<h2>Your correctly at ${score}/${quizData.length}question.</h2> <button onclick="location.reload()">Reload</button>`;
        }
    

 
    }
 
  

   
      

   
    

});