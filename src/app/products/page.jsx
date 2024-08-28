"use client";
import { useEffect, useState } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
    Button,
    Card,
    Combobox,
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
    FilteredData,
    Popover,
    PopoverContent,
    PopoverTrigger,
    SearchInput
} from "@/components";
import Product1 from "media/products/1.png";
import Product2 from "media/products/2.png";
import Product3 from "media/products/3.png";
import Product4 from "media/products/4.png";
import Product5 from "media/products/5.png";
import Product6 from "media/products/6.png";
import Product7 from "media/products/7.png";
import Product8 from "media/products/8.png";
import Product9 from "media/products/9.png";
import Product10 from "media/products/10.png";
import Filter from "media/filter.png"
import Image from "next/image";
const Products = () => {
    const productsData = [
        { id: 1, image: Product1, title: "Men Navy Blue Solid Sweatshirt", desc: "United Colors of Benetton", amount: "2599", type: "Shirt" },
        { id: 2, image: Product2, title: "Men Black MAMGP T7 Sweat Sporty Jacket", desc: "Puma", amount: "7999", type: "Jacket" },
        { id: 3, image: Product3, title: "Men Black Action Parkview Lifestyle Shoes", desc: "Hush Puppies", amount: "6999", type: "Shoes" },
        { id: 4, image: Product4, title: "Women Black Solid Lightweight Leather Jacket", desc: "BARESKIN", amount: "9999", type: "Jacket" },
        { id: 5, image: Product5, title: "Women Blue Solid Shirt Dress", desc: "SASSAFRAS", amount: "5200", type: "Shirt" },
        { id: 6, image: Product6, title: "Unisex Silver-Toned Series 3 Smart Watch", desc: "Apple", amount: "31999", type: "Smart Watch" },
        { id: 7, image: Product7, title: "Unisex Black & Green Reflex 2.0 Smart Band", desc: "Fastrack", amount: "1999", type: "Smart Band" },
        { id: 8, image: Product8, title: "Unisex Black Galaxy Fit Fitness Band", desc: "Samsung", amount: "9990", type: "Fitness Band" },
        { id: 9, image: Product9, title: "Gear IconX Black Cord-free Fitness Earbuds", desc: "Samsung", amount: "13990", type: "Fitness Earbuds" },
        { id: 10, image: Product10, title: "White 2nd Gen AirPods with Charging Case", desc: "Apple", amount: "14999", type: "AirPods" }
    ];

    const [filteredProducts, setFilteredProducts] = useState(productsData);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 50000]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleTypeChange = (selectedTypes) => {
        setSelectedTypes(selectedTypes);
        applyFilters();
    };

    const handleSliderChange = (values) => {
        setPriceRange(values);
        applyFilters();
    };
    const handleSearch = (query) => {
        const lowerCaseQuery = query.toLowerCase();
        const filtered = productsData.filter(product => {
            return product.title.toLowerCase().split(' ').some(word => word.includes(lowerCaseQuery));
        });
        setFilteredProducts(filtered);
    };
    const applyFilters = () => {
        setLoading(true);
        setTimeout(() => {
            const filtered = productsData.filter((product) => {
                const matchesType =
                    selectedTypes.length === 0 ||
                    selectedTypes.some(type =>
                        product.title.toLowerCase().includes(type.toLowerCase())
                    );

                const matchesPrice =
                    product.amount >= priceRange[0] && product.amount <= priceRange[1];

                return matchesType && matchesPrice;
            });

            setFilteredProducts(filtered);
            setLoading(false);
        }, 1500); // Show loading spinner for 3 seconds
    };

    useEffect(() => {
        applyFilters();
    }, [selectedTypes, priceRange]);
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
                        <div className="lg:col-span-3 col-span-12">
                            <div className="lg:hidden block">
                                <Drawer>
                                    <DrawerTrigger className="my-5 text-center border-2 py-2 hover:bg-slate-200 transition-all duration-500 ease-in-out w-full">Add Filter</DrawerTrigger>
                                    <DrawerContent>
                                        <DrawerHeader>
                                            <DrawerTitle>Filters</DrawerTitle>
                                            <DrawerDescription>
                                                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 h-[300px] overflow-y-scroll items-start gap-x-5">
                                                    <FilteredData
                                                        type="checkbox"
                                                        title="Product Type"
                                                        dataCheckBox={["Shirt", "Jacket", "Shoes", "Smart Watch", "Smart Band", "Fitness Band", "Fitness Earbuds", "AirPods"]}
                                                        selectedTypes={selectedTypes}
                                                        onFilterChange={handleTypeChange}
                                                    />
                                                    <FilteredData
                                                        type="slider"
                                                        title="Price"
                                                        onFilterChange={handleSliderChange}
                                                    />
                                                    <FilteredData
                                                        title="Size"
                                                        data={["XS", "S", "M", "L", "XL", "XXL"]}
                                                        onFilterChange={() => { }}
                                                    />
                                                    <FilteredData
                                                        type="colors"
                                                        title="Color"
                                                        data={["bg-primary", "bg-red-600", "bg-[#d4be8d]", "bg-[#838383]", "bg-[#f3f3f3]", "bg-[#0f73ad]"]}
                                                        onFilterChange={() => { }}
                                                    />
                                                </div>
                                            </DrawerDescription>
                                        </DrawerHeader>
                                        <DrawerFooter>
                                            <DrawerClose>
                                                <Button variant="primary" className="bg-yellow-500 w-full text-lg">Apply</Button>
                                            </DrawerClose>
                                        </DrawerFooter>
                                    </DrawerContent>
                                </Drawer>
                            </div>
                            <div className="lg:block hidden">
                                <FilteredData
                                    type="checkbox"
                                    title="Product Type"
                                    dataCheckBox={["Shirt", "Jacket", "Shoes", "Smart Watch", "Smart Band", "Fitness Band", "Fitness Earbuds", "AirPods"]}
                                    selectedTypes={selectedTypes}
                                    onFilterChange={handleTypeChange}
                                />
                                <FilteredData
                                    type="slider"
                                    title="Price"
                                    onFilterChange={handleSliderChange}
                                />
                                <FilteredData
                                    title="Size"
                                    data={["XS", "S", "M", "L", "XL", "XXL"]}
                                    onFilterChange={() => { }}
                                />
                                <FilteredData
                                    type="colors"
                                    title="Color"
                                    data={["bg-primary", "bg-red-600", "bg-[#d4be8d]", "bg-[#838383]", "bg-[#f3f3f3]", "bg-[#0f73ad]"]}
                                    onFilterChange={() => { }}
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-9 col-span-12">
                            <div>
                                <SearchInput
                                    searchQuery={searchQuery}
                                    setSearchQuery={setSearchQuery}
                                    onSearch={handleSearch}
                                />
                            </div>
                            <div className="md:hidden block">
                                <Popover>
                                    <PopoverTrigger className="block w-full">
                                        <Image src={Filter} alt="icons" className="block ms-auto" />
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <Combobox
                                            title="Show products:"
                                            collections={[
                                                { value: "all", label: "All" },
                                                { value: "shirt", label: "Shirt" },
                                                { value: "jacket", label: "Jacket" },
                                                { value: "shoes", label: "Shoes" },
                                                { value: "smart watch", label: "Smart Watch" },
                                                { value: "smart band", label: "Smart Band" },
                                                { value: "fitness band", label: "Fitness Band" },
                                                { value: "fitness earbuds", label: "Fitness Earbuds" },
                                                { value: "airpods", label: "AirPods" }
                                            ]}
                                            onFilterChange={() => { }}
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
                                                { value: "discount", label: "Discount" }
                                            ]}
                                            onFilterChange={() => { }}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div className="md:flex md:items-center md:gap-10 md:justify-end hidden">
                                <Combobox
                                    title="Show products:"
                                    collections={[
                                        { value: "all", label: "All" },
                                        { value: "shirt", label: "Shirt" },
                                        { value: "jacket", label: "Jacket" },
                                        { value: "shoes", label: "Shoes" },
                                        { value: "smart watch", label: "Smart Watch" },
                                        { value: "smart band", label: "Smart Band" },
                                        { value: "fitness band", label: "Fitness Band" },
                                        { value: "fitness earbuds", label: "Fitness Earbuds" },
                                        { value: "airpods", label: "AirPods" }
                                    ]}
                                    onFilterChange={() => { }}
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
                                        { value: "discount", label: "Discount" }
                                    ]}
                                    onFilterChange={() => { }}
                                />
                            </div>
                            {loading ? (
                                <div className="bg-transparent flex items-center justify-center h-screen gap-5">
                                    <h3 className="text-6xl font-semibold">Loading</h3>
                                    <span className="relative flex h-10 w-10">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-10 w-10 bg-sky-500"></span>
                                    </span>
                                </div>
                            ) : (
                                <Card
                                    products={filteredProducts}
                                    gridsColumn="md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
                                    elipses="line-clamp-1"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
