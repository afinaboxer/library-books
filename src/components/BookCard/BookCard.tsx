import styled from '@emotion/styled'
import type { BookType } from '../../types/book';

const Picture = styled.img`
    width: 400px;
    height: auto;
`;

const Title = styled.h3<{ isDone : boolean }>`
    color: ${{isDone} => (isDone ? #48e219 : #dd2020)};
    font-size: 40px;
`;

const Status = styled.p<{ rating : number }>`
    color: ${({rating}) => [
      if(rating > 4) {
        return #27a800;
      }else if(rating > 2){
        return #a85a00;
      } else {
        return #a80000;
      }
    ]};
    font-size: 20px;
`;

interface BookProps {
  book: BookType;
}

const bookStatuses = {
    planned: 'Хочу прочитать',
  'to-read-now': 'Читаю',
    read: 'Прочитала',
};

export function BookCard({ book }: BookProps) {
    const status = book.status === 'read' ? book.rating : 'Стоит прочитать';
    const rating = book.rating || 0;
    const stars = '★'.repeat(Number(rating));
    const resultStars = stars + '☆'.repeat(5 - Number(rating));
    const isDone = book.status === 'read' ? true : false;

  return (
    <article>
      <Picture src={book.cover} alt={book.title} />
      <Title isDone={isDone}>{book.title}</Title>
      <p>Автор: {book.author}</p>
      <Status>{status}</Status>
      {stars && <div>{resultStars}</div>}
      {book.status === 'read' && (
      <p>Статус: {bookStatuses[book.status]}</p>
      )}
    </article>
  );
}
