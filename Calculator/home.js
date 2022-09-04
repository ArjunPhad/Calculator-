(function () {

  let screens = Document.querySelector('.screens');
  let Buttons = Document.querySelectorAll('.btn');
  let clear = Document.querySelector('.btn-clear');
  let equal = Document.querySelector('.btn-equal');

  buttons.forEach(function (Button) {
  button.addEventListener('click', function (e) {
  let value = e.target.dataset.num;
  screens.value += value;
    })
  });
})(); 