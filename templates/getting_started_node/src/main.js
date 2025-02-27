// This is the main Node.js source code file of your actor.
// An actor is a program that takes an input and produces an output.

// For more information, see https://sdk.apify.com/
const Apify = require('apify');

Apify.main(async () => {
    console.log('Loading input')
    // Structure of input is defined in INPUT_SCHEMA.json.
    const input = await Apify.getInput();
    console.log('First number: ', input.firstNumber);
    console.log('Second number: ', input.secondNumber);

    // 👉 Complete the code so that result is
    // the sum of firstNumber and secondNumber.
    // 👇👇👇👇👇👇👇👇👇👇
    const result = null;
    // 👆👆👆👆👆👆👆👆👆👆

    console.log('The result is: ', result);

    // Structure of output is defined in .actor/actor.json
    await Apify.pushData({
        firstNumber: input.firstNumber,
        secondNumber: input.secondNumber,
        sum: result,
    })
});
