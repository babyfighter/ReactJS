import React from 'react'
import ReactDom from 'react-dom'

// first component
// stateless functional component 
// always return JSX

// JSX function should be capitalized
// function Greeting(){
//   return (
//     <div>
//       <h1>hello world1</h1>
//     </div>
//   )
// }
// const Greeting = () => {
//   return React.createElement('div',{},React.createElement('h1',{},'hello world2'))
// }

// JSX Rules
// return single element: div/seciton/Fragment
// use caemlCase for html attribute
// className instead of class
// close every element
// formatting
//
// return single element: div/seciton/Fragment
// function Greeting(){
//   return (
//     <React.Fragment> or <> </>
//       <article>
//         <div>
//           <h1>hello people</h1>
//           <ul><li><a href="#">hello world</a></li></ul>
//         </div>
//       </article>
//     </React.Fragment>
//   )
// }
//
// className instead of class
//<div className = ''></div>

// Nested components, react tools
// function Greeting(){
//   return (
//     <div>
//       <h1>hello people</h1>
//       <Person/>
//     </div>
//   )
// }
// const Person =() => <h2>hello ss</h2>//component

// CSS Basics
// import './index.css'

// inline css
// const Author = () => <h4 style={{color: '#617d98', fontSize:'0.75rem', marginTop:'0.25rem'}}>Amelia Hepworth</h4>

// Javascript in JSX
// const author = 'Amelia Hepworth'//{} only return value
// const Book = () => {
//   const title = 'I LOVE YOU TO THE MOON AND BACK'
//   return (
//   <article className='book'>
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       <p></p>
//   </article>
//   );
// }

//set vars
// function BookList(){
//   return (
//   <section className ='booklist'>
//     <Book job='developer'/>
//     <Book number={22}/>
//   </section>
//   )
// }
// const Book = (props) => {
//   return (
//   <article className='book'>
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       <p>{props.job}</p>
//       <p>{props.number}</p>
//   </article>
//   );
// }

// set vars
// const firstBook = {
//   author :'Amelia Hepworth',
//   title : 'I LOVE YOU TO THE MOON AND BACK',
//   img : "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
// };

// function BookList(){
//   return (
//   <section className ='booklist'>
//     <Book 
//     img={firstBook.img}
//     title={firstBook.title}
//     author={firstBook.author}
//     />
//   </section>
//   )
// }
// const Book = (props) => {
//   return (
//   <article className='book'>
//       <img src={props.img} alt="" />
//       <h1>{props.title}</h1>
//       <h4>{props.author}</h4>
//   </article>
//   );
// }
// or props deconstruct
// const Book = ({img,title,author}) => {
//  // const {img,title,author} = props
//   return (
//   <article  className='book'>
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//   </article>
//   );
// }

// props-children
// function BookList(){
//   return (
//   <section className ='booklist'>
//     <Book 
//     img={firstBook.img}
//     title={firstBook.title}
//     author={firstBook.author}
//     >
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquid architecto corrupti reprehenderit consequatur ab mollitia, vel expedita quos repudiandae.</p>
//     </Book>
//   </section>
//   )
// }
// const Book = ({img,title,author, children}) => {
//   // const {img,title,author} = props
//   return (
//   <article clssName='book'>
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       {children}
//   </article>
//   );
// }

// Props List
// function BookList(){
//   return (
//   <section className ='booklist'>
//     {books.map((book) =>{
//       const {img,title,author} = book;
//       return <Book book={book}></Book>
//     })}
//   </section>
//   );
// }
// const Book = (props) => {
//   const {img,title,author} = props.book
//   return (
//   <article className='book'>
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//   </article>
//   );
// }
//
// function BookList(){
//   return (
//   <section className ='booklist'>
//     {books.map((book) =>{
//       const {img,title,author} = book;
//       return <Book key={book.id} {...book}></Book>//spread operator
//     })}
//   </section>
//   );
// }
// const Book = (props) => {
//   const {img,title,author} = props;
//   return (
//   <article className='book'>
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//   </article>
//   );
// }
// 

// React Event - SyntheticEvent
// attribute, eventHandler
// onClick, on ouseOver
// const Book = (props) => {
//   // attribute, eventHandler
//   // onClick, on ouseOver
//   const clickHandler = () =>{
//     alert('hello')
//   }
//   const {img,title,author} = props;
//   return (
//   <article className='book'>
//       <img src={img} alt="" />
//       <h1 onClick={()=>console.log(title)}>{title}</h1>
//       <h4>{author}</h4>
//       <button type='button' onClick={clickHandler}>example</button>
//   </article>
//   );
// }
// 
// const Book = ({img,title,author}) => {
//   const clickHandler = () => alert('hello')
//   const complexExample = (author)=> {
//     console.log(author)
//   }
//   return (
//   <article className='book' onMouseOver={()=>{
//     console.log(title)
//   }}>
//       <img src={img} alt="" />
//       <h1 onClick={()=>console.log(title)}>{title}</h1>
//       <h4>{author}</h4>
//       <button type='button' onClick={clickHandler}>example</button>
//       <button type='button' onClick={()=>complexExample(author)}>more complex example</button>
//   </article>
//   );
// }

// // import/export statements
// export const books = []
// import {books} from './books'
//
// import React from 'react'
// const Book = () => {
//   return(<div></div>)
// }
// export default Book//only one default per file

