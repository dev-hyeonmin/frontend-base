import { RootState } from "..";
import { localesType } from "../../constants/common";


import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface LocalesState {
    locale: string;
}

const initialState: LocalesState = {
    locale: localesType.KO
}

export const localesSlice = createSlice({
    name: 'locales',
    initialState,
    reducers: {
        changeCurrentLocale: (state, action) => {
            state.locale = action.payload;
        }
    }
})

export const { changeCurrentLocale } = localesSlice.actions;
export const selectLocale = (state: RootState) => state.locales.locale;

export default localesSlice.reducer;