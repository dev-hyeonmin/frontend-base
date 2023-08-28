import Head from 'next/head';
import Header from './Header'
import Footer from './Footer';

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticPropsContext } from 'next';
import { useEffect } from 'react';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, [
                'common',
            ])),
        },
    }
}

interface LayoutProps {
    title?: string;
    children: React.ReactNode;
}

export default function Layout({
    title,
    children
}: LayoutProps) {
    const { t } = useTranslation('common');

    return (
        <div>
            <Head>
                <title>{title} | mement</title>
            </Head>

            <Header />
            <div className='wrapper'>
                {children}
            </div>
            <Footer />
        </div>
    )
}
