import React, { useContext }  from 'react';
import LibraryContext from '../context/libraryContext';

const Book = () => {
    //useContext hook
    const context = useContext(LibraryContext);
    return(
        <React.Fragment>
            <p>
                Hi, I am a book inside the bookshelf. My information is coming from the context!{" "}
            </p>
            {/** Book Information */}
            <p>Book Name: {context.state.name}</p>
            <p>Book Quantity: {context.state.quantity}</p>
            <p>Book Shelf: {context.state.shelf}</p>
            <div>
                <button className="btn btn-primary" onClick={context.incrementQuantity}>
                    Increment{" "}
                </button>
                <button className="ml-2 btn btn-warning" onClick={context.resetQuantity}>
                    Reset{" "}
                </button>
            </div>
        </React.Fragment>
    )
}

export default Book;