import React from 'react';

import Book from './book';

const BookShelf = () => {
    return(
        <React.Fragment>
            <p>
                I am inside the bookshelf component{" "}
            </p>
            <Book />
        </React.Fragment>
    )
}

export default BookShelf;