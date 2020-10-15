import React, {useContext} from 'react'
import { BookContext } from '../context/BookContext'
import BookDetails from './BookDetails'

export default function BookList() {
    const {books} = useContext(BookContext) // destructer what you want from the useContext hook
    return books.length ? (
       <div className='book-list'>
             <ul>
           {books.map(book => {
               return ( <BookDetails book={book} key={book.id} />)
           })}
           </ul>
       </div> 
     
    ) : (
        <div className='empty'>No books to read. Hello free time :)</div>
    )
}


