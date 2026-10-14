import styled from '@emotion/styled'
import type { BookType } from '../../types/book';

const Title = styled.h3`
    color: #cd5cd5;
    font-size: 23px;
`;

const Picture = styled.img`
    width: 400px;
    height: auto;
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

  return (
    <article>
      <Picture src={book.cover} alt={book.title} />
      <Title>{book.title}</Title>
      <p>Автор: {book.author}</p>
      <div>{status}</div>
      {stars && <div>{resultStars}</div>}
      {book.status === 'read' && (
      <p>Статус: {bookStatuses[book.status]}</p>
      )}
    </article>
  );
}
