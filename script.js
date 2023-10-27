function removeClearButton() {
  document.querySelector('#clear').remove();
}

function removeFirst(item) {
  const parent = document.querySelector('ul');

  parent.removeChild(document.querySelectorAll(`li`)[`${item-1}`]);
  
}

const removeItem = (item) => document.querySelectorAll('li')[item-1].remove();
removeClearButton();
//removeFirst(2);
removeItem(1);