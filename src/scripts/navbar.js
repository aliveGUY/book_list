const nav = document.querySelectorAll('.Navigation-item');
const addbook = document.querySelector('.add-book');
const booklist = document.querySelector('.book-list');
const contact = document.querySelector('.contact');

nav.forEach((item) => {
  item.onclick = () => {
    switch (item.firstElementChild.innerHTML) {
      case 'List':
        booklist.style.display = 'block';
        addbook.style.display = 'none';
        contact.style.display = 'none';
        break;
      case 'Add new':
        addbook.style.display = 'flex';
        booklist.style.display = 'none';
        contact.style.display = 'none';
        break;
      case 'Contant':
        contact.style.display = 'block';
        booklist.style.display = 'none';
        addbook.style.display = 'none';
        break;
      default:
        booklist.style.display = 'block';
        addbook.style.display = 'none';
        contact.style.display = 'none';
        break;
    }
  };
});
