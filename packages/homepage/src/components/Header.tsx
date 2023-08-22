import Link from "next/link";

export default function Header() {
    return (
        <header>
            <ul>
                <li><Link href="/">menu1</Link></li>
                <li><Link href="/">menu2</Link></li>
                <li><Link href="/">menu3</Link></li>
                <li><Link href="/">menu4</Link></li>
            </ul>
        </header>
    )
}