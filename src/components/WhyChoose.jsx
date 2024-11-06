// Next
import Image from "next/image"
// Media
import Icon1 from "media/icons/1.png"
import Icon2 from "media/icons/2.png"
import Icon3 from "media/icons/3.png"
import Icon4 from "media/icons/4.png"
const WhyChoose = () => {
  return (
    <section>
      <div className="lg:py-[80px] md:py-[60px] py-[40px]">
        <div className="container">
          <div className="text-center mb-[50px]">
            <h2 className="lg:text-[40px] md:text-[30px] text-[25px] font-semibold text-black">
              Why should you choose us?
            </h2>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-5 gap-y-10 items-center">
            {[
              [
                Icon1,
                "Free Shipping",
                "All purchases over $199 are eligible for free shipping via USPS First Class Mail.",
              ],
              [
                Icon2,
                "Easy Payments",
                "All payments are processed instantly over a secure payment protocol.",
              ],
              [
                Icon3,
                "Money-Back Guarantee",
                "If an item arrived damaged or you've changed your mind, you can send it back for a full refund.",
              ],
              [
                Icon4,
                "Finest Quality",
                "Designed to last, each of our products has been crafted with the finest materials.",
              ],
            ].map(([img, title, desc], i) => (
              <div key={i} className="group h-full bg-white">
                <div className="bg-[#f6f6f6] w-max p-4 rounded-lg group-hover:bg-[#fff3df] mb-5">
                  <Image src={img} alt="icons" width={40} height={40} />
                </div>
                <h4 className="text-sm sm:text-lg font-medium leading-tight my-3">{title}</h4>
                <p className="text-xs sm:text-sm text-[#646464]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
