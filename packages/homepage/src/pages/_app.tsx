import { Provider } from 'react-redux';
import { store } from '@/store';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app'
import '../styles/reset.css';
import '../styles/layout.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default appWithTranslation(MyApp);