import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { AppProps } from 'next/app'
import '../styles/reset.css';
import '../styles/layout.css';
import { Provider } from 'react-redux';
import { store } from '@/store';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Provider store={store}>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </Provider>
        </>
    )
}
