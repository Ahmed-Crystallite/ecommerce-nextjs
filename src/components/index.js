import dynamic from "next/dynamic"
const Header = dynamic(() => import('./Header'))
const Hero = dynamic(() => import('./Hero'))
const Marquee = dynamic(() => import('./magicui/Marquee'))
const MarqAnimatedListuee = dynamic(() => import('./magicui/Animated-List'))
const Card = dynamic(() => import('./products/Card'))
const Reviews = dynamic(() => import('./Reviews'))
const CartContext = dynamic(() => import('./cart/CartContext'))
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs"
const SearchInput = dynamic(() => import('./SearchInput'))
export { Header, Hero, Marquee, MarqAnimatedListuee, Card, CartContext, Tabs, TabsList, TabsTrigger, TabsContent, Reviews, SearchInput };