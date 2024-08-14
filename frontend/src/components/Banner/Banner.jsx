import React from 'react'
import BannerImg from "../../assets/website/banner.png"
import BgTexture from "../../assets/website/background-texture.jpg"
import {GrSecure} from "react-icons/gr"
import { BiCrown } from "react-icons/bi";
import { BiSolidCake } from "react-icons/bi";
const bgImage={
    backgroundImage:`url(${BgTexture})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%"
}
const Banner = () => {
  return (
    <>  
    <span id="about"></span>  
<div style={bgImage}>
    <div className="container min-h-[500px] flex justify-center items-center py-12 sm-py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* image Section */}
            <div data-aos="zoom-in">
            <img src={BannerImg} alt="" className="max-w-[430px] w-full mx-auto spin drop-shadow-xl"/>
            </div>
            {/* Text Section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold font-cursive">Premium Cake Collection</h1>
                <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-5"> Premium Cake collection is a divine ensemble crafted with exquisite ingredients and unparalleled artistry. </p>
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-5">
                        <div data-aos="fade-up" className="flex items-center gap-3">
                            <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-200"/>
                            <span>Premiun Clothes</span>
                        </div>
                        <div data-aos="fade-up"
                      data-aos-delay="300" className="flex items-center gap-3">
                            <BiCrown className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-blue-200"/>
                            <span>Premiun Crown</span>
                        </div>
                        <div data-aos="fade-up"
                      data-aos-delay="500" className="flex items-center gap-3">
                            <BiSolidCake  className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-green-200"/>
                            <span>Delicious Cake</span>
                        </div>
                    </div>
                    <div data-aos="slide-left" className="border-l-4 border-primary/50 pl-4 space-y-3">
                        <h1 className="text-2xl font-semibold font-cursive">Cake Lover</h1>
                        <p className="text-gray-600 text-sm">
                            {" "}
                            Coding is like baking a cake; both require precise ingredients, careful planning, and a sprinkle of creativity to achieve a delicious result.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Banner
