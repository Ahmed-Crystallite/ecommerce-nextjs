"use client"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
    Card,
    Combobox,
    Checkbox,
    Slider,
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent
} from "@/components";
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
import { useState } from "react";
const Products = () => {
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState([0, 10000]);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [showProducts, setShowProducts] = useState("all");
    const [sortBy, setSortBy] = useState("mostrelevant");
    const filterProducts = (products, selectedTypes, selectedPrice, selectedSize, selectedColor, showProducts, sortBy) => {
        const filteredProducts = products.filter(product => {
            const matchesType = selectedTypes.length ? selectedTypes.some(type => product.title.toLowerCase().includes(type.toLowerCase())) : true;
            const matchesPrice = product.amount >= selectedPrice[0] && product.amount <= selectedPrice[1];
            const matchesSize = selectedSize ? product.size === selectedSize : true;
            const matchesColor = selectedColor ? product.color === selectedColor : true;
            return matchesType && matchesPrice && matchesSize && matchesColor;
        });
        const filteredByCollection = showProducts === "all" ? filteredProducts : filteredProducts.filter(product => product.collection === showProducts);
        const sortedProducts = filteredByCollection.sort((a, b) => {
            switch (sortBy) {
                case "lowtohigh":
                    return a.amount - b.amount;
                case "hightolow":
                    return b.amount - a.amount;
                case "mostrelevant":
                    return a.relevance - b.relevance;
                default:
                    return 0;
            }
        });
        return sortedProducts;
    };
    const handleTypeChange = (type) => {
        setSelectedTypes((prevSelectedTypes) =>
            prevSelectedTypes.includes(type)
                ? prevSelectedTypes.filter((t) => t !== type)
                : [...prevSelectedTypes, type]
        );
    };

    const handlePriceChange = (priceRange) => {
        setSelectedPrice(priceRange);
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handleShowProductsChange = (value) => {
        setShowProducts(value);
    };

    const handleSortByChange = (value) => {
        setSortBy(value);
    };

    const products = [
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
    return (
        <section>
            <div className="py-[40px]">
                <div className="container">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>All Products</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-3">
                            <div className="border p-8 border-[#e6e6e6] mt-[40px]">
                                <span className="block mb-8 text-sm font-semibold">Product type</span>
                                {
                                    ["Shirt", "Jacket", "Shoes", "Smart Watch", "Smart Band", "Fitness Band", "Fitness Earbuds", "AirPods"].map((type, i) => (
                                        <Checkbox key={i} label={true} title={type} onChange={() => handleTypeChange(type)} />
                                    ))
                                }
                            </div>
                            <div className="border p-8 border-[#e6e6e6] mt-[40px]">
                                <span className="block mb-8 text-sm font-semibold">Price</span>
                                <Slider defaultValue={[3000, 5000]} size="1" max={10000} step={2} onValueChange={handlePriceChange} />
                            </div>
                            <div className="border p-8 border-[#e6e6e6] mt-[40px]">
                                <span className="block mb-8 text-sm font-semibold">Size</span>
                                <Tabs className="w-full" value={selectedSize} onValueChange={handleSizeChange}>
                                    <TabsList className="flex flex-wrap justify-start gap-2">
                                        {["XS", "S", "M", "L", "XL", "XXL"].map((size, i) => (
                                            <TabsTrigger key={i} value={size}>
                                                {size}
                                            </TabsTrigger>
                                        ))}
                                    </TabsList>
                                    {
                                        ["XS", "S", "M", "L", "XL", "XXL"].map((e, i) => (
                                            <TabsContent key={i} value={e}>{e}</TabsContent>
                                        ))
                                    }
                                </Tabs>
                            </div>
                            <div className="border p-8 border-[#e6e6e6] mt-[40px]">
                                <span className="block mb-8 text-sm font-semibold">Color</span>
                                <Tabs className="w-full" value={selectedColor} onValueChange={handleColorChange}>
                                    <TabsList className="flex flex-wrap justify-start gap-2">
                                        {["blue", "red", "tan", "gray", "white", "black"].map((color, i) => (
                                            <TabsTrigger key={i} value={color}>
                                                <span className={`block w-[30px] h-[30px] bg-${color}`} />
                                            </TabsTrigger>
                                        ))}
                                    </TabsList>
                                </Tabs>
                            </div>
                        </div>
                        <div className="col-span-9">
                            <div className="flex items-center gap-10 justify-end">
                                <Combobox
                                    title="Show products:"
                                    collections={[
                                        { value: "all", label: "All" },
                                        { value: "trending", label: "Trending" },
                                        { value: "newarrivals", label: "New Arrivals" },
                                        { value: "toprated", label: "Top Rated" },
                                        { value: "featured", label: "Featured" },
                                    ]}
                                    onChange={handleShowProductsChange}
                                />
                                <Combobox
                                    title="Sort by:"
                                    collections={[
                                        { value: "mostrelevant", label: "Most Relevant" },
                                        { value: "leastrelevant", label: "Least Relevant" },
                                        { value: "lowtohigh", label: "Low to High" },
                                        { value: "hightolow", label: "High to Low" },
                                        { value: "highestrated", label: "Highest Rated" },
                                        { value: "lowestrated", label: "Lowest Rated" },
                                        { value: "discount", label: "Discount" },
                                    ]}
                                    onChange={handleSortByChange}
                                />
                            </div>
                            <Card
                                gridsColumn="md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
                                elipses="line-clamp-1"
                                products={filterProducts(products, selectedTypes, selectedPrice, selectedSize, selectedColor)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products;