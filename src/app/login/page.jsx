"use client"
import Link from "next/link";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components";
import { Input } from "@/components";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const formSchema = z.object({
  email: z.string().email("Please use a valid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(20, "Password must be no more than 20 characters.")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLogin = async (user) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      router.push("/profile");
    } catch (error) {
      console.log("Login failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const { email, password } = form.getValues();
    setButtonDisabled(!(email.length > 0 && password.length > 0));
  }, [form.watch("email"), form.watch("password")]);

  return (
    <section>
      <div className="lg:py-[100px] md:py-[80px] py-[60px]">
        <div className="container">
          <div className="w-full max-w-xl mx-auto bg-slate-100 px-10 py-[40px] rounded-md">
            <Link href="/" className="flex items-center gap-x-2 mb-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45.77"
                height="35.001"
                viewBox="0 0 45.77 35.001"
              >
                <path
                  id="noun_cloth_2129414"
                  d="M437.579,459a1.344,1.344,0,0,1-1.3-.867l-3.26-8.556H418.69a2.69,2.69,0,0,1-2.69-2.692V426.692A2.691,2.691,0,0,1,418.7,424h18.843a1.346,1.346,0,0,1,1.218.773l4.07,8.65h16.252a2.69,2.69,0,0,1,2.69,2.692v20.192a2.691,2.691,0,0,1-2.7,2.692Zm-.895-32.308H418.7s0,6.731,0,20.192h27.494Zm7.41,9.423,5.432,11.542a1.346,1.346,0,0,1-.332,1.586l-8.073,7.064h17.952s0-6.731,0-20.192Zm-5.986,19.251,6.617-5.79H435.9Z"
                  transform="translate(-416 -424)"
                ></path>
              </svg>
              <h1 className="md:text-4xl [text-shadow:_5px_5px_5px_rgb(0_0_0_/_40%)] sm:text-2xl text-xl leading-normal font-semibold uppercase">
                shop<span className="font-normal">land</span>
              </h1>
            </Link>
            <h2 className="md:text-3xl text-2xl leading-normal font-medium mb-5 text-center">
              {loading ? "Processing..." : "Login Form"}
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onLogin)}
                className="grid grid-cols-1 gap-5"
              >
                <div className="grid grid-cols-1 gap-5 items-center">
                  {["email", "password"].map((fieldName) => (
                    <FormField
                      key={fieldName}
                      control={form.control}
                      name={fieldName}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {fieldName.charAt(0).toUpperCase() +
                              fieldName.slice(1)}
                            <span className="text-gray-700">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={`Type ${fieldName}`}
                              {...field}
                              className="border-[#707070] py-5 px-5"
                              type={
                                fieldName === "password" ? "password" : "text"
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
                <Button
                  type="submit"
                  className="px-[2rem] text-white hover:bg-yellow-500 mt-4 py-6 text-lg hover:text-white"
                  disabled={buttonDisabled || loading}
                >
                  {loading ? "Loading..." : "Submit"}
                </Button>
              </form>
            </Form>
            <div className="mt-5 flex flex-wrap items-center gap-2 text-red-400 font-medium">
              <p>Please Go There If You're Not A Member Of Shopland</p>
              <Link
                href="/signup"
                className="underline text-gray-700 hover:no-underline"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
