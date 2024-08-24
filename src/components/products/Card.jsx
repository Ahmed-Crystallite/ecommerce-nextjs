import Image from "next/image";
import Link from "next/link";
import Product1 from "media/products/1.png"
import Product2 from "media/products/2.png"
import Product3 from "media/products/3.png"
import Product4 from "media/products/4.png"
import Product5 from "media/products/5.png"
import Product6 from "media/products/6.png"
import Product7 from "media/products/7.png"
import Product8 from "media/products/8.png"
import Product9 from "media/products/9.png"
import Product10 from "media/products/10.png"
const Card = ({
    gridsColumn = "xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1",
    elipses = "line-clamp-2",
    products = [
        { id: 1, image: Product1, title: "Men Navy Blue Solid Sweatshirt", desc: "United Colors of Benetton", amount: "2599" },
        { id: 2, image: Product2, title: "Men Black MAMGP T7 Sweat Sporty Jacket", desc: "Puma", amount: "7999" },
        { id: 3, image: Product3, title: "Men Black Action Parkview Lifestyle Shoes", desc: "Hush Puppies", amount: "6999" },
        { id: 4, image: Product4, title: "Women Black Solid Lightweight Leather Jacket", desc: "BARESKIN", amount: "9999" },
        { id: 5, image: Product5, title: "Women Blue Solid Shirt Dress", desc: "SASSAFRAS", amount: "5200" },
        { id: 6, image: Product6, title: "Unisex Silver-Toned Series 3 Smart Watch", desc: "Apple", amount: "31999" },
        { id: 7, image: Product7, title: "Unisex Black & Green Reflex 2.0 Smart Band", desc: "Fastrack", amount: "1999" },
        { id: 8, image: Product8, title: "Unisex Black Galaxy Fit Fitness Band", desc: "Samsung", amount: "9990" },
        { id: 9, image: Product9, title: "Gear IconX Black Cord-free Fitness Earbuds", desc: "Samsung", amount: "13990" },
        { id: 10, image: Product10, title: "White 2nd Gen AirPods with Charging Case", desc: "Apple", amount: "14999" }
    ]
}) => {
    return (
        <section>
            <div className="relative py-[40px]">
            <div className="container">
                <h2 className="md:text-3xl sm:text-2xl text-lg text-black capitalize font-medium leading-tight mb-6">Our Unique Collections</h2>
                <div className={`grid ${gridsColumn} gap-5 overflow-hidden`}>
                    {products.map(({ id, image, title, desc, amount }) => (
                        <Link key={id} href={`/products-details/${id}`}>
                            <div className="text-black shadow-xl group hover:shadow-2xl transition-all duration-300 ease-in-out bg-slate-100 rounded-xl p-4">
                                <Image
                                    src={image}
                                    alt="products"
                                    className="transition-all duration-300 ease-in-out group-hover:scale-[1.03] group-hover:rounded-xl"
                                />
                                <h3 className={`sm:text-base text-sm leading-normal font-medium mt-2 ${elipses}`}>{title}</h3>
                                <span className="block sm:text-sm text-xs font-light my-1">{desc}</span>
                                <span className="block sm:text-xl text-base font-semibold mt-1 text-[rgb(3,_94,_94)]">Rs {amount}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            </div>
        </section>
    )
}
export default Card;