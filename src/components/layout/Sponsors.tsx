import EULogo from "@/assets/eu-funded-logo.png";
import Heading from "../headers/Heading";

const Sponsors = () => {
  return (
    <div className="bg-white rounded-lg p-6 mb-12">
      <div className="text-center">
        <Heading variant="h2" bold={false} className="ftext-primary mb-6">
          Sponsored By
        </Heading>

        {/* Scrolling Container */}
        <div className="overflow-hidden relative w-full">
          <div className="flex justify-between">
            <img
              src={EULogo}
              alt="European Union Logo"
              className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto"
            />
            <img
              src={EULogo}
              alt="Sponsor 1"
              className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto"
            />
            <img
              src={EULogo}
              alt="Sponsor 2"
              className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto"
            />
            <img
              src={EULogo}
              alt="European Union Logo"
              className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto"
            />
            <img
              src={EULogo}
              alt="Sponsor 1"
              className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto"
            />
            <img
              src={EULogo}
              alt="Sponsor 2"
              className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
