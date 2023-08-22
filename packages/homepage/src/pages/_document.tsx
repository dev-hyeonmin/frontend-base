import { Html, Head, Main, NextScript } from 'next/document'
import Header from '../components/Header'
import Footer from 'src/components/Footer'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <Header />
            <body>
                <div className='wrapper'>
                    <Main />
                    <NextScript />
                </div>
            </body>
            <Footer />
        </Html>
    )
}