import './App.css'
import { BookList } from './components/BookList';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { initialBooks } from './variables';

export function App() {
  return (
    <>
    <Header/>         
    <main> 
        <h4>Welcome to your Vite + React project!</h4>
        <BookList books={initialBooks}/>
    </main>
    <Footer />
    </>
  )
}

