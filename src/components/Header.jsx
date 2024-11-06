"use client"
import Link from "next/link"
import { useCart } from "./cart/CartContext"
import { useState } from "react"

const Header = () => {
  const { cartCount } = useCart()
  const [openIndex, setOpenIndex] = useState(false)

  return (
    <header className="relative">
      <div className="container">
        <div className="py-4 gap-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45.77"
              height="35.001"
              viewBox="0 0 45.77 35.001"
            >
              <path
                id="noun_cloth_2129414"
                d="M437.579,459a1.344,1.344,0,0,1-1.3-.867l-3.26-8.556H418.69a2.69,2.69,0,0,1-2.69-2.692V426.692A2.691,2.691,0,0,1,418.7,424h18.843a1.346,1.346,0,0,1,1.218.773l4.07,8.65h16.252a2.69,2.69,0,0,1,2.69,2.692v20.192a2.691,2.691,0,0,1-2.7,2.692Zm-.895-32.308H418.7s0,6.731,0,20.192h27.494Zm7.41,9.423,5.432,11.542a1.346,1.346,0,0,1-.332,1.586l-8.073,7.064h17.952s0-6.731,0-20.192Zm-5.986,19.251,6.617-5.79H435.9Z"
                transform="translate(-416 -424)"
              ></path>
            </svg>
            <h1 className="md:text-4xl sm:text-2xl text-xl leading-normal font-semibold uppercase">
              shop<span className="font-normal">land</span>
            </h1>
          </Link>
          <ul
            className={`md:flex justify-center grid grid-cols-1 md:static absolute transition-all duration-500 ease-in-out md:translate-y-0 md:bg-transparent md:p-0 z-10 gap-5 font-semibold ${
              !openIndex
                ? "-translate-y-full"
                : "translate-y-0 bg-black/80 right-0 text-white py-4 px-4 md:top-0 top-14 rounded-xl"
            }`}
          >
            {["products", "inspiration", "rooms"].map((e, i) => (
              <li key={i}>
                <Link href={`/${e}`} className="capitalize">
                  {e}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5">
            <Link href="/cart" className="relative block scale-x-[-1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
              </svg>
              <span className="scale-x-[-1] block absolute -top-1 left-0 right-3 m-auto w-max h-max font-medium text-xs py-px px-1 bg-opacity-80 rounded-xl bg-yellow-500">
                {cartCount}
              </span>
            </Link>
            <Link
              href="/profile"
              className="border-2 border-black py-1 px-1 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 448 512"
              >
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
              </svg>
            </Link>
          </div>
          <button
            className="relative z-50 md:hidden block w-10"
            onClick={() => setOpenIndex((prev) => !prev)}
          >
            <span
              className={`block w-full transition-all duration-500 ease-in-out rounded-full h-1 bg-black ${
                !openIndex ? "rotate-0" : "-rotate-45 -mb-1"
              }`}
            ></span>
            <span
              className={`block w-full transition-all duration-500 ease-in-out rounded-full h-1 bg-black my-2 ${
                !openIndex ? "block" : "hidden"
              }`}
            ></span>
            <span
              className={`block w-full transition-all duration-500 ease-in-out rounded-full h-1 bg-black ${
                !openIndex ? "rotate-0" : "rotate-45"
              }`}
            ></span>
          </button>
        </div>
      </div>
    </header>
  )
}
export default Header
