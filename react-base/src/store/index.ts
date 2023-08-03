import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import localesReducer from './modules/locales';

export const store = configureStore({
    reducer: {
        locales: localesReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
