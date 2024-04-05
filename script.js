document.getElementById('funButton').addEventListener('click', function() {
    const funText = document.getElementById('funText');
    funText.innerHTML = '🎉 Congratulations on taking your first step into web development with CS 140! 🎉';
});

let num1 = 79;
let num2 = 5;

let num3 = num1 * num2;
console.log("The product of " + num1 + " and " + num2 + " is " + num3);

//This is a template literal
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
console.log(`The product of ${num1} and ${num2} is ${num3}`);

let condition = num1 > num2;

if (condition) {
    console.log("This condition is true");
    console.log(`This condition is ${condition}`);
    // alert("This is true");

    //You can nest if statments inside of each other
    if (num1 % 2 == 0) {
        console.log(`${num1} is also even`);
    }

    else{
        console.log(`${num1} is also odd`);
    }
} 

else {
    console.log("This condition is false");
    console.log(`This condition is ${condition}`);
}

function sayHello()
{
    alert("Hello World!");
}

//sayHello();

function getParagraph(){
    let p = document.getElementById("funText");
    console.log(p);
}

function changeParagraph(){
    let p = document.getElementById("funText");
    console.log(p);
    p.textContent = "This paragraph was changed in JavaScript!";
}