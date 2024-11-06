"use client"
import axios from "axios"
import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const router = useRouter()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const logout = async () => {
    try {
      await axios.get("/api/users/logout")
      router.push("/login")
    } catch (error) {
      console.log(error.message)
    }
  }

  const getUserDetails = async () => {
    setLoading(true)
    try {
      const res = await axios.get("/api/users/me")
      console.log(res.data)
      setData([
        res.data.data._id,
        res.data.data.username,
        res.data.data.email,
        res.data.data.isVerified,
      ])
    } catch (error) {
      console.log("Error fetching user details:", error.message)
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="py-[100px]">
      <div className="container">
        <h1 className="text-[40px] font-semibold flex items-center gap-2">
          <span className="block border-2 border-black py-1 px-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 448 512"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
            </svg>
          </span>
          <span className="block">Profile</span>
        </h1>
        <div className="my-5">
        {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <div className="sm:text-[20px] text-[18px] leading-tight font-medium">
          <Link href={`/profile/${data[0]}`} className="hover:underline mb-2 block">User Id: {data[0]}</Link>
          <span className="block mb-2">Username: {data[1]}</span>
          <span className="block mb-2">Email: {data[2]}</span>
          <span className="block mb-2">Verified: {data[3] ? "Yes" : "No"}</span>
        </div>
      ) : (
        <p>No user details available.</p>
      )}
        </div>
        <div className="flex items-center gap-x-5">
        <button
          onClick={getUserDetails}
          className="whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow bg-primary/90 py-2 hover:bg-slate-600 text-white md:text-lg text-base leading-normal font-medium block w-max h-12 px-6 mt-5 rounded-lg"
        >
          GetUser Details
        </button>
        <button
          onClick={logout}
          className="whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow hover:bg-primary/90 py-2 bg-slate-600 text-white md:text-lg text-base leading-normal font-medium block w-max h-12 px-6 mt-5 rounded-lg"
        >
          Logout
        </button>

        </div>
      </div>
    </div>
  )
}
