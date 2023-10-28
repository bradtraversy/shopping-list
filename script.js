
const link = document.querySelector('a');
const logo = document.querySelector('img');
function onClick(e) {
  // console.log(e.target);
  // console.log(e.currentTarget);
  // console.log(e.screenX);
  // console.log(e.screenY);
  // console.log(e.offsetX);
  // console.log(e.offsetY);
  // console.log(e.pageX);
  // console.log(e.pageY);
  // console.log(e.clientX);
  // console.log(e.clientY);
  e.preventDefault();
  console.log('prevented');
}
function onDrag(e) {
  document.querySelector('h1').innerText = `X ${e.clientX} Y ${e.clientY}`;
}
logo.addEventListener('drag', onDrag);
link.addEventListener('click', onClick);
// document.body.addEventListener('click', function (e) {
//   console.log(e.target);
//   console.log(e.currentTarget);
// })