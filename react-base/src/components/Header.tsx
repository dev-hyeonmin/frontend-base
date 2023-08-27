import { useTranslation } from "react-i18next";
import { changeCurrentLocale } from "../store/modules/locales";
import { useAppDispatch, useAppSelector } from "../hooks/store";
import { Link } from "react-router-dom";

const Header = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useAppDispatch();

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        dispatch(changeCurrentLocale("en"));
    }
    
    return (
        <header>
            <ul>
                <li><a href="/events">events</a></li>
                <li><a href="/events/2">menu2</a></li>
                <li onClick={() => handleChangeLanguage('ko')}>ko</li>
                <li onClick={() => handleChangeLanguage('en')}>en</li>
            </ul>
        </header>
    )
}

export default Header;