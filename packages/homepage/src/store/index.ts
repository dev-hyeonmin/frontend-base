import { configureStore } from '@reduxjs/toolkit'
import locale from './locales'

export const store = configureStore({
    reducer: {
        locale,
    },
});
