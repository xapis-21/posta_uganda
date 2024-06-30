import Image from "next/image";
import Container from "./Container";
import TextTypeEffect from "./TextTypeEffect";

const Hero = async() => {
  return (
    <section className="w-screen h-full max-h-[640px] bg-gradient-to-tr from-background to-primary">
      <Container>
        <div className="flex flex-col md:flex-row w-full items-center justify-between">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold text-center ">
              Welcome to Posta Uganda
            </h1>

            <div className="text-center ">
              Connecting you through <TextTypeEffect />
            </div>
          </div>
          <div>
            <Image
              src="/images/hero-image.png"
              alt="Posta Uganda"
              width={800}
              height={400}
              className="h-96 object-contain my-20"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
