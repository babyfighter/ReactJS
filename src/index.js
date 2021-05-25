import React from 'react'
import ReactDom from 'react-dom'

// CSS Basics
// import/export statements
import './books'
import {books} from './books'
import SpecificBook from './Book'

function BookList(){
  return (
  <section className ='booklist'>
    {books.map((book) =>{
      const {img,title,author} = book;
      return <SpecificBook key={book.id} {...book}></SpecificBook>
    })}
  </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));