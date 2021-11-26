//1. query target node
const okBtn = document.querySelector('#submitOK');
console.log(okBtn);


//2. register event handler to target node
okBtn.onclick = showMessage;


//3. prepare event handler
function showMessage() {
  alert('Good bye');
}

//1. query target node
const okBtn = document.querySelector('#submitOK');
console.log(okBtn);

//2. register event handler to target node
okBtn.addEventListener('click', showMessage, false);
okBtn.removeEventListener('click', showMessage, false);

// okBtn.onclick = null;
//3. prepare event handler
function showMessage() {
  alert('Good bye');
}

//1. query target node
const okBtn = document.querySelector('#submitOK');
const divBtn = document.querySelector('#divButtonPanel');


//2. register event handler to target node
okBtn.addEventListener('click', showMessage, true);
divBtn.addEventListener(
  'click',
  () => {
    alert('div click!!');
  },
  true
);
// okBtn.onclick = null;

//3. prepare event handler
function showMessage() {
  alert('Good bye');
}