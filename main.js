let projectName = 'Generate-Serial-Number';
document.title = projectName;
let foot = document.querySelector('footer');
foot.innerHTML += `${projectName} Design By Ahmed Naguib <i class="fa-solid fa-copyright"></i>`;

let Serial = document.querySelector('.Serial-Number');
let Generate = document.querySelector('.btn');
let SerialLength = 16;
let randomSerial = [];

(localStorage.getItem('Serial')) ?  randomSerial = JSON.parse(localStorage.getItem('Serial')) : null;
(localStorage.getItem('Serial')) ?  Serial.innerHTML = `Serial Number : ${randomSerial}` : null;

Generate.addEventListener('click' , ()=>{ 
    randomSerial = [];
    let GenerateSerialNumbers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'; 
    for(let i = 1; i <= SerialLength; i++){
    randomSerial.push(GenerateSerialNumbers[Math.floor(Math.random() * GenerateSerialNumbers.length)]);  
    if(i % 4 == 0 && i != SerialLength) randomSerial[i] = '-';
    }
    Serial.innerHTML = `Serial Number : ${randomSerial.join('')}`;  
    AddToLocal(randomSerial.join(''));
});

let AddToLocal = (data) => localStorage.setItem("Serial", JSON.stringify(data));