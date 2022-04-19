const form = document.forms[0];
const button = form.elements.add;
const dltBtn = document.querySelectorAll('.Delete-btn');
let data = JSON.parse(localStorage.getItem('Data'));

if (data === null) {
  data = [];
}

const book = { title: '', Author: '' };
form.addEventListener('input', (e) => {
  const temp = Object(book);
  temp[e.target.id] = form.elements[e.target.id].value;
  button.onclick = () => {
    data.push(temp);
    localStorage.setItem('Data', JSON.stringify(data));
    document.location.reload();
  };
});

dltBtn.forEach((btn) => {
  btn.onclick = (e) => {
    data.splice(e.target.parentNode.id, 1);
    localStorage.setItem('Data', JSON.stringify(data));
    document.location.reload();
  };
});
