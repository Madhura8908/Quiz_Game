const quiz = [
    {
        category:"HTML",
        question: "Which of the following HTML Elements is used for making any text bold ?",
        choices: ["<p>","<i>","<li>","<b>"],
        answer: "<b>",
    },
    {
        category:"HTML",
        question: "How many heading tags are there in HTML5?", 
        choices: ["2","3","5","6"],
        answer: "6",
    },
    {
        category:"HTML",
        question: "Which of the following attributes is used to add link to any element?",
        choices: ["link","ref","href","newref"],
        answer: "href",
    },{
        category:"HTML",
        question: "What is the purpose of using div tags in HTML?",
        choices: ["For creating Different styles", "For creating different sectons.","For adding headings.","For adding titles."],
        answer: "For creating different sections.",
     },
     {
        category:"HTML",
        question: "Which of the following tags is used to make a portion of text italic in HTML?",
        choices: ["<italic>", "<style=“i”>","<i>","<style=“italic”>"],
        answer: "<i>",
    },{
        category:"HTML",
        question: "Which of the following tags is used to add a line-break in HTML?",
        choices: ["<br>", "<beak>","</break>","</br>"],
        answer: "</br>",
    },{
        category:"HTML",
        question: "Which of the following attributes is used to open an hyperlink in new tab?",
        choices: ["tab", "href","target","ref"],
        answer: "target",
    },{
        category:"HTML",
        question: "Which among the following is correct HTML code for making a checkbox?",
      choices: ["<checkbox>", "<input type='checkox'>","<check>","<input type='check'>"],
        answer: "<input type='checkbox'>",
    },{
        category:"HTML",
        question: "Which tag is used for creating a drop-down selection list?",
        choices: ["<select>", "<opion>","<dropdown>","<list>"],
        answer: "<select>",
    },{
        category:"HTML",
        question: "Which of the following elements can be used in HTML to create a table?",
      choices: ["<table> , <tbody> , <trow>", "<table> , <tb> , <row>","<table> , <tbody> , <tr>","All of the above"],
        answer: "<table> , <tbody> , <tr>",
    }
    ,
    {
        category:"CSS",
        question: "Which of the below is the abbreviation of CSS ?",
       choices:["Cascade sheets style", "Color and style seets","Cascading style sheets","Coded Style Sheet"],
        answer: "Cascading style sheets",
    },{
        category:"CSS",
        question: "Which of the following is the correct syntax to add the external stylesheet in CSS?",
       choices:["<style src = quiz.css>", "<style src = 'quiz.ss'>","<stylesheet> quiz.css </stylesheet>","<link rel='stylesheet' type='quiz/css' href='quiz.css'>"],
        answer: "<link rel='stylesheet' type='quiz/css' href='quiz.css'>",
    },{
        category:"CSS",
        question: "Which of the below CSS class is used to change the text color of CSS ?",
       choices:["background-color", "olor","color-background","textcolor"],
        answer: "color",
    },{
        category:"CSS",
        question: "Which of the below CSS properties represent the order of flex items in the grid container ?",
       choices:["order", "loat","overflow","All of the above"],
        answer: "order",
    },{
        category:"CSS",
        question: "How do we set the default width of the font in CSS ?",
       choices:["font-stretch", "font-wight","text-transform","font-variant"],
        answer: "font-stretch",
    },{
        category:"CSS",
        question: "Which of the below CSS property is used to set the origin of the background image in bootstraps ?",
       choices:["background-image", "background-oigin","background-size","background-fix"],
        answer: "background-origin",
    },{
        category:"CSS",
        question: "Which below CSS property best describes how an image or video fits into a container?",
       choices:["object-fit", "objectmove","position-hide","All of the above"],
        answer: "object-fit",
    },{
        category:"CSS",
        question: "Which below function in CSS is used to perform the calculation ?",
       choices:["cal() function", "calculator() funtion","calculate() function","calc() function"],
        answer: "calc() function",
    },{
        category:"CSS",
        question: "Which property in CSS is responsible for setting the difference between two lines ?",
       choices:["min-height property", "max-height proerty","line-height property","None of the above"],
        answer: "line-height property",
    },{
        category:"CSS",
        question: "Which element is used to represent the transparency of an element in CSS ?",
       choices:["Hover", "Opcity","Transparent","Overlay"],
        answer: "Opacity",
    },
    {
        category:"JavaScript",
        question: "Inside which HTML element do we put the JavaScript?",
       choices:["<javascript>", "<js>","<src>","<script>"],
        answer: "<script>",
    },{
        category:"JavaScript",
        question: "Where is the correct place to insert a JavaScript?",
     choices:["Both the head section and the body section are correct", "The head setion","The body section","None of the above"],
        answer: "Both the head section and the body section are correct",
    },{
        category:"JavaScript",
        question: "Is it necessary for the external script file to contain a <script> tag?",
     choices:["Yes","No","Depends on the type of include","None of the above"],
        answer: "No",
    },{
        category:"JavaScript",
        question: "What is the correct precedence of the operator in javascript",
     choices:["() [] . ++", "++ . ] ()",". ++ [] ()","() ++ . ["],
        answer: "() [] . ++",
    },{
        category:"JavaScript",
        question: "What will be the output of the following code snippet let gfg = ”GeeksforGeeks” console.log(gfg.charAt(4))",
     choices:[  "o", "f","k","s"],
        answer: "s",
    },{
        category:"JavaScript",
        question: "What will be the output of the following code snippet let gfg=”GeeksforGeeks” console.log(gfg.indexOf(‘G’))",
    choices:[ "8", "0","-1","2"],
        answer: "0",
    },{
        category:"JavaScript",
        question: "Which of the following represent falsy values in javascript",
     choices:["false", "' \'","undefined","All of the above"],
        answer: "All of the above",
    },{
        category:"JavaScript",
        question: "Which of the following represent truthy values in javascript",
     choices:["true" ,"{}","[]","All of the above"],
        answer: "All of the above",
    },{
        category:"JavaScript",
        question: "What will be the output of the following code snippet let data='false'; data?console.log('first statement'):console.log('second statement');",
     choices:["first statement", "Second statment","Cant say","None of the above"],
        answer: "first statement",
    },{
        category:"JavaScript",
        question: "What is the type of variable data declared below const data=[ ]?",
     choices:["Number", "Oject","String","None of the above"],
        answer: "Object",
    },
    {
        category:"React",
        question: "Which of the following command is used to create react-js-app ?",
       choices:["npx create-react-app appname", "npm install create-reac-app","npx install create-react-app -g","install - l create-react-app"],
        answer: "npx create-react-app appname",
    },{
        category:"React",
        question: "In React.js which one of the following is used to create a class for Inheritance ?",
       choices:["Create", "Exends","Inherits","Delete"],
        answer: "Extends",
    },{
        category:"React",
        question: "What is the default port number in which the application run ?",
       choices:["3000", "8080","5000","3030"],
        answer: "3000",
    },{
        category:"React",
        question: "Which of the following valid component return type of React ?",
       choices:["2", "5","1","3"],
        answer: "1",
    },{
        category:"React",
        question: "Which of the following is a way to handle data in React.js ?",
       choices:["State & Props", "Services & Compoents","State & Services","State & Component"],
        answer: "State & Props",
    },{
        category:"React",
        question: "Which of the following is must for the API in React.js ?",
       choices:["SetinitialComponent", "renderCompnent","render","All of the above"],
        answer: "renderComponent",
    },{
        category:"React",
        question: "Which of the following is true regarding Babel ?",
       choices:["Compiler", "Transilar","Both of the above","None of the above"],
        answer: "Both of the above",
    },{
        category:"React",
        question: "In React.js, how we can pass the data from one component to another in React.js ?",
       choices:["SetState", "Render with arguents","Props","PropTypes"],
        answer: "Props",
    },{
        category:"React",
        question: "Which of the following method is true about referring parent class in React.js ?",
       choices:["self()", "inherts()","this()","super()"],
        answer: "super()",
    },{
        category:"React",
        question: "Which of the following is used to render components in web pages ?",
       choices:["DOM_render()", "rener()","ReactDOM_render()","transfer()"],
        answer: "render()",
    }
];



const start=document.querySelector('#start');
const startbox=document.querySelector('.startbox');
const questionbox=document.querySelector('.questionbox');

let Name='';
let namebox=[];
function getName(event){
if(document.getElementById('name').value==''){ return displayAlert('Enter Your name') }
Name= document.getElementById('name').value;
document.getElementById('name').value='';
event.preventDefault();
namebox.push(Name);
ShowName();
}

function ShowName(){
    document.getElementById('GetName').innerHTML='';
        let nameDiv =document.getElementById('GetName');
        nameDiv.innerHTML=` ${Name} wel-come to Quiz Game `;
        document.getElementById('GetName').appendChild(nameDiv);
        
}

start.addEventListener('click',()=>{
    startbox.style.display="none";
    questionbox.style.display="block";
    startQuiz();

});
let selectedCategory = "";
const subjects=document.querySelectorAll(".Subject");
subjects.forEach((subject) => {
    subject.addEventListener("click", () => {
        document.querySelector(".Subject.active")?.classList.remove("active");
        subject.classList.add("active");
        selectedCategory = subject.id;
        subjects.forEach(sub => sub.classList.remove("select"));
        subject.classList.add("select");
    });
});


const question = document.getElementById("question");
const choices = document.getElementById("choices");
const answerElement = document.querySelectorAll(".answer");
const submit = document.getElementById("submit");
const scoreCard =document.querySelector('.scorecard');
const alert=document.querySelector('.alert');
const timer=document.querySelector('.timer');


let currentQuestion=0;
let score=0;
let quizOver = false;


const showQuestions = () => {
    if (currentQuestion >= filteredQuestions.length) {
        showScore();
        return;
    }

    const QuestionObject = filteredQuestions[currentQuestion];
    question.textContent = QuestionObject.question;
    choices.innerHTML = ""; // Clear previous choices

    QuestionObject.choices.forEach(choice => {
        const choiceDiv = document.createElement("div");
        choiceDiv.textContent = choice;
        choiceDiv.classList.add("option");
        choices.appendChild(choiceDiv);

        choiceDiv.addEventListener("click", () => {
            document.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
            choiceDiv.classList.add("selected");
        });
    });

    startTimer(); // Start timer for the question
};


const checkAns = () => {
    const selectedChoice = document.querySelector(".option.selected");

    if (!selectedChoice) {
        displayAlert("Please select an answer!");
        return;
    }

    clearInterval(timerInterval); // Stop timer after answer selection

    if (selectedChoice.textContent === filteredQuestions[currentQuestion].answer) {
        displayAlert("Correct Answer!");
        score++;
    } else {
        displayAlert(`Wrong! The correct answer is: ${filteredQuestions[currentQuestion].answer}`);
    }

    time = 15;
    currentQuestion++;

    if (currentQuestion < filteredQuestions.length) {
        showQuestions();
    } else {
        stopTimer();
        showScore();
    }
};



const showScore=()=>{
    question.textContent = "";
    choices.textContent = "";
    scoreCard.textContent=`You Scored ${score} out of 10!`;
    displayAlert('You have completed this Quiz');
    submit.textContent="Play Again";
    quizOver = true;
    timer.style.display = "none";
}
const displayAlert=(msg)=>{
    alert.style.display="block";
    alert.textContent=msg;
    setTimeout(()=>{
        alert.style.display="none";
    },2000)
}
let time = 15;
let timerInterval;

const startTimer = () => {
    clearInterval(timerInterval); // Clear any previous timer
    time = 15; // Reset time
    timer.textContent = time; // Display initial time

    timerInterval = setInterval(() => {
        time--;
        timer.textContent = time;

        if (time <= 0) {
            clearInterval(timerInterval);
            displayAlert("Time's up! Moving to the next question...");
            currentQuestion++;

            if (currentQuestion < filteredQuestions.length) {
                showQuestions();
            } else {
                stopTimer();
                showScore();
            }
        }
    }, 1000);
};
const stopTimer = () => {
    clearInterval(timerInterval);
    timer.textContent = "Time Up!";
};

const startQuiz = () => {
    if (!selectedCategory) {
        displayAlert("Please select a subject!");
        return;
    }

    filteredQuestions = quiz.filter(q => q.category === selectedCategory);
    
    if (filteredQuestions.length === 0) {
        displayAlert("No questions found for this category.");
        return;
    }

    time = 15;
    currentQuestion = 0;
    score = 0;
    quizOver = false;
    timer.style.display = "flex";

    showQuestions();
};


submit.addEventListener("click", () => {
    if (quizOver) {
        submit.textContent = "Submit";
        scoreCard.textContent = "";
        selectedCategory = ""; // Reset category
        currentQuestion = 0;
        quizOver = false;
        score = 0;
        startbox.style.display = "block";
        questionbox.style.display = "none";
        return;
    }

    checkAns();
});


