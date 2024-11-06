"use client"
import Image from "next/image";
import CartImage from "media/cart.png"
import DeliveryTruck from "media/delivery.png"
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import Paypal from "media/payment-methods/paypal.png"
import Visa from "media/payment-methods/visa.png"
import Mastercard from "media/payment-methods/mastercard.png"
import Maestro from "media/payment-methods/maestro.png"
import Discover from "media/payment-methods/discover.png"
import IdealLogo from "media/payment-methods/ideal-logo.svg"
import DHL from "media/payment-methods/dhl.svg"
import DPD from "media/payment-methods/dpd.svg"
import Inpost from "media/payment-methods/inpost.svg"
import { PaymentForm } from "@/components";
import { useCart } from "@/components/cart/CartContext";
import Link from "next/link";
const Checkout = () => {
    const { cartItems, calculateTotalCost } = useCart();
    return (
        <section>
            <div className="py-[60px]">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <h2 className="font-medium text-center text-4xl text-[#333333]">Shipping and Payment</h2>
                        <div className="flex items-center gap-2">
                            <Image src={CartImage} width={40} height={40} alt="icons" className="block p-2 rounded-full bg-gray-300" />
                            <span className="block w-[150px] h-px bg-gray-200"></span>
                            <Image src={DeliveryTruck} width={40} height={40} alt="icons" className="block p-2 rounded-full bg-yellow-500" />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-10 mt-24">
                        <div className="col-span-5">
                            <h3 className="text-lg font-semibold leading-tight mb-10">Shipping information</h3>
                            <PaymentForm />
                        </div>
                        <div className="col-span-4">
                            <h3 className="text-lg font-semibold leading-tight mb-10">Payment method</h3>
                            <ToggleGroup.Root
                                className="grid grid-cols-3 gap-5 rounded space-x-px"
                                type="single"
                                aria-label="Payment methods"
                            >
                                {
                                    [
                                        ["paypal", Paypal],
                                        ["visa", Visa],
                                        ["mastercard", Mastercard],
                                        ["maestro", Maestro],
                                        ["discover", Discover],
                                        ["ideal", IdealLogo],
                                    ].map(([value, img], i) => (
                                        <ToggleGroup.Item
                                            key={i}
                                            className="hover:bg-yellow-500 color-white transition-all duration-300 ease-in-out data-[state=on]:bg-yellow-500 p-2 rounded-full max-w-[120px] data-[state=on]:text-white w-full mx-auto bg-white text-base leading-4 focus:z-10 focus:shadow-[0_0_0_2px] focus:outline-none"
                                            value={value}
                                            aria-label={`${value} aligned`}
                                        >
                                            <Image src={img} alt={value} className="mx-auto" />
                                        </ToggleGroup.Item>
                                    ))
                                }
                            </ToggleGroup.Root>
                            <h3 className="text-lg font-semibold leading-tight mt-16 mb-10">Delivery method</h3>
                            <ToggleGroup.Root
                                className="grid grid-cols-2 gap-5 rounded space-x-px"
                                type="single"
                                aria-label="Delivery methods"
                            >
                                {
                                    [
                                        ["inpost", Inpost,"20"],
                                        ["dpd", DPD,"12"],
                                        ["dhl", DHL,"15"],
                                        ["maestro", Maestro,"10"]
                                    ].map(([value, img,disct], i) => (
                                        <ToggleGroup.Item
                                            key={i}
                                            className="flex items-center justify-center gap-2 hover:bg-yellow-500 color-white transition-all duration-300 ease-in-out data-[state=on]:bg-yellow-500 py-2 px-4 rounded-full data-[state=on]:text-white w-full mx-auto bg-white text-base leading-4 focus:z-10 focus:shadow-[0_0_0_2px] focus:outline-none"
                                            value={value}
                                            aria-label={`${value} aligned`}
                                        >
                                            <Image src={img} alt={value} />
                                            <span className="text-sm font-medium">${disct}.00</span>
                                        </ToggleGroup.Item>
                                    ))
                                }
                            </ToggleGroup.Root>
                        </div>
                        <div className="col-span-3">
                            <h3 className="text-lg font-semibold leading-tight mb-10">Your cart</h3>
                            {cartItems.length === 0 ? (
                                <p className="text-lg font-semibold leading-tight mb-10 text-red-600">Your cart is empty.</p>
                            ) : (
                                <h4 className="block text-lg font-semibold leading-tight mb-10 text-[#c1c1c1]">Total Cost: <span className="inline-block text-black">${calculateTotalCost()}</span></h4>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-10">
                        <Link href="/cart" className="relative group flex items-center">
                            <span className="block rotate-180 transition-all ease-in-out duration-300 group-hover:-translate-x-2">
                                <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            </span>
                            <span className="block font-semibold text-lg leading-tight">Back</span>
                        </Link>
                        <Link href="/cart/checkout" className="bg-yellow-500 text-white py-2 px-5 rounded-full text-lg font-semibold flex items-center group">
                            <span className="block">
                                Proceed to payment
                            </span>
                            <span className="block transition-all ease-in-out duration-300 group-hover:translate-x-2">
                                <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Checkout;