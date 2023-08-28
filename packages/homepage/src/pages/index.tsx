import Layout from '@/components/Layout'
import { useTranslation } from 'react-i18next'
  
export default function Home() {
    const { t } = useTranslation('common');

    return (
        <Layout title="main">
            <main>main</main>
        </Layout>
    )
}
