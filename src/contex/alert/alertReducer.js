import {HIDE_ALERT, SHOW_ALERT} from '../types'

const handles = {
    [SHOW_ALERT]: (state, action) => action.payload,
    [HIDE_ALERT]: () => null,
    DEFAULT: state => state
}

export const alertReducer = (state, action) => {
    const handle = handles[action.type] || handles.DEFAULT
    return handle(state, action)
}
