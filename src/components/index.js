import dynamic from "next/dynamic"
const Header = dynamic(() => import('./Header'))
const Hero = dynamic(() => import('./Hero'))
const Marquee = dynamic(() => import('./magicui/Marquee'))
const MarqueeAnimatedList = dynamic(() => import('./magicui/Animated-List'))
const Card = dynamic(() => import('./products/Card'))
const Reviews = dynamic(() => import('./Reviews'))
const CartContext = dynamic(() => import('./cart/CartContext'))
const SearchInput = dynamic(() => import('./SearchInput'))
import { Button } from "./ui/Button"
import { Checkbox } from "./ui/Checkbox"
import { Combobox } from "./ComboBox"
import { Slider } from "./ui/Slider"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "./ui/Tabs"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "./ui/Breadcrumb"
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "./ui/Popover"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut
} from "./ui/Command"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "./ui/Dialog"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "./ui/Tooltip"

export {
    Header,
    Hero,
    Marquee,
    MarqueeAnimatedList,
    Card,
    CartContext,
    Button,
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    Reviews,
    SearchInput,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Combobox,
    Checkbox,
    Slider,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
};