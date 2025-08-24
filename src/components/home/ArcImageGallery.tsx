import image1 from "../../assets/images/persons_1.jpg";
import image2 from "../../assets/images/persons_2.jpg";
import image3 from "../../assets/images/persons_3.jpg";
import image4 from "../../assets/images/persons_4.jpg";
import image5 from "../../assets/images/persons_5.jpg";

const ArcImageGallery = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-9 lg:justify-between lg:relative lg:-top-14">
      <img
        src={image1}
        alt="image 1"
        className="w-[45%] sm:w-[200px] md:w-[180px] lg:w-[220px] h-auto lg:h-[304px] object-cover rounded-tl-2xl rounded-br-2xl"
      />
      <img
        src={image2}
        alt="image 2"
        className="w-[45%] sm:w-[200px] md:w-[180px] lg:w-[220px] h-auto lg:h-[304px] object-cover rounded-tl-2xl rounded-br-2xl lg:translate-y-[90px]"
      />
      <img
        src={image3}
        alt="image 3"
        className="w-[90%] sm:w-[250px] md:w-[200px] lg:w-[220px] h-auto lg:h-[304px] object-cover rounded-tl-2xl rounded-br-2xl lg:translate-y-[174px]"
      />
      <img
        src={image4}
        alt="image 4"
        className="w-[45%] sm:w-[200px] md:w-[180px] lg:w-[220px] h-auto lg:h-[304px] object-cover rounded-tl-2xl rounded-br-2xl lg:translate-y-[90px]"
      />
      <img
        src={image5}
        alt="image 5"
        className="w-[45%] sm:w-[200px] md:w-[180px] lg:w-[220px] h-auto lg:h-[304px] object-cover rounded-tl-2xl rounded-br-2xl"
      />
    </div>
  );
};

export default ArcImageGallery;
