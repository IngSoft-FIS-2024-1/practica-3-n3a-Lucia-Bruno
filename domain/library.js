import Book from './book.js';

class Library {

  #name;
  #inventory = [];
  #totalWords;
  #wordCount;

  constructor(name) {
    this.setName(name);
  }

  setName(name) {
    if (typeof (name) !== 'string') {
      throw new Error('El nombre es texto');
    }
    name = name.trim();
    if (name.length === 0) {
      throw new Error('El nombre es obligatorio');
    }
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  addBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    this.#inventory.push(newBook);
  }
 
  getInventory() {
    return this.#inventory;
  }

  totalBooks() {
    return this.#inventory.length;
  }

  totalWords() {
    this.#totalWords = 0;
    for(const books of this.#inventory){
      const countWords = books.getWords();
      this.#totalWords = this.#totalWords + countWords;
    }
    return this.#totalWords;
  }
}

export default Library;
