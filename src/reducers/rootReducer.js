const initialState = {
    counter: 599
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            return {
                counter: state.counter + 1
            }
    }
    return state
}