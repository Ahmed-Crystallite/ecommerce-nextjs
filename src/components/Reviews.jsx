"use client";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/Animated-List";
import Image from "next/image";
import Avater from "media/avater/1.png"

let notifications = [
  {
    name: "John Doe",
    ratings: [
      {
        stars: "★★★★★",
        colors: ["text-yellow-500", "text-yellow-500"]
      }
    ],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
    icon: Avater,
    color: "#00C9A7",
  },
  {
    name: "John Doe",
    ratings: [
      {
        stars: "★★★★★",
        colors: ["text-yellow-500", "text-yellow-500", "text-yellow-500","text-yellow-500"]
      }
    ],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
    icon: Avater,
    color: "#FFB800",
  },
  {
    name: "John Doe",
    ratings: [
      {
        stars: "★★★★★",
        colors: ["text-yellow-500", "text-yellow-500","text-yellow-500","text-yellow-500","text-yellow-500"]
      }
    ],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
    icon: Avater,
    color: "#FF3D71",
  },
  {
    name: "John Doe",
    ratings: [
      {
        stars: "★★★★★",
        colors: ["text-yellow-500", "text-yellow-500", "text-yellow-500"]
      }
    ],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
    icon: Avater,
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, ratings }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-2xl py-4 ps-4 pe-2",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="grid grid-cols-12 gap-3">
        <div
          className="relative lg:col-span-2 md:col-span-3 sm:col-span-2 col-span-3 flex size-14 p-0 rounded-full items-center justify-center"
          style={{
            backgroundColor: color,
          }}
        >
          <Image src={icon} alt="icons" className="rounded-full absolute w-[90%] h-[90%] object-cover object-right-top" />
        </div>
        <div className="lg:col-span-10 md:col-span-9 sm:col-span-10 col-span-9 flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
          </figcaption>
          {ratings && ratings.map((e, i) => (
            <span key={i} className="text-xl">
              {e.stars.split('').map((star, i) => (
                <span key={i} className={e.colors[i] || "text-[#dbdbdb]"}>{star}</span>
              ))}
            </span>
          ))}
          <p className="sm:text-sm text-xs font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function Reviews({
  className,
}) {
  return (
    <div
      className={cn(
        "relative flex h-[350px] w-full flex-col sm:p-6 p-2 overflow-hidden",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
