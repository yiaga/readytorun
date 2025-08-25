import EULogo from "@/assets/eu-funded-logo.png";
import Heading from "../headers/Heading";

const Sponsors: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <div className="flex justify-center items-center">
          <img
            src={EULogo}
            alt="European Union Logo"
            className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
