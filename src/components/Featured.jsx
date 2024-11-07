// Next
import Image from "next/image"
import Image1 from "media/featured/1.jpg"
import Image2 from "media/featured/2.jpg"
import Image3 from "media/featured/3.jpg"
import Link from "next/link"
const Featured = () => {
  return (
    <section>
      <div className="lg:py-[80px] md:py-[60px] py-[40px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-5 items-center">
            {[
              [
                "lg:col-span-6 col-span-12",
                Image1,
                "New arrivals are now in!",
                "Show Collection",
              ],
              [
                "lg:col-span-3 col-span-6",
                Image2,
                "Basic t-shirts $30,91",
                "More details",
              ],
              [
                "lg:col-span-3 col-span-6",
                Image3,
                "Sale this summer",
                "View All",
              ],
            ].map(([column, img, title, cta], i) => (
              <div key={i} className={`relative z-10 h-full ${column}`}>
                <Image
                  src={img}
                  alt="models"
                  priority
                  className="w-full h-full bg-gray-600"
                />
                <span className="block bg-[rgba(0,0,0,.28)] w-full h-full absolute top-0 bottom-0 right-0 left-0"></span>
                <div className="absolute bottom-0 sm:-translate-y-8 -translate-y-6 sm:translate-x-6 translate-x-2">
                  <h3 className="xl:text-[25px] sm:text-[20px] text-[16px] font-medium text-white mb-5">
                    {title}
                  </h3>
                  <Link
                    href="/products"
                    className="bg-white text-black xl:py-3 py-2 xl:px-8 px-6 block w-max rounded-full sm:text-[16px] text-[14px] leading-normal transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
                  >
                    {cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured
