let initialState = {
    book: {}
}

const bookReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_BOOK':
            return {
                book: action.payload
            }
        default:
            return state;
    }
}

export default bookReducer;