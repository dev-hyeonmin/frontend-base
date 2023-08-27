export enum LocalesType {
    KO = 'ko',
    EN = 'en',
}

export interface LocalesReduxState {
    locale: string
}

// ACTIONS
export const UPDATE_LOCALE = 'locales/UPDATE'

// REDUCER
const initialState: string = LocalesType.KO;

export default function reducer(state = initialState, action: any) {
    switch (action.type) {
        case UPDATE_LOCALE:
            const newState = action.payload;
            return newState;
        default:
            return state
    }
}

// ACTION CONSTRUCTOR
export const updateLocale = (payload: LocalesReduxState) => ({ type: UPDATE_LOCALE, payload });