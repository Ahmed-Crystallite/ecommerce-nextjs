"use client"
import Image from "next/image";
import { useCart } from "@/components/cart/CartContext";
import CartImage from "media/cart.png"
import DeliveryTruck from "media/delivery.png"
import { Button } from "@/components";
import Link from "next/link";
const Cart = () => {
    const { cartItems, updateQuantity, removeItem,calculateTotalCost } = useCart();

    const handleQuantityChange = (id, quantity) => {
        if (quantity > 0) {
            updateQuantity(id, quantity);
        } else {
            removeItem(id);
        }
    };
    return (
        <section>
            <div className="py-[60px]">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <h2 className="font-medium text-center text-4xl text-[#333333]">Shopping Cart</h2>
                        <div className="flex items-center gap-2">
                            <Image src={CartImage} width={40} height={40} alt="icons" className="block p-2 rounded-full bg-yellow-500" />
                            <span className="block w-[150px] h-px bg-gray-200"></span>
                            <Image src={DeliveryTruck} width={40} height={40} alt="icons" className="block p-2 rounded-full bg-gray-300" />
                        </div>
                    </div>
                    {cartItems.length === 0 ? (
                        <p className="font-medium text-center text-4xl text-[#333333] mt-16">Your cart is empty.</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="relative mt-[80px] flex justify-between">
                                <div>
                                    <h2 className="mb-10 font-bold text-[#c1c1c1] text-base">Products</h2>
                                    <div className="flex gap-5 items-center">
                                        <Image src={item.image} alt={item.title} className="w-full max-w-[100px] h-full max-h-[100px] rounded-full object-cover object-left-top" />
                                        <h3 className="font-semibold text-xl leading-tight text-[#333333]">{item.title}</h3>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="mb-10 font-bold text-[#c1c1c1] text-base">Color</h2>
                                </div>
                                <div>
                                    <h2 className="mb-10 font-bold text-[#c1c1c1] text-base">Size</h2>
                                </div>
                                <div>
                                    <h2 className="mb-10 font-bold text-[#c1c1c1] text-base text-center">Quantity</h2>
                                    <div className="flex gap-4 items-center border-2 py-2 rounded-full px-6">
                                        <button className="block font-semibold text-xl leading-tight" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                        <span className="block font-medium text-xl">{item.quantity}</span>
                                        <button className="block font-semibold text-xl leading-tight" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="mb-10 font-bold text-[#c1c1c1] text-base text-center">Price</h2>
                                    <span className="block font-semibold text-xl leading-tight">${item.amount}</span>
                                </div>
                                <div className="my-8">
                                    <Button
                                        className="bg-transparent shadow-none block group hover:bg-transparent"
                                        onClick={() => handleQuantityChange(item.id, 0)}
                                    >
                                        <span class="block w-6 transition-all duration-500 ease-in-out rounded-full h-1 bg-black group-hover:bg-red-600 -rotate-45 -mb-1"></span>
                                        <span class="block w-6 transition-all duration-500 ease-in-out rounded-full h-1 bg-black group-hover:bg-red-600 rotate-45"></span>
                                    </Button>
                                </div>
                            </div>
                        ))
                    )}
                    <div className="flex items-center justify-between mt-10">
                        <Link href="/products" className="relative group flex items-center">
                            <span className="block rotate-180 transition-all ease-in-out duration-300 group-hover:-translate-x-2">
                                <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            </span>
                            <span className="block font-semibold text-lg leading-tight">Continue Shopping</span>
                        </Link>
                        <div className="flex items-center justify-between gap-10">
                            {cartItems.length > 0 && (
                                <form method="post">
                                    <input type="text" name="promoCode" id="promoCode" placeholder="Promo Code" className="focus-visible:outline-none py-3 px-5 w-max border border-black rounded-full" />
                                </form>
                            )}
                            {cartItems.length > 0 && (
                                <div>
                                    <h2 className="font-bold text-[#c1c1c1] text-base">Total Cost: <span className="text-black ms-2">${calculateTotalCost()}</span></h2>
                                </div>
                            )}
                            {cartItems.length > 0 && (
                                <Link href="/cart/checkout" className="bg-yellow-500 text-white py-3 px-8 rounded-full text-lg font-semibold flex items-center group">
                                    <span className="block">
                                        Checkout
                                    </span>
                                    <span className="block transition-all ease-in-out duration-300 group-hover:translate-x-2">
                                        <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                    </span>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
