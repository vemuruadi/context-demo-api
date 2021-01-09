import React, { useReducer } from 'react';

import { LibraryReducer } from './libraryReducer';
import LibraryContext from './libraryContext';

const LibraryState = ( props ) => {
    //create initial state
    const initialState = {
        name: "Harry Potter 1",
        quantity: 5,
        shelf: "3A",
    }

    // useReducer hook
    const [state, dispatch] = useReducer(LibraryReducer, initialState);

    //actions to manipulate the state
    const incrementQuantity = () => {
        dispatch({
            type: "INCREMENT_QUANTITY",
        });
    }

    const resetQuantity = () => {
        dispatch({
            type: "RESET_QUANTITY",
        });
    }

    return(
        <LibraryContext.Provider 
            value={{
                state: state,
                incrementQuantity: incrementQuantity,
                resetQuantity: resetQuantity,
            }}
        >
            {props.children}
        </LibraryContext.Provider>
    );
};

export default LibraryState;
