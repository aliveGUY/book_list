const lsit = document.querySelector('.book-list');
const data = JSON.parse(localStorage.getItem('Data'));

if (data !== null) {
  for (let i = 0; i < data.length; i += 1) {
    const div = document.createElement('div');
    div.id = i;
    div.className = 'Book';
    const wrapper = document.createElement('div');
    wrapper.className = 'Book-wrapper';
    const h2 = document.createElement('h2');
    h2.innerHTML = data[i].title;
    h2.className = 'Book-h2';
    const h3 = document.createElement('h3');
    h3.innerHTML = data[i].Author;
    h3.className = 'Book-h3';
    const button = document.createElement('button');
    button.innerHTML = 'delete book';
    button.classList = 'Delete-btn Book-btn';
    lsit.appendChild(div);
    div.append(wrapper, button);
    wrapper.append(h2, h3);
  }
}
