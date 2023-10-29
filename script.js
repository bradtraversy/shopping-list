const itemInput = document.getElementById('item-input');

const onKeyPress = e => console.log('key pressed');
const onKeyUp = e => console.log('key Up');
const onKeyDown = e => {
  //console.log(e.key);  
  //document.querySelector('h1').innerText = (document.querySelector('h1').innerText + e.key);
  // if (e.key === 'Enter') {
  //   alert('You pressed enter');
  // }
  // if (e.keyCode === 13) {
  //   alert("you pressed enter");
  // }
  // if (e.code === 'Digit1') {
  //   console.log('you pressed 1');
  // }
  if (e.repeat) {
    console.log("you are holding down " + e.key);
  }
  console.log('Shift: ' + e.shiftKey);
  console.log('Control: ' + e.ctrlKey);
  console.log('Alt: ' + e.altKey);

}

// itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keydown', onKeyDown);
// itemInput.addEventListener('keyup', onKeyUp);
