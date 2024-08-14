import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import FooterBg from "../../assets/website/cake2.jpg";

const FooterLinks = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
    {
      title: "Blog",
      link: "/#blog",
    },
  ];

  const bgImage = {
    backgroundImage: `url(${FooterBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "400px",
    width: "100%",
  };
const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
        <div className="bg-black/10 min-h-[400px]">
            <div className="container grid md:grid-cols-3 pb-20 pt-5">
                {/* company details */}
                <div className="py-8 px-4">
                    <a href="#" className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive">Cotton Bastra</a>
                    <p className="pt-4">{" "}
                    A short, impactful line that encapsulates your brand: "Celebrating the art of handmade craftsmanship," or "Bringing tradition to life, one piece at a time."</p>
                    <a
              href="https://www.youtube.com/@CraftingwithRachna"
              target="_blank"
              className="inline-block bg-[#18c5bc] py-2 px-4 mt-5 text-sm rounded-full"
            >
              Visit our YouTube Channel
            </a>               
                </div>
                {/* footer links */}
                <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                  {/* first col links */}
                  <div className="py-8 px-4">
                    <h1 className="text-xl font-semibold sm:text-left mb-3">Footer Links</h1>
                    <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
                  </div>
                  {/* second col links */}
                  <div className="py-8 px-4">
                    <h1 className="text-xl font-semibold sm:text-left mb-3">Quick Links</h1>
                    <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
                  </div>
                  {/* company adress section */}
                  <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Address
              </h1>
              <div>
                <p className="mb-3">Bhubaneswer, Odisha</p>
                <p>cottonbastra@gmail.com</p>
                <p>+91 1234567890</p>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
            </div>

        </div>
      

    </div>
  )
}

export default Footer