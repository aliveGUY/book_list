import Methods from './book.js';

const form = document.forms[0];
const button = form.elements.add;
const dltBtn = document.querySelectorAll('.Delete-btn');
const book = new Methods();

form.addEventListener('input', (e) => {
  book[e.target.id] = form.elements[e.target.id].value;
  button.onclick = () => {
    book.upload();
  };
});

dltBtn.forEach((btn) => {
  btn.onclick = (e) => {
    book.id = e.target.parentNode.id;
    book.delete();
  };
});
