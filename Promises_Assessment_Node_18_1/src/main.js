const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function ask(question) {
  return tell(question).then((response) => [
    `Your question was: ${question}`,
    `Your fortune is: ${response}`,
  ]);
}

// Function: getFortune
// Parameters: question (string)
// Returns: Promise that resolves to a string or an error message
// TODO: Implement the getFortune function by utilizing the ask function to get the fortune for the question.
// Hint: Call the ask function with the question and extract the fortune from the response array.

function getFortune(question) {
  return ask(question)
    .then((response) => response)
    .catch((error) => `There was an error: ${error}`);
}

// Function: fullSession
// Parameters: question (string)
// Returns: Promise that resolves to an array of strings or an error message
// TODO: Create a full session by combining the welcome, and then getFortune, and then goodbye functions.
// Hint: Use promise chaining to call the functions in the correct order and concatenate the results.

function fullSession(question) {
  const emptyArr = [];
  return welcome().then((responseWelcome) => {
    emptyArr.push(responseWelcome);
    return getFortune(question).then((responseGet) => {
      if (Array.isArray(responseGet)) {
        emptyArr.push(responseGet[0]);
        emptyArr.push(responseGet[1]);
      
      } else {
        emptyArr.push(responseGet);
      }
      return goodbye().then((responseGoodbye) => {
        emptyArr.push(responseGoodbye);
        return emptyArr;
      });
    });
  });
}

// Call the welcome function.
// Chain the getFortune function to get the fortune for the question.
// Chain the goodbye function and concatenate the results with the session.
// Return a promise that resolves to the final session array or an error message.

module.exports = { getFortune, fullSession };
