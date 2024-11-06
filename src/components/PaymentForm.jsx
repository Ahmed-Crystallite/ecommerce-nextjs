"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "./ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/Form";
import { Input } from "./ui/Input";
import { useRouter } from "next/navigation"
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/Select"
const formSchema = z.object({
  name: z.string().min(1, {
    message: "name cannot be empty",
  }),
  phone: z.string({
    required_error: "phone is required",
    invalid_type_error: "phone must be a string",
  }).min(7, {
    message: "phone must be at least 7 characters.",
  }).max(14, {
    message: "phone must be at most 14 characters.",
  }).regex(/^\d+$/, {
    message: "phone number can only contain digits.",
  }),
  email: z.string().email({
    message: "please use a valid email",
  }),
  address: z.string().min(1, {
    message: "address is required",
  }),
  city: z.string().min(1, {
    message: "city is required",
  }),
  zipcode: z.string({
    required_error: "postal code is required",
    invalid_type_error: "postal code must be a string",
  }).min(4, {
    message: "postal code must be at least 4 characters.",
  }).max(7, {
    message: "postal code must be at most 7 characters.",
  }).regex(/^\d+$/, {
    message: "postal code number can only contain digits.",
  }),
  country: z.string().min(1, {
    message: "country is required",
  }),
  message: z.string(),
});

const PaymentForm = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      zipcode: "",
      country: "",
      message: "",
    },
  })
  const handleSubmit = async (values) => {
    setLoading(true)
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      router.push('/')
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="grid grid-cols-1 gap-5">
        <div className="grid grid-cols-2 gap-5 items-center">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address <span className="text-gray-700">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="Type Email" {...field} className="border-[#707070] rounded-full py-5 px-5" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type Address <span className="text-gray-700">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="Type Address" {...field} className="border-[#707070] rounded-full py-5 px-5" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-5 items-center">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name <span className="text-gray-700">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="Type First Name" {...field} className="border-[#707070] rounded-full py-5 px-5" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City <span className="text-gray-700">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="Type City" {...field} className="border-[#707070] rounded-full py-5 px-5" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-5 items-center">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name <span className="text-gray-700">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="Type Last Name" {...field} className="border-[#707070] rounded-full py-5 px-5" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zipcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postal code / ZIP <span className="text-gray-700">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="Type Postal code / ZIP" {...field} className="border-[#707070] rounded-full py-5 px-5" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-5">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone <span className="text-gray-700">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="(000) 000-0000" {...field} className="border-[#707070] rounded-full py-5 px-5" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country <span className="text-gray-700">*</span></FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="border-[#707070] rounded-full py-5 px-5">
                      <SelectValue placeholder="Select Your Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>North America</SelectLabel>
                        <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                        <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                        <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                        <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                        <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                        <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Europe & Africa</SelectLabel>
                        <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                        <SelectItem value="cet">Central European Time (CET)</SelectItem>
                        <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                        <SelectItem value="west">
                          Western European Summer Time (WEST)
                        </SelectItem>
                        <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                        <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Asia</SelectLabel>
                        <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                        <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                        <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                        <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                        <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                        <SelectItem value="ist_indonesia">
                          Indonesia Central Standard Time (WITA)
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Australia & Pacific</SelectLabel>
                        <SelectItem value="awst">
                          Australian Western Standard Time (AWST)
                        </SelectItem>
                        <SelectItem value="acst">
                          Australian Central Standard Time (ACST)
                        </SelectItem>
                        <SelectItem value="aest">
                          Australian Eastern Standard Time (AEST)
                        </SelectItem>
                        <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                        <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>South America</SelectLabel>
                        <SelectItem value="art">Argentina Time (ART)</SelectItem>
                        <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                        <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                        <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="px-[2rem] text-white hover:bg-yellow-500 rounded-full mt-5 hover:text-white">
          {loading ? "Loading..." : "Submit"}
        </Button>
      </form>
    </Form>
  )
}
export default PaymentForm;