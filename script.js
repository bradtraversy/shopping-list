function replaceFirstItem() {
  const firstItem = document.querySelector('li');

  const li = document.createElement('li');
  li.textContent = 'Replaced First';

  firstItem.replaceWith(li);
}
replaceFirstItem();

function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');

  secondItem.outerHTML = '<li>Replaced</li>';
}
replaceSecondItem();

function replaceAll() {
  const all = document.querySelectorAll('li');

  all.forEach((value, index) => value.outerHTML = index === 1 ? '<li>hello</li>' : '<li>hi</li>');
}
replaceAll();

function replaceHeaderTag() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('header h1');

  const h2 = document.createElement('h2');
  h2.textContent = 'Shopping List';
  h2.id = 'hi'
  
  header.replaceChild(h2, h1);
}
replaceHeaderTag();