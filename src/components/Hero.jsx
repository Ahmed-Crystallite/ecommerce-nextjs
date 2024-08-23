import { Marquee } from "./index";
import Image from "next/image";
import Banner1 from "media/banner/1.png"
import Banner2 from "media/banner/2.png"
import Banner3 from "media/banner/3.png"
import Banner4 from "media/banner/4.png"
const Hero = () => {
    return (
        <section>
            <div className="container">
                <div className="relative overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:50s]">
                        {
                            [Banner1, Banner2, Banner3, Banner4, Banner1, Banner2, Banner3, Banner4].map((e, i) => (
                                <div key={i}>
                                    <Image src={e} alt="banner" width={1500} draggable={false} className="w-full md:max-w-full max-w-[300px]" />
                                </div>
                            ))
                        }
                    </Marquee>
                </div>
            </div>
        </section>
    )
}
export default Hero;