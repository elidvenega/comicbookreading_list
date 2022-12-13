import React, { createContext, useReducer, useEffect } from "react";
import { BookReducer } from "../reducers/BookReducer";

export const BookContext = createContext();

export const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : []
  });
  // Using local storage to hold information
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

