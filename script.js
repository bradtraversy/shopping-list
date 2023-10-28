const logo = document.querySelector('img');

const onClick = () => console.log('click event');
const onRightClick = () => console.log('right click event');
const onMouseDown = () => console.log('mouse down event');
const onMouseup = () => console.log('mouse up event');
const onMouseWheel = () => console.log('mouse wheel event');
const onMouseover = () => console.log('mouse over event');
const onMouseout = () => console.log('mouse out event');
const onDragStart = () => console.log('Drag start event');
const onDrag = () => console.log('Drag event');
const onDragEnd = () => console.log('Drag end event');
const onDoubleClick = () => {
  if (document.body.style.backgroundColor != 'purple') {
    document.body.style.backgroundColor = 'purple';
  }
  else {
    document.body.style.backgroundColor = 'white';
  }
}
//Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseup);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseover);
logo.addEventListener('mouseout', onMouseout);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);