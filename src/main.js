const divScreen = document.querySelector("#screen");
const btnCreateNumber = document.querySelector("#createNumber");
const btnCallNumber = document.querySelector("#callNumber");
const spanNewNumber = document.querySelector("#newNumber");
const spanQueue = document.querySelector("#queue");
let n = 0;
let queue = [];
btnCreateNumber.onclick = () => {
  n += 1;
  queue.push(n);
  spanNewNumber.innerHTML = n;
  spanQueue.innerHTML = JSON.stringify(queue);
};
btnCallNumber.onclick = () => {
  if (queue.length === 0) {
    //alert(`号码已叫完`);
    divScreen.innerHTML = `号码已叫完`;
  } else {
    let m = queue.shift();
    divScreen.innerHTML = `请${m}号就餐`;
    spanQueue.innerHTML = JSON.stringify(queue);
  }
};
