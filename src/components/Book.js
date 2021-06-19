import React from 'react'
import ShelfChanger from './ShelfChanger'

export default function Book({ book , onShelfChange}) {
    const { id, title, shelf, authors, imageLinks: { thumbnail } } = book

    return (
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnail})` }}></div>
          <ShelfChanger onShelfChange={onShelfChange} shelf={shelf} bookId={id}/> 
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors && authors.length && authors.join(', ')}</div>
      </div>   
    )

}