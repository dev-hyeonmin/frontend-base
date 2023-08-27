import Link from "next/link";
import { LocalesReduxState, LocalesType, updateLocale } from "../store/locales";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
    const dispatch = useDispatch();
    const temp = useSelector((state: LocalesReduxState) => state);
    const selectLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLocale = e.target.value;
        dispatch(updateLocale({ locale: selectedLocale }));
    }

    return (
        <header>
            <select onChange={selectLocale}>
                {(Object.keys(LocalesType) as Array<keyof typeof LocalesType>).map((key) =>
                    <option key={key} value={key}>{key}</option>
                )}
            </select>
            <ul>
                <li><Link href="/">menu1</Link></li>
                <li><Link href="/">menu2</Link></li>
                <li><Link href="/">menu3</Link></li>
                <li><Link href="/">menu4</Link></li>
            </ul>
        </header>
    )
}
