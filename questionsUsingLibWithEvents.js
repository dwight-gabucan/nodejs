const collectAnswers = require("./lib/collectAnswersWithEvent");

const questions = [
    "What is your name please? ",
    "Where do you live? ",
    "What are you going to do with nodejs? "
];

const answerEvents = collectAnswers(questions);

answerEvents.on("answer", answer => 
    console.log(`question answered: ${answer}`)
);

answerEvents.on("complete", answers => {
     console.log("Thank you for your answers ");
     console.log(answers);
});

answerEvents.on("complete", () => process.exit()); 