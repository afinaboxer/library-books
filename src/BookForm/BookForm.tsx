export default function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState<BookStatus>('want');
  const [rating, setRating] = useState('');
  const [note, setNote] = useState('');
  const [cover, setCover] = useState('');

  console.log(title, author, status, rating, note, cover);

  return (
    <form>
      <h2>Добавить книгу</h2>
      <div>
        <label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Название книги"
          />
        </label>
        <label>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
          />
        </label>
      </div>
    </form>
  );
}
