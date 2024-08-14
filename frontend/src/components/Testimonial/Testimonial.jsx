import React from "react";
import Slider from "react-slick";

const TestimonialData = [
    {
      id: 1,
      name: "Disha",
      text: "The craftsmanship and attention to detail in Monalisa's work are simply outstanding.",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 2,
      name: "Monoj Kumar",
      text: "I am in awe of the quality and creativity in Monalisa’s handcrafted items. These are not just products",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 3,
      name: "Subhransu",
      text: "Monalisa’s handmade creations are exquisite. You can see the love and dedication that goes into every piece. I’m thrilled with my purchase!",
      img: "https://picsum.photos/104/104",
    },
    {
      id: 5,
      name: "Kuldip kor",
      text: "The level of skill and passion in Monalisa's handicrafts is remarkable. Every piece tells a story and adds a special touch to my home.",
      img: "https://picsum.photos/103/103",
    },
  ];

const Testimonial = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div className="py-14 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10">
          <h1  data-aos="fade-up" className="text-4xl font-bold font-cursive text-gray-800">
            Testimonials
          </h1>
        </div>
        {/* testimonials card section */}
        <div data-aos="zoom-in">
            <Slider {...settings}>
                {TestimonialData.map((data)=>{
                    return <div className="my-6" key={data.id}>
                        <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/20 relative">
                            {/* image section */}
                            <div className="mb-4">
                                <img src={data.img} alt="" className="rounded-full w-20 h-20" />
                            </div>
                            {/* content section*/}
                            <div className="flex flex-col items-center gap-4">
                                <div className="space-y-3">
                                    <p className="text-xs text-gray-500">{data.text}</p>
                                    <h1 className="tex-xl font-bold text-black/70 font-cursive2">{data.name}</h1>
                                </div>
                            </div>
                            <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                        </div>
                    </div>
                })}

            </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
