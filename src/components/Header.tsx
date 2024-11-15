import "../app/globals.css";
import Link from "next/link";

export default function Header(){
    return(
        <div className="header-page flex flex-col xs:flex-row gap-5 xs:justify-between items-center h-auto xs:h-20 bg-[rgb(4,_18,_24)] text-white">
            <h2 className="pl-5 font-bold text-[26px] xs:text-[30px]">CarSpace</h2>
            <ul className="xs:flex-row flex flex-col items-center gap-[15px] justify-evenly w-1/2">
                <li className="list-none font-bold text-xl hover:text-[rgb(250,_9,_9)] hover:underline">
                    <Link href="/">Home</Link>
                </li>
                <li className="list-none font-bold text-xl hover:text-[rgb(250,_9,_9)] hover:underline">
                    <Link href="/luxury">Luxury</Link>
                </li>
                <li className="list-none font-bold text-xl hover:text-[rgb(250,_9,_9)] hover:underline">
                    <Link href="/sport">Sport</Link>
                </li>
                <li className="list-none font-bold text-xl hover:text-[rgb(250,_9,_9)] hover:underline">
                    <Link href="/suv">Suv</Link>
                </li>
            </ul>
        </div>
    )
}