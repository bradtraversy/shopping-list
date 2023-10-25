//document.getElementById();
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('class'));

//set attributes
document.getElementById('app-title').id = 'new-id';
document.getElementById('new-id').title = 'new-id';
document.getElementById('new-id').setAttribute('class', 'hi');
console.log(document.getElementById('new-id'));
const title = document.getElementById('new-id');

console.log(title.innerText);
title.textContent = 'hi';
title.innerHTML = '<strong>Shopping List</strong>';
title.style.color = 'red';

console.log(document.querySelector('h1'));
console.log(document.querySelector('#new-id'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);
const secondItem = document.querySelector('li:nth-child(2)').innerText = 'Apple Juice';
const secondtem = document.querySelector('li:nth-child(2)');
secondtem.style.color = 'red';
const firstItem = document.querySelector('ul').querySelector('li:nth-child(3)');
console.log(firstItem.innerText);