let myHeading = document.querySelector('h1');
myHeading.textContent = "I'm Iron Man";

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Iron_man.jpeg') {
        myImage.setAttribute('src', 'images/Iron_man2.jpeg');
    } else {
        myImage.setAttribute('src', 'images/Iron_man.jpeg');
    }
}

function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = "I'm Iron Man," + name + "!";
}

function setUserNmae() {
    let myName = prompt("请输入您的名字");
    localStorage.setItem('name', myName);
    setHeading(myName);
}

let storedName = localStorage.getItem('name');
if(!storedName) {
    setUserNmae();
} else {
    setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserNmae;