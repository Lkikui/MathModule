module.exports = function (){
    return {
        add: function(num1, num2) { 
            let sum = num1 + num2;
            // num1 + num2;
            console.log(`Added. Return: ${sum}`); 
        },
        multiply: function(num1, num2) {
            let product = num1 * num2;
            console.log(`Multiplied. Return: ${product}`);
        },
        square: function(num) {
            let squaredNum = num * num;
            console.log(`Squared. Return: ${squaredNum}`); 
        },
        random: function(num1, num2) {
            let randomNum = Math.floor((Math.random() * num2)+ num1);
            console.log(`Random number between ${num1} and ${num2}: ${randomNum}`);
        }
    }
  };
  