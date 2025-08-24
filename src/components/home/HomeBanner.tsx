import ArcImageGallery from "./ArcImageGallery";
import Hero from "./Hero";

import starIcon from "../../assets/icons/star.svg";
import Heading from "../headers/Heading";

const stats = [
  { number: "400+", label: "Candidates Supported" },
  { number: "2027", label: "Election Cycle" },
  { number: "36", label: "State Reached" },
  { number: "100%", label: "Committed to change" },
];

const HomeBanner = () => {
  return (
    <section className="container">
      <section className="pt-8 xl:pb-32 relative">
        <img
          src={starIcon}
          alt="star icon"
          className=" absolute lg:top-[27%] left-6 lg:left-12"
        />
        <img
          src={starIcon}
          alt="star icon"
          className=" absolute right-12 bottom-6"
        />

        <Hero />
        <ArcImageGallery />
      </section>
      <ul className="grid md:grid-cols-2 lg:grid-cols-4 mt-7 gap-7">
        {stats.map(({ number, label }, index) => (
          <li
            key={index}
            className=" min-w-[295px] h-[120px] rounded-lg shadow-[0_0_40px_0_#0000000D] py-6"
          >
            <Heading variant="h3" className="text-center">
              {number}
            </Heading>
            <p className="text-center font-light mt-2">{label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomeBanner;
