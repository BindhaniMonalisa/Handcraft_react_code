import React from 'react'
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import BgPng from "../../assets/website/handcraft.png";

const backgroundStyle = {
  backgroundImage: `url(${BgPng})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Appstore = () => {
  return (
    <>
    <div className="py-14" style={backgroundStyle}>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          {/* text Section */}
          <div 
          data-aos="fade-up"
          data-aos-duration="300"
          className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white/90 pl-3">Hand Craft is available for Android and IOS</h1>
          {/* image Section */}
          <div className="flex flex-wrap justify-center sm:justify-start items-center">
                <a href="#">
                  <img
                    src={PlayStoreImg}
                    alt="Play store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={AppStoreImg}
                    alt="App store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Appstore
