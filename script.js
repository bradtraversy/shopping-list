const clearBtn = document.querySelector('#clear');

// clearBtn.onclick = function () {
//   alert('Clear Items');
// }
function onClear() {
  const items = document.querySelector('ul');
  const itemList = document.querySelectorAll('li');
 // items.innerHTML = '';

  while (items.firstChild) {
    items.removeChild(items.firstChild);
  }
}

//addEventListener()
//clearBtn.addEventListener('click', () =>alert('clear items'));
clearBtn.addEventListener('click', onClear);

// setTimeout(()=>clearBtn.removeEventListener('click',onClear()),5000)

// setTimeout(() => clearBtn.click(), 5000);