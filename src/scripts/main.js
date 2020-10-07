'use strict';

function setData(data) {
  if (data.trim()) {
    makeGraph(
      data.split(',')
        .filter(elem => (elem.trim() !== '') && !isNaN(+elem.trim()))
    );
  }
}

function makeGraph(arr) {
  const maxValue = Math.max(...arr);
  const graphElem = document.getElementById('graph');

  graphElem.innerHTML = '';

  let elementHeight = null;
  let elementColor = null;

  arr.forEach(element => {
    elementHeight = element / maxValue;
    elementColor = Math.round(125 * (1 - elementHeight));

    graphElem.innerHTML += (
      `<div
        class="pillar"
        style="
          height: ${Math.round(elementHeight * 100)}%;
          background-color: hsl(${elementColor}, 100%, 50%)
        "
      >
        <div>${element}</div>
      </div>`
    );
  });
}

window.addEventListener('click', event => {
  if (event.target.id === 'button') {
    const inputValue = document.querySelector('#data-input').value;

    setData(inputValue);
  }
});
