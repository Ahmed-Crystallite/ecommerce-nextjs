// Next
import Image from "next/image"
import Link from "next/link"
// Media
import Icon1 from "media/icons/5.png"
import Icon2 from "media/icons/6.png"
import Icon3 from "media/icons/7.png"
import Icon4 from "media/icons/8.png"
import Icon5 from "media/icons/9.png"
const Footer = () => {
  return (
    <>
    <div className="lg:py-[80px] md:py-[60px] py-[40px] border-t border-b border-[#ebebeb]">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-10">
          <div className="xl:max-w-[500px] max-w-[400px]">
            <Link href="/" className="flex items-center gap-x-2 mb-5">
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
            <p className="text-[#313131] sm:text-base text-sm leading-normal font-normal">
              House My Brand designs clothing for the young, the old & everyone
              in between – but most importantly, for the fashionable
            </p>
            <div className="flex items-center gap-x-5 mt-5">
              {[Icon1, Icon2, Icon3, Icon4, Icon5].map((e, i) => (
                <Link key={i} href="/">
                  <Image src={e} alt="icons" width={25} height={25} />
                </Link>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-2 xl:gap-x-5 lg:gap-x-2 gap-5 items-start">
            {[
              [
                "Shopping online",
                [
                  "Order Status",
                  "Shipping and Delivery",
                  "Returns",
                  "Payment options",
                  "Contact Us"
                ],
              ],
              [
                "Information",
                [
                  "Gift Cards",
                  "Find a store",
                  "Newsletter",
                  "Bacome a member",
                  "Site feedback"
                ],
              ],
              [
                "Contact",
                [
                  "shopland@example.com",
                  "Hotline: +0 000 000 000"
                ],
              ],
            ].map(([title, list], i) => (
              <div>
                <h3 className="sm:text-[20px] text-[18px] leading-tight font-medium mb-3">{title}</h3>
                <ul>
                  {list.map((e, i) => (
                    <li key={i} className="sm:text-base text-sm leading-tight mb-2 transition-all duration-500 ease-in-out hover:text-[#313131] hover:underline">
                      <Link href="/">{e}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="py-[20px] text-center">
        <div className="container">
        <span className="block sm:text-base text-sm leading-normal font-normal">DESIGN & DEVELOPMENT BY AHMED RAZA - © 2024. ALL RIGHTS RESERVED.</span>
        </div>
    </div>
    </>
  )
}

export default Footer
