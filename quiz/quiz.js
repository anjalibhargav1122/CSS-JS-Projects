const questions = [
    {
        "que": " Which of the following is a Markup Language?",
        "a": "HTML",
        "b": "CSS",
        "c": "JavaScript",
        "d": "PHP",
        "correct": "a"
    },
    {
        "que": " What does CSS Stands for?",
        "a": "Hyper Text Markup Language",
        "b": "Cascading Style Sheet",
        "c": "Jason Object Notation",
        "d": "Helicopters Terminals Motorboats Lamborginis",
        "correct": "b"
    },
    {
        "que": " Which Bootstrap class is used to create a responsive, fixed-width container with a small left margin on large screens?",
        "a": ".container-fluid",
        "b": ".container-sm",
        "c":  ".container-md",
        "d": ".container-lg",
        "correct": "d"
    },
    {
        "que": " What year was JavaScript Launched?",
        "a": "1996",
        "b": "1995",
        "c": "1994",
        "d": "none of the above",
        "correct": "b"
    },
    {
        "que": " What is the purpose of the HTML <meta> tag?",
        "a": "Define a hyperlink",
        "b": " Specify metadata about the document",
        "c": " Create a new paragraph",
        "d": " Embed multimedia content",
        "correct": "b"
    },
    {
        "que": " Which CSS property is used to set the background color of an element?",
        "a": "color",
        "b": "background-color",
        "c": "text-color",
        "d": "bgcolor",
        "correct": "b"
    },
    {
        "que": " How can you include Bootstrap in an HTML document?",
        "a": "Download and link the Bootstrap CSS file",
        "b": "Use a CDN link for Bootstrap in the '<head>' section",
        "c":  "Install Bootstrap using npm",
        "d": "All of the above",
        "correct": "d"
    },
    {
        "que": " What is the purpose of the JavaScript 'addEventListener' method?",
        "a": "To perform arithmetic operations",
        "b": "To handle events like mouse clicks or keypresses",
        "c": "To create a new HTML element",
        "d": "To define a function",
        "correct": "b"
    },
    {
        "que": " In HTML, what does the acronym 'HTML' stand for?",
        "a": "Hyper Text Markup Language",
        "b": "High-Level Text Management Language",
        "c": "Hyperlink and Text Management Language",
        "d": "High-Level Markup Language",
        "correct": "a"
    },
    {
        "que": " Which Bootstrap class is used to create a responsive navigation bar?",
        "a": ".navbar-default",
        "b": ".navbar-responsive",
        "c":  ".navbar-fixed",
        "d": ".navbar",
        "correct": "d"
    },
    {
        "que": " Which CSS selector is used to select all elements with a specific class?",
        "a": "#class",
        "b": ".class",
        "c": "class",
        "d": "element.class",
        "correct": "b"
    },
    {
        "que": " How do you declare a variable in JavaScript?",
        "a": "var x;",
        "b": "let x;",
        "c": "int x;",
        "d": "variable x;",
        "correct": "b"
    },
    {
        "que": " Which attribute is used to define the alternative text for an image in HTML?",
        "a": "alt",
        "b": "src",
        "c": "href",
        "d": "title",
        "correct": "a"
    },
    {
        "que": " What is the purpose of the Bootstrap grid system?",
        "a": "To create responsive and mobile-first layouts",
        "b": "To style text and fonts",
        "c":  "To manage server-side data",
        "d": "To create animations",
        "correct": "a"
    },
    {
        "que": " What does the CSS property 'margin: 10px 20px;' represent?",
        "a": "10 pixels top margin and 10 pixels right margin",
        "b": "10 pixels top margin and 20 pixels left margin",
        "c": "10 pixels top margin and 20 pixels right margin",
        "d": "20 pixels top margin and 20 pixels right margin",
        "correct": "c"
    },
    {
        "que": " What does the 'typeof' operator do in JavaScript?",
        "a": "Returns the data type of a variable",
        "b": "Converts a variable to a string",
        "c":  "Checks if a variable is defined",
        "d": "Rounds a number to the nearest integer",
        "correct": "a"
    },
    {
        "que": " What is the purpose of the HTML <a> tag?",
        "a": "Create a heading",
        "b": "Define a paragraph",
        "c": "Create a hyperlink",
        "d": "Embed audio content",
        "correct": "c"
    },
    {
        "que": " What is the purpose of the CSS property 'font-weight'?",
        "a": "Set the font size",
        "b": " Set the font style",
        "c": "Set the font weight (boldness)",
        "d": "Set the font color",
        "correct": "c"
    },
    {
        "que": " Which CSS framework is Bootstrap built upon?",
        "a": "Sass",
        "b": "Less",
        "c":  "CSS",
        "d": "Stylus",
        "correct": "b"
    },  
      {
        "que": " Which tag is used to define an ordered list in HTML?",
        "a": "<ul>",
        "b": "<ol>",
        "c": "<li>",
        "d": "<dl>",
        "correct": "b"
    }
];


let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;

const quesbox = document.getElementById("quesbox");
const optionInput = document.querySelectorAll(".options");




const loadque = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();

    const data = questions[index];
    console.log(data);
    quesbox.innerHTML = `${index + 1}${data.que}`;

    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;

    const prevAnswer = data.prevAnswer || '';
    optionInput.forEach((input) => {
        if (input.value === prevAnswer) {
            input.checked = true;
        }
    });
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();

    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }

    data.prevAnswer = ans;

    index++;

    loadque();
}




const getAnswer = () => {
    let answer = '';
    optionInput.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
}



const reset = () => {
    optionInput.forEach((input) => {
        input.checked = false;
    })
}


const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center ; 
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
    <h3> Thank you for playing the Quiz</h3>
    <h2>${right} / ${total} are correct</h2>
   </div> `;
}


loadque();



const nextQuestion = () => {
    if (index < total - 1) {
        index++;
        loadque();
    }
}


const previousQuestion = () => {
    if (index > 0) {
        index--;
        loadque();
    }
}