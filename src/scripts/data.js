const form = document.forms[0];
const title = form.elements[0];
const author = form.elements[1];
const button = form.elements.add;
const dltBtn = document.querySelectorAll('.Delete-btn');
const data = JSON.parse(localStorage.getItem('Data'));

const book = { title: '', Authir: '' };
button.addEventListener('click', () => {
  const temp = Object(book);
  temp.title = title.value;
  temp.Author = author.value;
  data.push(temp);
  localStorage.setItem('Data', JSON.stringify(data));
  document.location.reload();
});

dltBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    data.splice(e.target.parentNode.id, 1);
    localStorage.setItem('Data', JSON.stringify(data));
    document.location.reload();
  });
});
export default data;
