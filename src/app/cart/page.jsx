"use client"
import Image from "next/image";
import { useCart } from "@/components/cart/CartContext";
const Cart = () => {
    const { cartItems, updateQuantity } = useCart();

    const handleQuantityChange = (id, quantity) => {
        if (quantity > 0) {
            updateQuantity(id, quantity);
        }
    };

    return (
        <div className="container">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id} className="pt-[80px] flex items-center justify-between">
                        <div>
                        <Image src={item.image} alt={item.title} className="w-full max-w-[100px] h-full max-h-[100px] rounded-full object-cover object-left-top" />
                        <h3>{item.title}</h3>
                        </div>
                        <p>Price: ₹{item.amount}</p>
                        <div>
                            <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
