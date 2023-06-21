// const calculator = {
//     plus:function(a,b) {
//         return a+b;
//     },
//     minus:function(a,b) {
//         return a-b;
//     },
//     multiply:function(a,b) {
//         return a*b;
//     },
//     divide:function(a,b) {
//         return a/b;
//     },
//     square:function(a,b) {
//         return a**b;
//     }
// }

// calculator.plus(5,2);
// calculator.minus(5,2);
// calculator.multiply(5,2);
// calculator.divide(5,2);
// calculator.square(5,2);

// const plusResult = calculator.plus(2,3);

// const age = parseInt(prompt("How old are you?"));

// // true || true ==== true
// // false || true === true
// // true || false === true
// // false || false === false

// // true && true === true
// // false && true === false
// // true && false === false
// // false && false === false

// if(isNaN(age) || age < 0) {
//     console.log("Please write a real positive number");
// } else if (age < 18) {
//     console.log("You are too young.")
// } else if (age >=18 && age <= 50) {
//     console.log("You can drink");
// } else if (age > 50 && age <= 80) {
//     console.log("You should exercise");
// } else if (age === 100) {
//     console.log("wow you are wise");
// } else if (age > 80) {
//     console.log("You can do whatever you want.");
// }


// if((a && b) || (c && d) || (x && y)) {
    
// }


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const h1 = document.querySelector('div.hello:first-child h1');

// function handleTitleClick() {
//     h1.style.color = "blue";
// }

// h1.addEventListener('click',handleTitleClick);

// function handleWindowResize () {
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy () {
//     alert('copier!')
// }

// function handleWindowOffline () {
//     alert('SOS no WIFI');
// }

// function handleWindowOnline () {
//     alert('ALL GOOOD');
// }

// window.addEventListener('resize', handleWindowResize);
// window.addEventListener('copy',handleWindowCopy);
// window.addEventListener('offline', handleWindowOffline);
// window.addEventListener('online', handleWindowOnline);


// function handleTitleClick() {
//     const currentColor = h1.style.color;
//     let newColor;
//     if(currentColor === "blue") {
//         newColor = "tomato"
//     } else {
//         newColor = "blue"
//     }
//     h1.style.color = newColor;
// }

// h1.addEventListener('click',handleTitleClick);


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

function handleTitleClick() {
    // const clickedClass = 'clicked'
    // if(h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }
    h1.classList.toggle('clicked');
}

h1.addEventListener('click',handleTitleClick);