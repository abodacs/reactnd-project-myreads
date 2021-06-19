import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkToSearch() {
    return (
        <div className="open-search">
            <Link to='/search'>Add a book</Link>
        </div>
    )
}
