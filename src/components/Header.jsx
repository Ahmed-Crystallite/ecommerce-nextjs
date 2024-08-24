"use client";
import Link from "next/link";
import { useCart } from "./cart/CartContext";
import { useState } from "react";
import SearchInput from "./SearchInput";

const Header = () => {
    const { cartCount } = useCart();
    const [openIndex, setOpenIndex] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <header className="relative">
            <div className="container">
                <div className="py-4 gap-5 flex items-center justify-between">
                    <Link href="/">
                        <h1 className="md:text-4xl sm:text-2xl text-xl leading-normal font-semibold uppercase">shop<span className="font-normal">land</span></h1>
                    </Link>
                    <ul className={`lg:flex justify-center grid grid-cols-1 lg:static absolute transition-all duration-500 ease-in-out lg:translate-y-0 lg:bg-transparent lg:p-0 z-10 gap-5 font-semibold ${!openIndex ? "-translate-y-full" : "translate-y-0 bg-black/80 right-0 text-white py-4 px-4 lg:top-0 top-14 rounded-xl"}`}>
                        {
                            [
                                "products", "inspiration", "rooms"
                            ].map((e, i) => (
                                <li key={i}>
                                    <Link href={`/${e}`} className="capitalize">{e}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="flex items-center gap-5">
                        <div>
                            <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                        </div>
                        <Link href="#" className="relative block scale-x-[-1]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" /></svg>
                            <span className="scale-x-[-1] block absolute -top-1 left-0 right-3 m-auto w-max h-max font-medium text-xs py-px px-1 rounded-xl bg-yellow-500">{cartCount}</span>
                        </Link>
                        <Link href="#" className="border-2 border-black py-1 px-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg>
                        </Link>
                    </div>
                    <button className="relative z-50 lg:hidden block w-10" onClick={() => setOpenIndex((prev) => (!prev))}>
                        <span className={`block w-full transition-all duration-500 ease-in-out rounded-full h-1 bg-black ${!openIndex ? "rotate-0" : "-rotate-45 -mb-1"}`}></span>
                        <span className={`block w-full transition-all duration-500 ease-in-out rounded-full h-1 bg-black my-2 ${!openIndex ? "block" : "hidden"}`}></span>
                        <span className={`block w-full transition-all duration-500 ease-in-out rounded-full h-1 bg-black ${!openIndex ? "rotate-0" : "rotate-45"}`}></span>
                    </button>
                </div>
            </div>
        </header>
    )
}
export default Header;