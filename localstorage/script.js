// let myName = 'Kaushal';

const nameElement = document.querySelector('.name-tag');
const nameInput = document.querySelector('.name');
const ageElement = document.querySelector('.age-tag');
const ageInput = document.querySelector('.age');
// nameElement.innerText = localStorage.myName;
// nameElement.innerText = localStorage.getItem('myName');

// nameInput.addEventListener('input' , (e) =>{
//     //localStorage.myName = e.target.value;   (not good method)
//     localStorage.setItem('myName' , e.target.value);

//     //nameElement.innerText = localStorage.myName;(not good method)
//     nameElement.innerText = localStorage.getItem('myName');
// })

// ageElement.innerText = localStorage.getItem('myAge');
// ageInput.addEventListener('input' , (e) =>{
//     //localStorage.myName = e.target.value;   (not good method)
//     localStorage.setItem('myAge' , e.target.value);

//     //nameElement.innerText = localStorage.myName;(not good method)
//     ageInput.innerText = localStorage.getItem('myAge');
// })
// const myData = {
//     name: 'kaushal'
//     age : 45
// }
const myData =  JSON.parse(localStorage.getItem('myData')) || {};

if(myData.name){
    nameElement.innerText = myData.name;
}
if(myData.age){
    ageElement.innerText = myData.age;
}
nameInput.addEventListener('input' , (e) => {
    myData.name = e.target.value;
    localStorage.setItem('myData' , JSON.stringify(myData));
    nameElement.innerText = e.target.value;
});
ageInput.addEventListener('input', (e) => {
    myData.age = e.target.value;
    localStorage.setItem('myData' , JSON.stringify(myData));
    ageElement.innerText = e.target.value;
});

//nameElement.innerText = myData.name;
//ageElement.innerText = myData.age;