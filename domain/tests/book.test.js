import {describe, it, expect, beforeEach} from '@jest/globals';
import Book from '../book.js';

describe('Book', () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350);    
  });

  it('return the correct title', () => {
    expect(myBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the correct author', () => {
    expect(myBook.getAuthor()).toBe('Horacio Quiroga');
  });

  it('return the correct number of pages', () => {
    expect(myBook.getPages()).toBe(350);
  });

  it('check title is a string', () => {
    expect(() => myBook = new Book(451, 1, 350)).toThrow();
  });

  it('check title is not empty', () => {
    expect(() => myBook = new Book('', 'Horacio Quiroga', 350)).toThrow();
  });

  it('check author is a string', () => {
    expect(() =>myBook = new Book('Cuentos de la Selva', 123, 350)).toThrow();
  });
  
  it('check page param is a number', () => {
    expect(() =>myBook = new Book('Origen','Dan Brown','n')).toThrow();
  });

  it('check pages not < 1', () => {
    expect(() =>myBook = new Book('Origen', 'Dan Brown',0)).toThrow();
  });

  it('toString()', () => {
    myBook.setWords(450);
    const result = myBook.toString();
    expect(result).toBe('Título: Cuentos de la Selva Autor: Horacio Quiroga Páginas: 350 Número de Palabras: 450');
    });

  it('return the correct words of the book', () => {
    myBook.setWords(450);
    expect(myBook.getWords()).toBe(450);
  });

  it('check words param is a number', () => {
    expect(() =>myBook.setWords('numero')).toThrow('El parámetro words debe ser un número.');
  });

  it('check author is not empty', () =>{
    const result = new Book('Cuentos de la Selva', '', 350);
    expect(result.getAuthor()).toBe('Anónimo');
  });

  it('wordsPerPage()', () => {
    myBook.setWords(7000);
    const result = myBook.wordsPerPage();
    expect(result).toBe(20);
    });
  
});
