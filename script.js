const questions =[
    {
        question: "which is largest animal in the world?",
        answers:[
            {text:"shark",correct:true},
            {text:"billa",correct:false},
            {text:"cheeta",correct:false},
            {text:"bander",correct:false},

        ]
        
    },
    {
        question: "which is largest animal in the world?",
        answers:[
            {text:"shark",correct:false},
            {text:"billa",correct:true},
            {text:"cheeta",correct:false},
            {text:"bander",correct:false},

        ]
    },
    {
        question: "which is largest animal in the world?",
        answers:[
            {text:"shark",correct:false},
            {text:"billa",correct:false},
            {text:"cheeta",correct:true},
            {text:"bander",correct:false},

        ]
    },
    {
        question: "Which animal can fly without wings?",
        answers:[
            {text:"shark",correct:false},
            {text:"billa",correct:false},
            {text:"Eagle",correct:false},
            {text:"Bat ",correct:true},

        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButtton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButtton.innerHTML="Next";
    showQuestion();

}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". "+currentQuestion.question;
    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}
function resetState(){
    nextButtton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);

    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct ");
        score++;

    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButtton.style.display ="block";

}
function showscore(){
    resetState();
    questionElement.innerHTML = `you secore ${score} out of ${questions.length}!`;
    nextButtton.innerHTML = "play again";
    nextButtton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
        showQuestion();

    }
    showscore();
}
nextButtton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();

