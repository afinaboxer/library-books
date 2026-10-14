import type { BookType } from "../types/book";
import { BookCard } from "./BookCard/BookCard";

interface BookProps {
books: BookType[];
}

export function BookList({ books }: BookProps) {
    return(
        <section>
            <h2>My Book List</h2>
            <header>
                        {books.map(book => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </header>
        </section>

    );
}