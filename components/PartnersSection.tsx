import Image from "next/image";
import Container from "./Container";


const partners = [

  {
    name: "Ministry of ICT and National Guidance",
    logo: "/images/partners/ucc-logo.jpg",
  },
  { name: "Universal Postal Union", logo: "/images/partners/nita-logo.png" },
  {
    name: "East African Communications Organization",
    logo: "/images/partners/uesw-logo.png",
  },
  { name: "TrustBank Uganda", logo: "/images/partners/post-bank-logo.jpg" },
  { name: "UgaShop Online", logo: "/images/partners/ursb-logo.png" },
];

const PartnersSection= () => {
  return (
    <section className="w-full pt-16 ">
      <Container>
        <h2 className="text-primary font-bold text-center mb-2">
          Our Partners
        </h2>
        <h3 className="text-4xl font-semibold text-center mb-8">
          Partnering with leading organizations
        </h3>
        <div className="w-full grid grid-cols-3 md:grid-cols-5 flex-row flex-wrap gap-4  items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-full flex justify-center items-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={80}
                className="h-20 object-contain max-w-[100px]"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PartnersSection;
