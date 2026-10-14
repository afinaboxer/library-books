//@ts-ignore
import type { BookType } from './types/book';
import type { UserType } from './types/user'
import { initialBooks } from './variables';

export function greet(person: UserType, book: BookType){
    return `Меня зовут ${person.name}, Мне ${person.age} лет. Я прочитала ${book.title}`; 
}

export function calculateTotal (price: number, count: number) : string{
    return `Ваш результат ${price * count}`;
}

function getCompletedBook(initialBooks: BookType[]): BookType[]{
  let result: BookType[] = [];
  for (let i = 0; i < initialBooks.length; i++) {
    const book = initialBooks[i];
    if (book.status === 'read') {
      console.log(book.title);
      result.push(book);
    }
  }
  return result;
}

getCompletedBook(initialBooks);


