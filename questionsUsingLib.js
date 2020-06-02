const collectAnswers = require("./lib/collectAnswers");

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with nodejs? "
];

//version 1 with callback
collectAnswers(questions, answers => {
    console.log("Thank you for your answers ");
    console.log(answers);
    process.exit();
});

//version 2 with optional answer callback
//collectAnswers(questions);