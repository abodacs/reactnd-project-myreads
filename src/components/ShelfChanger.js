import React from 'react';

const ShelfChanger = ({onShelfChange, shelf, bookId}) =>
        <div className="book-shelf-changer book-shelf-changer-icon">
            <select defaultValue={shelf} onChange={e => onShelfChange(e.target.value, bookId)}>
                <option value="moveTo" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>

export default ShelfChanger;