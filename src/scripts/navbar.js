const nav = document.querySelectorAll('.Navigation-item')
const add_book = document.querySelector('.add-book')
const book_list = document.querySelector('.book-list');
const contact = document.querySelector('.contact')

nav.forEach((item) => {
    item.onclick = (e) => {

        switch(item.firstElementChild.innerHTML) {
            case 'List':
                book_list.style.display = 'block'
                add_book.style.display = 'none';
                contact.style.display = 'none';
                break;
            case 'Add new':
                add_book.style.display = "flex";
                book_list.style.display = 'none'
                contact.style.display = 'none';
                break;
            case 'Contant':
                contact.style.display = 'block';
                book_list.style.display = 'none'
                add_book.style.display = 'none';
                break;
        }
    }
})