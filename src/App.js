import React from 'react';
import { BookContextProvider } from './context/BookContext';
import { Navbar } from './components/Navbar';
import { BookList } from './components/BookList';
import { NewBookForm } from './components/BookForm';

export default function App() {
  return (
    <div className="App">
    <BookContextProvider>
       <Navbar />
       <BookList />
       <NewBookForm />
    </BookContextProvider>
    </div>
  );
}
