import React from "react";
import WelcomeImg from "../../assets/nameste.png";

const Home = () => {
  return (
    <div className="min-h-[450px] sm:min-h[500px] bg-brandDark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* text content section */}
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h1 
            data-aos="fade-up"
            data-aos-once="true"
            className="text-5xl sm:text-4xl lg:text-6xl font-bold">
              Celebrate individuality with our unique handcrafted{" "}
              <span 
              data-aos="zoom-out" data-aos-delay="300"
              className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive">
                cotton bastra
              </span>{" "}
              , designs.
            </h1>
            <div data-aos="fade-up" data-aos-delay="400">
              <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                Wear And Eat
              </button>
            </div>
          </div>
          {/* Image section */}
          <div data-aos="zoom-in"
              data-aos-duration="300" className="min-h-[350px] flex justify-center items-center relative order-1 sm:order-2 ">
            <img
             data-aos-once="true"
              src={WelcomeImg}
              alt="Welcome"
              className="w-[200px] sm:w-[450px] sm:scale-125 mx-auto spin "
            />
          </div>
          <div data-aos="fade-right"
                data-aos-offset="0" className="bg-gradient-to-r from-primary to-secondary absolute bottom-40 right-20 p-3 rounded-xl">
            Welcome
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
