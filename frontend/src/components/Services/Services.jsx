import React from "react";
import Img1 from "../../assets/website/img1.png";
import Img2 from "../../assets/website/img2.png";
import Img3 from "../../assets/website/img3.png";
import Img4 from "../../assets/website/img4.png";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    name: "DevotionDrape",
    description:
      "The image depicts a beautifully crafted red dress adorned with a captivating crown, symbolizing the goddess's royal status and benevolent presence.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "ElysianGown",
    description:
      "Each piece is unique and beautifully made, showcasing true artistry.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img3,
    name: "DivineCrimson",
    description:
      "this design bring a unique charm and elegance to any space.",
    aosDelay: "500",
  },
  {
    id: 3,
    img: Img4,
    name: "MajestyGem",
    description:
      "This resplendent crown combines luxurious cream and rich red fabrics, intricately woven together to create a stunning tapestry of colors.",
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <>  
    <span id="services"></span>
    <div className="py-10">
      <div className="container">
        {/* header title */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Best Designs For You
          </h1>
        </div>
        {/* Services Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 md:gap-5 place-items-center">
          {ServicesData.map((data, index) => {
            return (
              <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay} 
              key={index} >
                {/* img section */}
                <div>
                  <img
                    src={data.img}
                    alt=""
                    className="max-w-[200px] block mx-auto 
                  hover:scale-105 hover:rotate-6 duration-300"
                  />
                </div>
                {/* text section */}
                <div className="p-4 text-center">
                    <h1 className="text-xl font-bold">{data.name}</h1>
                    <p className="text-gray-500 hover:text-primary duration-300 text-sm line-clamp-2">{data.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
};

export default Services;
