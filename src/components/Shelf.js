import React from 'react'
import Book from "./Book";

export default function Shelf(props) {
    const { title, books, onShelfChange } = props

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books && books.length && books.map(book => (
                        <li key={book.id}>
                            <Book book={book} onShelfChange={onShelfChange}/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}