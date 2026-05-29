const countEl = document.getElementById('count');
let count = 0;

function render() {
  countEl.textContent = count;
}

document.getElementById('inc').addEventListener('click', () => {
  count += 1;
  render();
});

document.getElementById('reset').addEventListener('click', () => {
  count = 0;
  render();
});
