let main; // making whole div for restart game
let orgAns;     
let inpAns;
let test;
let l;
let wdth = 0;
let line;
let input;


let i;   //timer
let point;
let score;          //for score board

let quiz;
let quz;
let check;
let ans;



let prevAns;
let prevAnsParent;
let skip;
let timer;
let totalTime;
let root;
let r;   //random




//  for question & answers

let easy =[{
    question : "Which one is the smallest ocean in the World ?",
    answer : "Arctic"
  },
  {
    question : "In which ocean 'Bermuda Triangle' is located ?",
    answer : "Atlantic"
  },
  {
    question: "Which one is the largest tropical rain forest in the world ?",
    answer: "Amazon"
  },
  {
    question: "Exterior part of something ?",
    answer: "Outside"
  },
  {
    question: "Something difficult to deal with ?",
    answer: "Problem"
  },
  {
    question: "Large, elevated mass of land ?",
    answer: "Mountain"
  },
  {
    question: "Accomplishment of goal ?",
    answer: "Success"
  },
  {
    question: "Shaping one's mouth to indicate amusement ?",
    answer: "Smiling"
  },
  {
    question: "Act of finding something new  ?",
    answer: "Discovery"
  },
  {
    question: "One who buys things ?",
    answer: "Consumer"
  },
  {
    question: "Period when a person is below the age of maturity ?",
    answer: "Childhood"
  },
  {
    question: "Person who works for another for wages ?",
    answer: "Employee"
  },
  {
    question: "To make ready for use ?",
    answer: "Install"
  },
  {
    question: "To create ?",
    answer: "Produce"
  },
  {
    question: "To demonstrate against ?",
    answer: "Protest"
  },
  {
    question: "Action of accepting something as satisfactory ?",
    answer: "Approval"
  },
  {
    question: "Improvement of a condition ?",
    answer: "Progress"
  },
  {
    question: "Displayed or shown on a small scale ?",
    answer: "Miniature"
  },
  {
    question: "To say somthing in return ?",
    answer: "Respond"
  },
  {
    question: "Of great importance ?",
    answer: "Central"
  },
  {
    question: "To draw in ?",
    answer: "Attract"
  },
  {
    question: "Ability of act freely ?",
    answer: "Freedom"
  },
  {
    question: "To emphasise ?",
    answer: "Highlight"
  },
  {
    question: "Unable to do something without assistance ?",
    answer: "Helpless"
  },
  {
    question: "Period of time encompassing 100 years ?",
    answer: "Century"
  },
  {
    question: "Commercial business ?",
    answer: "Company"
  },
  {
    question: "Steps taken to accomplish a result ?",
    answer: "Process"
  },
  {
    question: "Payment someone receives during retirement ?",
    answer: "Pension"
  },
  {
    question: "Person held in confinement for a crime ?",
    answer: "Prisoner"
  },
  {
    question: "Answer to a problem ?",
    answer: "Solution"
  },
  {
    question: "Unfamiliar person ?",
    answer: "Stranger"
  },
  {
    question: "To perform surgery on ?",
    answer: "Operate"
  },
  {
    question: "Someone who talkes out loud, especially to a group ?",
    answer: "Speaker"
  },
  {
    question: "To throw away ?",
    answer: "Discard"
  },
  {
    question: "Illustration to explain something ?",
    answer: "Example"
  },
  {
    question: "Becoming overwhelmed with water ?",
    answer: "Flooding"
  },
  {
    question: "Female child ?",
    answer: "Daughter"
  },
  {
    question: "Full of self assurance ?",
    answer: "Confident"
  },
  {
    question: "Absence of light ?",
    answer: "Darkness"
  },
  {
    question: "Visual represantaion of something ?",
    answer: "Picture"
  },
  {
    question: "Unsafe ?",
    answer: "Dangerous"
  },
  {
    question: "Movement or a way of moving ?",
    answer: "Motion"
  },
  {
    question: "One of the parts inside your body that have a particular function ?",
    answer: "Organ"
   }
  // {
  //   question: " ?",
  //   answer: ""
  // },
];

let hard = [

  {
    question: "To make Less visible ?",
    answer: "Obscure"
  },
  {
    question: "Raised surface on which people stand ?",
    answer: "Platform"
  },
  {
    question: "Act of asking for information ?",
    answer: "Inquiry"
  },
  {
    question: "To behave reciprocally ?",
    answer: "Interact"
  },
  {
    question: "Decision with complete agreement ?",
    answer: "Unanimous"
  },
  {
    question: "Part after whole ?",
    answer: "portion"
  },
  {
    question: "To bring into use or cause to be known ?",
    answer: "Introduce"
  },
  {
    question: "Well known from your long association ?",
    answer: "Familiar"
  },
  {
    question: "Specialist with advanced education in a subject ?",
    answer: "Scholar"
  },
  {
    question: "To separate from others ?",
    answer: "Isolate"
  },
  {
    question: "Organisation that helps those in need ?",
    answer: "Charity"
  },
  {
    question: "Inefficient in the use of resources ?",
    answer: "Wasteful"
  },
  {
    question: "Someone who teaches ?",
    answer: "Educator"
  },
  {
    question: "Four sided pillar with pyramidal top ?",
    answer: "Obelisk"
  },
  {
    question: "Characterised by intense emotion ?",
    answer: "Fervent"
  },
  {
    question: "To give evidence in a court of law ?",
    answer: "Testify"
  },
  {
    question: "Event in which people compete ?",
    answer: "Contest"
  },
  {
    question: "Constantly changing ?",
    answer: "Dynamic"
  },
  {
    question: "The world's longest stright road without any concerns is located in ",
    answer: "Saudi Arabiya"
  },
  {
    question: "Continuing indefinitely ?",
    answer: "Perpetual"
  },
  {
    question: "To make fun of ?",
    answer: "Ridicule"
  },
  {
    question: "To shine faintly ?",
    answer: "Glimmer"
  },
  {
    question: "Something that causes a reaction ?",
    answer: "Stimulus"
  },
  {
    question: "Impartial and just treatment ?",
    answer: "Fairness"
  },
  {
    question: "Extremly critical ?",
    answer: "Pivotal"
  },
  {
    question: "Something left out or exploded ?",
    answer: "Omission"
  },
  {
    question: "Someone who lives someware permenently ?",
    answer: "Resident"
  },
  {
    question: "Lacking flavour ?",
    answer: "Tasteless"
  },
  {
    question: "Loan obtained for the purchase of property ?",
    answer: "Mortage"
  },
  {
    question: "Copy of an original ?",
    answer: "Imaitation"
  },
  {
    question: "Place where weapon are stored ?",
    answer: "Arsenal"
  },
  {
    question: "To deny support for ?",
    answer: "Disavow"
  },
  {
    question: "Not fake ?",
    answer: "Geniune"
  },
  {
    question: "Causing intese interest ?",
    answer: "Exciting"
  },
  {
    question: "To praise insincerely and lavishly ?",
    answer: "Flatter"
  },
  {
    question: "Quality of being worthy of honour or respect ?",
    answer: "Dignity"
  },
  {
    question: "Done for beauty ?",
    answer: "Cosmetic"
  },
  {
    question: "The art of making figures or objects from stone ?",
    answer: "Sculpture"
  },
  // {
  //   question: " ?",
  //   answer: ""
  // },
  // {
  //   question: " ?",
  //   answer: ""
  // },
];

let quizz = easy;



let i2 = document.getElementById("dis1").innerText;


 //  Creating layouts
function start(){
  

    i = i2;
    point = 0;
  
    root = document.getElementById("root");
  

    // document.getElementsByClassName("bttn").remove();
    root.innerHTML = "";


    quiz = document.createElement("div");
    root.appendChild(quiz);
    quiz.setAttribute("id","quizt");
    quz = document.createElement("div");
    quiz.appendChild(quz);
    quz.setAttribute("id","quiz");


    check = document.createElement("div");
    root.appendChild(check);
    check.setAttribute("id","check");


    ans = document.createElement("div");
    root.appendChild(ans);
    ans.setAttribute("id","ans");


    input = document.createElement("input");
    ans.appendChild(input);
    input.setAttribute("id","getAns");
    input.setAttribute("type","text");
    input.setAttribute("onkeyup","checkLine(event)");
    line = document.getElementById("check");

    
    prevAnsParent = document.createElement("div");
    root.appendChild(prevAnsParent);
    prevAnsParent.setAttribute("id","ansParent");
    


    skip = document.createElement("button");
    root.appendChild(skip);
    skip.setAttribute("id","skip");
    skip.innerText = "Skip (-1pt)";
    skip.setAttribute("onclick","skipNext()");


    score = document.createElement("div");
    root.appendChild(score);
    score.setAttribute("id","score");
    score.innerHTML = "Score <br> "+ point;

    
    timer = document.createElement("div");
    root.appendChild(timer);
    timer.setAttribute("id","timer");
    timer.style.borderRadius = "50%";
    timer.style.height = "100px";
    timer.style.width = "100px";
    timer.style.left = "48%";


    ques();
    totalTime = setInterval(timerFunction,1000);
}



let dontRepeat = [];
 //for asking questions
function ques(){                                 
    r = Math.ceil( Math.random() * quizz.length )-1;
    if (dontRepeat.includes(r)){
      ques();
      console.log(r)
    }
    dontRepeat.push(r);
    document.getElementById("quiz").innerHTML = quizz[r].question;
    orgAns = quizz[r].answer;
    input.value = "";
    input.placeholder = "Starts with "+orgAns[0];
    line.style.width = 0+"%";
    line.style.transition = ("all 0.2s");
    console.log(orgAns);    
}



//Check every input characters
function checkLine(event){                      
    inpAns = document.getElementById("getAns").value;
    if ((inpAns != "")&&(event.which >= 65)&&(event.which <= 122)||(event.which <= 8)||(event.which = 46))
    {
        l = inpAns.length;
        test = orgAns.slice(0,l);
        if(test?.toUpperCase() == inpAns?.toUpperCase())
        {
          line.style.backgroundColor = "rgb(0, 220, 0)";
          wdth = (100 / orgAns.length) * inpAns.length;
          line.style.width = wdth+"%";
          line.style.transition = ("all 0.3s");
          if(orgAns.length == inpAns.length){
            prevAns = document.createElement("div");
            prevAnsParent.appendChild(prevAns);
            prevAns.className = "prevAns";
            prevAns.innerHTML = "<i class='fa-solid fa-check'></i> "+orgAns;
            score.innerHTML = "Score <br> "+ (++point);
            window.setTimeout(remover,10000);
            // window.setTimeout(ques,800);
            ques();11
          }
        }
        else
        {
          line.style.backgroundColor = "rgb(220, 0, 0)";
          line.style.width = 100+"%";
          line.style.transition = ("all 0.3s");
        }
    }
}



// Skip question
function skipNext(){
  if(point > 0){
    point -=  1;
  }
  prevAns = document.createElement("div");
  prevAnsParent.appendChild(prevAns);
  prevAns.className = "prevAns";
  prevAns.innerHTML = orgAns+" <i class='fa-solid fa-xmark'></i>";
  score.innerHTML = "Score <br> "+ (point);
  window.setTimeout(remover,5000);
  ques();
}

function remover(){
  prevAnsParent.firstChild.remove();
}



function timerFunction()
{
  timer.innerText = i--;
  if(i == -1){
    clearInterval(totalTime);
    quiz.remove();
    check.remove();
    ans.remove();
    skip.remove();
    score.remove();
    prevAnsParent.innerHTML = "";

    timer.style.borderRadius = "0%";
    timer.style.height = "100px";
    timer.style.width = "300px";
    timer.style.left = "43%";

    timer.innerText = "Your Score : "+point;


    let over = document.createElement("div");
    root.appendChild(over);
    over.className = "title";
    let good = document.createElement("b");
    over.appendChild(good);
    let italic = document.createElement("i");
    good.appendChild(italic);
    over.style.textAlign = "center";
    italic.innerText = (point < 11)?"NICE TRY":"GOOD GAME";
    if(point > 20){
      italic.innerText = "EXCELLENT GAME"
    }



    let again = document.createElement("button");
    again.innerHTML = "Play Again <i class='fa-solid fa-rotate-left'></i>";
    root.appendChild(again);
    again.setAttribute("id","restart");
    again.className = "bttn";
    again.setAttribute("onclick", "start()");

    let home = document.createElement("a");
    root.appendChild(home);
    home.innerHTML = "<button id='rebtn' class='bttn' style='bottom: 5%;'> <i class='fa-solid fa-house'></i> </button>";
    home.setAttribute("href","index.html");
  }
}


//time selection
function incTime(x){
  if ((x == 30)&&(Number(document.getElementById("dis1").innerText) < 300)){
    document.getElementById("dis1").innerText = Number(document.getElementById("dis1").innerText) + 30;
    i2 = document.getElementById("dis1").innerText;
  }
  else if ((x == -30)&&(Number(document.getElementById("dis1").innerText) > 30)){
    document.getElementById("dis1").innerText = Number(document.getElementById("dis1").innerText) - 30;
    i2 = document.getElementById("dis1").innerText;
  }
}


//level selection
function level(){
  if (document.getElementById("dis2").innerText == "Easy"){
    document.getElementById("dis2").innerText = "Hard";
    quizz = hard;
  }
  else if (document.getElementById("dis2").innerText == "Hard"){
    document.getElementById("dis2").innerText = "Easy";
    quizz = easy
  }
}


