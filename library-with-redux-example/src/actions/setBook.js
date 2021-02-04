const setBook = (book) => {
    return {
        type: 'SET_BOOK',
        payload: book
    }
}

export default setBook;