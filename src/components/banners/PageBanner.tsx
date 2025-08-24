import Heading from "../headers/Heading";

interface Props {
  heading: string;
  description: string;
}

const PageBanner = ({ heading, description }: Readonly<Props>) => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Heading
            variant="h1"
            bold={false}
            className="text-4xl lg:text-6xl mb-6"
          >
            {heading}
          </Heading>
          <p className="text-xl lg:text-2xl opacity-90">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
