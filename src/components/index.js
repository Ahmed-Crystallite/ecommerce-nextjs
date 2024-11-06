import dynamic from "next/dynamic";
const Header = dynamic(() => import("./Header"));
const Hero = dynamic(() => import("./Hero"));
const Marquee = dynamic(() => import("./magicui/Marquee"));
const MarqueeAnimatedList = dynamic(() => import("./magicui/Animated-List"));
const Card = dynamic(() => import("./products/Card"));
const Reviews = dynamic(() => import("./Reviews"));
const CartContext = dynamic(() => import("./cart/CartContext"));
const SearchInput = dynamic(() => import("./SearchInput"));
const FilteredData = dynamic(() => import("./products/filters/FilteredData"));
const PaymentForm = dynamic(() => import("./PaymentForm"));
const Featured = dynamic(() => import("./Featured"));
const WhyChoose = dynamic(() => import("./WhyChoose"));
const Collections = dynamic(() => import("./Collections"));
const Footer = dynamic(() => import("./Footer"));
import { Button } from "./ui/Button";
import { Checkbox } from "./ui/Checkbox";
import { Combobox } from "./ComboBox";
import { Slider } from "./ui/Slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/Breadcrumb";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/Popover";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./ui/Command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/Dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/Tooltip";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/Sheet";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/Drawer";
import { Toaster } from "./ui/Toaster";
import { Toast } from "./ui/Toast";
import { Label } from "./ui/Label";
import { Input } from "./ui/Input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/Form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/Select";
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
  TooltipTrigger,
  FilteredData,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Toaster,
  Toast,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Label,
  Input,
  PaymentForm,
  Featured,
  WhyChoose,
  Collections,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Footer,
};
