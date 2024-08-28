"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavyBlueSweatshirt1 from "media/collections/navy-blue-sweatshirt/1.png"
import NavyBlueSweatshirt2 from "media/collections/navy-blue-sweatshirt/2.png"
import NavyBlueSweatshirt3 from "media/collections/navy-blue-sweatshirt/3.png"
import NavyBlueSweatshirt4 from "media/collections/navy-blue-sweatshirt/4.png"
import NavyBlueSweatshirt5 from "media/collections/navy-blue-sweatshirt/5.png"
import SweatSportyJacket1 from "media/collections/sweat-sporty-jacket/1.png"
import SweatSportyJacket2 from "media/collections/sweat-sporty-jacket/2.png"
import SweatSportyJacket3 from "media/collections/sweat-sporty-jacket/3.png"
import ParkviewLifestyleShoes1 from "media/collections/parkview-lifestyle-shoes/1.png"
import ParkviewLifestyleShoes2 from "media/collections/parkview-lifestyle-shoes/2.png"
import ParkviewLifestyleShoes3 from "media/collections/parkview-lifestyle-shoes/3.png"
import ParkviewLifestyleShoes4 from "media/collections/parkview-lifestyle-shoes/4.png"
import ParkviewLifestyleShoes5 from "media/collections/parkview-lifestyle-shoes/5.png"
import ParkviewLifestyleShoes6 from "media/collections/parkview-lifestyle-shoes/6.png"
import LightweightLeatherJacket1 from "media/collections/lightweight-leather-jacket/1.png"
import LightweightLeatherJacket2 from "media/collections/lightweight-leather-jacket/2.png"
import LightweightLeatherJacket3 from "media/collections/lightweight-leather-jacket/3.png"
import LightweightLeatherJacket4 from "media/collections/lightweight-leather-jacket/4.png"
import LightweightLeatherJacket5 from "media/collections/lightweight-leather-jacket/5.png"
import BlueSolidShirtDress1 from "media/collections/blue-solid_shirt-dress/1.png"
import BlueSolidShirtDress2 from "media/collections/blue-solid_shirt-dress/2.png"
import BlueSolidShirtDress3 from "media/collections/blue-solid_shirt-dress/3.png"
import BlueSolidShirtDress4 from "media/collections/blue-solid_shirt-dress/4.png"
import BlueSolidShirtDress5 from "media/collections/blue-solid_shirt-dress/5.png"
import SmartWatch1 from "media/collections/smart-watch/1.png"
import SmartWatch2 from "media/collections/smart-watch/2.png"
import SmartWatch3 from "media/collections/smart-watch/3.png"
import SmartBand1 from "media/collections/smart-band/1.png"
import SmartBand2 from "media/collections/smart-band/2.png"
import SmartBand3 from "media/collections/smart-band/3.png"
import FitnessBand1 from "media/collections/fitness-band/1.png"
import FitnessBand2 from "media/collections/fitness-band/2.png"
import FitnessBand3 from "media/collections/fitness-band/3.png"
import FitnessEarbuds1 from "media/collections/fitness-earbuds/1.png"
import FitnessEarbuds2 from "media/collections/fitness-earbuds/2.png"
import FitnessEarbuds3 from "media/collections/fitness-earbuds/3.png"
import AirPods1 from "media/collections/airpods/1.png"
import AirPods2 from "media/collections/airpods/2.png"
import AirPods3 from "media/collections/airpods/3.png"
import { useCart } from "@/components/cart/CartContext";
import { Reviews, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components";

const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const id = window.location.pathname.split("/").pop();
        const productData = {
            1: {
                img: [
                    NavyBlueSweatshirt1,
                    NavyBlueSweatshirt2,
                    NavyBlueSweatshirt3,
                    NavyBlueSweatshirt4,
                    NavyBlueSweatshirt5
                ],
                title: "Men Navy Blue Solid Sweatshirt",
                desc: "United Colors of Benetton",
                amount: "2599",
                details: "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
            },
            2: {
                img: [
                    SweatSportyJacket1,
                    SweatSportyJacket2,
                    SweatSportyJacket3
                ],
                title: "Men Black MAMGP T7 Sweat Sporty Jacket",
                desc: "Puma",
                amount: "7999",
                details: "Black solid sporty jacket, has a mock collar, 3 pockets, zip closure, long sleeves, straight hem, unlined lining",
            },
            3: {
                img: [
                    ParkviewLifestyleShoes1,
                    ParkviewLifestyleShoes2,
                    ParkviewLifestyleShoes3,
                    ParkviewLifestyleShoes4,
                    ParkviewLifestyleShoes5,
                    ParkviewLifestyleShoes6
                ],
                title: "Men Black Action Parkview Lifestyle Shoes",
                desc: "Hush Puppies",
                amount: "6999",
                details: "Flaunt an effortless look with this ultimate pair of black coloured formal shoes from the house of Hush Puppies. Let the sun go down for uncomfortable shoes, as you opt for this pair of formal shoes that is crafted using comfortable TPR (thermoplastic rubber) sole. Pair these formal shoes with a shirt and trousers to look absolutely handsome",
            },
            4: {
                img: [
                    LightweightLeatherJacket1,
                    LightweightLeatherJacket2,
                    LightweightLeatherJacket3,
                    LightweightLeatherJacket4,
                    LightweightLeatherJacket5
                ],
                title: "Women Black Solid Lightweight Leather Jacket",
                desc: "BARESKIN",
                amount: "9999",
                details: "Black solid leather jacket, has a spread collar, 3 pockets, zip closure, long sleeves, straight hem, polyester lining",
            },
            5: {
                img: [
                    BlueSolidShirtDress1,
                    BlueSolidShirtDress2,
                    BlueSolidShirtDress3,
                    BlueSolidShirtDress4,
                    BlueSolidShirtDress5
                ],
                title: "Women Blue Solid Shirt Dress",
                desc: "SASSAFRAS",
                amount: "5200",
                details: "Blue solid woven shirt dress, has a shirt collar, sleeveless, button closure, flared hem",
            },
            6: {
                img: [
                    SmartWatch1,
                    SmartWatch2,
                    SmartWatch3
                ],
                title: "Unisex Silver-Toned Series 3 Smart Watch",
                desc: "Apple",
                amount: "31999",
                details: "Low and high heart rate notifications. Emergency SOS. New Breathe watch faces. Automatic workout detection. New yoga and hiking workouts. Advanced features for runners like cadence and pace alerts. New head-to-head competitions. Activity sharing with friends. Personalized coaching. Monthly challenges and achievement awards. Walkie-Talkie, make phone calls, and send messages. Listen to Apple Music and Apple Podcasts. Use Siri in all-new ways. Silver aluminum case. Built-in GPS, GLONASS, Galileo, and QZSS. S3 with dual-core processor. W2 Apple wireless chip. Barometric altimeter Capacity 8GB. Optical heart sensor. 1 Year Manufacture Warranty",
            },
            7: {
                img: [
                    SmartBand1,
                    SmartBand2,
                    SmartBand3
                ],
                title: "Unisex Black & Green Reflex 2.0 Smart Band",
                desc: "Fastrack",
                amount: "1999",
                details: "The new Fastrack Reflex 2.0 Activity Tracker comes with all the features one could ask for! It comes in three colours that you can use to accentuate your athleisure, casual or party attire. Not only does it look uber cool in this cool grey & electric blue accent, further the TPU (Thermoplastic Polyurethane) strap ensures it gives you a snugfit while staying light on your wrist! It is a fitness band with smartwatch features. The band has Steps, Distance and Calorie Tracker, Sleep Tracker, Call & SMS Alerts, OLED Display, 10 Days Power Reserve, Vibration Alarm, Sedentary Reminder and is IPX6 Water Resistant. This band is compatible with both IOS and Android OS. It has a secure 'Pin' based pairing with your phone, for better protection. And, all of this at a price that is hard match anywhere else with quality and promise of the brand Fastrack. Move on and get one for yourself!",
            },
            8: {
                img: [
                    FitnessBand1,
                    FitnessBand2,
                    FitnessBand3
                ],
                title: "Unisex Black Galaxy Fit Fitness Band",
                desc: "Samsung",
                amount: "9990",
                details: "Keep up your routine for even longer. With plenty of power to last throughout your daily workouts, you can pack in those longer hours to reach your fitness goals. What's more, you won't have to worry about disruptive battery discharge when tracking your activity.",
            },
            9: {
                img: [
                    FitnessEarbuds1,
                    FitnessEarbuds2,
                    FitnessEarbuds3
                ],
                title: "Gear IconX Black Cord-free Fitness Earbuds",
                desc: "Samsung",
                amount: "13990",
                details: "Speak commands via Bixby or Google Voice and control your music with just a tap or swipe. Meet your fitness goals with speed, distance, calorie tracking and real-time voice guidance. Find the perfect fit with multiple sizes of ear-tips and wing-tips right in the box. iOS/Mac users: Samsung Gear IconX can be used to stream music or take calls from your iOS handset or tablet. Fitness Functions that require the use of Samsung S-Health app are not available for iOS. 5 hours of Bluetooth streaming, 7 hours of MP3 listening, 4 hours talk time. Warranty: 6 months. Warranty provided by the brand owner / manufacturer",
            },
            10: {
                img: [
                    AirPods1,
                    AirPods2,
                    AirPods3
                ],
                title: "White 2nd Gen AirPods with Charging Case",
                desc: "Apple",
                amount: "14999",
                details: "AirPods with Charging Case: More than 24 hours listening time,3 up to 18 hours talk time8. AirPods (single charge): Up to 5 hours listening time,1 up to 3 hours talk time2. 15 minutes in the case equals up to 3 hours listening time4 or up to 2 hours talk time. Warranty: 1 year. Warranty provided by Brand/Manufacturer",
            },
        }[id];

        setProduct(productData);
    }, []);
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            title: product.title,
            amount: product.amount,
            image: product.img[0], 
        });
    };
    if (!product) return (
        <div className="container">
            <div className="flex items-center justify-center gap-5 h-screen">
                <p className="text-center text-6xl font-bold">Loading</p>
                <span className="relative flex h-10 w-10">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-10 w-10 bg-sky-500"></span>
                </span>
            </div>
        </div>
    );
    return (
        <div className="container">
            <Tabs defaultValue="image1">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-10 items-center xl:w-[80%] w-full mx-auto sm:mt-10 mt-5">
                    <div className="lg:col-span-5 md:col-span-6">
                        {
                            product.img && product.img.map((e, i) => (
                                <TabsContent key={i} value={`image${++i}`}>
                                    <Image src={e} alt={`navy-blue-sweatshirt${i++}`} width={405} height={540} draggable="false" className="rounded-sm transition-all ease-in-out duration-500 hover:shadow-[1px_0px_9px_1px_rgb(3,_122,_122)] hover:scale-105 block mx-auto" />
                                </TabsContent>
                            ))
                        }
                    </div>
                    <div className="lg:col-span-7 md:col-span-6">
                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-lg leading-normal font-semibold mb-2">{product.title}</h2>
                        <span className="text-[rgb(3,_122,_122)] md:text-xl sm:text-lg text-base font-medium leading-normal block sm:mb-2 mb-1">{product.desc}</span>
                        <span className="block sm:mb-2 mb-1 md:text-xl sm:text-lg text-base leading-normal font-semibold text-gray-700">Rs {product.amount}</span>
                        <h4 className="md:text-2xl sm:text-xl text-lg leading-normal font-semibold sm:mb-2 mb-1">Description</h4>
                        <p className="md:text-base text-sm leading-normal font-normal text-black">{product.details}</p>
                        <TabsList className="mt-5">
                            {
                                product.img && product.img.map((e, i) => (
                                    <TabsTrigger key={i} value={`image${++i}`} className="p-0 pe-4">
                                        <Image src={e} width={80} height={80} alt={`navy-blue-sweatshirt${i++}`} draggable="false" className="transition-all ease-in-out duration-300 hover:opacity-60 cursor-pointer rounded-sm" />
                                    </TabsTrigger>
                                ))
                            }
                        </TabsList>
                            <button type="button" className="bg-slate-600 text-white md:text-lg text-base leading-normal font-medium block w-max h-12 px-6 mt-5 rounded-lg" onClick={handleAddToCart}>Add To Cart</button>
                    </div>
                </div>
            </Tabs>
            <Tabs defaultValue="description" className="mt-10">
                <TabsList className="flex justify-center gap-5">
                    {
                        [
                            ["description", "Description"],
                            ["reviews", "Reviews"]
                        ].map(([value, title], i) => (
                            <TabsTrigger key={i} value={value} className="data-[state=active]:bg-background py-3 px-5 data-[state=active]:border-2 data-[state=active]:border-yellow-500 rounded-full data-[state=active]:text-foreground data-[state=active]:shadow">{title}</TabsTrigger>
                        ))
                    }
                </TabsList>
                <TabsContent value="description" className="lg:w-[50%] md:w-[80%] w-full mx-auto mt-16">
                    <span className="inline-flex justify-center w-full scale-x-[-1]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#868686" width="70" height="70" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" /></svg>
                    </span>
                    <h5 className="text-center my-3 font-semibold text-2xl leading-tight capitalize">Details and product description</h5>
                    <p className="text-base leading-normal text-slate-600">{product.details}</p>
                </TabsContent>
                <TabsContent value="reviews">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-16 items-center">
                        <div>
                            <div className="grid grid-cols-2 gap-10 items-center">
                                <div>
                                    <h4 className="sm:text-6xl text-4xl font-bold leading-tight text-center">5</h4>
                                    <span className="flex justify-center">
                                        {
                                            ["★", "★", "★", "★", "★"].map((e, i) => (
                                                <span key={i} className="block text-yellow-500 text-2xl">{e}</span>
                                            ))
                                        }
                                    </span>
                                    <span className="flex items-center justify-center gap-2 mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#868686" width="25" height="25" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" /></svg>
                                        <span className="block text-[#868686] sm:text-base text-sm">81 all opinions</span>
                                    </span>
                                </div>
                                <div>
                                    {
                                        [["★", "w-[2%]"], ["★", "w-[15%]"], ["★", "w-[10%]"], ["★", "w-[35%]"], ["★", "w-[60%]"]].map(([stars, width], i) => (
                                            <div key={i} className="flex gap-2 items-center">
                                                <span className="block text-yellow-500 text-base">{stars}</span>
                                                <span className="block text-black text-sm">{++i}</span>
                                                <span className="h-[2px] w-[60%] bg-[#dbdbdb] relative">
                                                    <span className={`h-[2px] ${width} bg-yellow-500 top-0 left-0 right-0 bottom-0 absolute`}></span>
                                                </span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <Reviews />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default ProductDetail;
