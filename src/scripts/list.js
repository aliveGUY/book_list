const lsit = document.querySelector('.book-list');
const data = JSON.parse(localStorage.getItem('Data'));

if (data !== null) {
  for (let i = 0; i < data.length; i += 1) {
    const div = document.createElement('div');
    div.id = i;
    const h2 = document.createElement('h2');
    h2.innerHTML = data[i].title;
    const h3 = document.createElement('h3');
    h3.innerHTML = data[i].Author;
    const hr = document.createElement('hr');
    const button = document.createElement('button');
    button.innerHTML = 'delete book';
    button.className = 'Delete-btn';
    lsit.appendChild(div);
    div.append(h2, h3, button, hr);
  }
}
