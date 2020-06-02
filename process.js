process.stdout.write("Hello");

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

const ask = (i=0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
};

ask();
const asnwers = [];

process.stdin.on('data', data => {
    asnwers.push(data.toString().trim());

    if (asnwers.length < questions.length) {
        ask(asnwers.length);
    } else {
        process.exit();
    }
});

process.on('exit', () => {
    const[name, activity, lang] = asnwers;
    console.log(`
    
    Thank you for your answers.
    Go ${activity} ${name} you can write ${lang} code later!
    
    `);
});