import { useTranslation } from "react-i18next";
import { changeCurrentLocale, selectLocale } from "../store/modules/locales";
import { useAppDispatch, useAppSelector } from "../hooks/store";

const Header = () => {
    const { t, i18n } = useTranslation();
    const locale = useAppSelector(selectLocale);
    const dispatch = useAppDispatch();
    
    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        dispatch(changeCurrentLocale("en"));
    }
    
    return (
        <header onClick={() => handleChangeLanguage("en")}>
            Hello :P
        </header>
    )
}

export default Header;