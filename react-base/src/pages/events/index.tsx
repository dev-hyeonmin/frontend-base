import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Events = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Helmet>
                <title>Events</title>
            </Helmet>
            <h1>{t('events')}</h1>
        </>
    )
}

export default Events;