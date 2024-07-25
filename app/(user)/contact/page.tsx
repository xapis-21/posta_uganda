import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import FAQSection from "@/components/FAQSection";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Posta Uganda",
  description:
    "Get in touch with We are here to answer your questions, provide insights, and explore how we can work together to achieve your company objectives.",
};

const page = () => {
  return (
    <main className="">
      <section className="py-24 md:pt-32">
        <Container>
          <div className="grid  grid-col-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-start">
              <div className="max-w-[480px] flex flex-col justify-center gap-8">
                <div className="self-stretch w-full flex flex-col items-start">
                  <h1 className="self-stretch font-bold text-primary text-sm">
                    Get in touch
                  </h1>
                  <h2 className="text-3xl md:text-4xl max-w-3xl font-semibold text-foreground leading-tight">
                    If you have any questions, please don't hesitate to reach
                    out to us.
                  </h2>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="font-bold text-navy-100">
                    Alternatively, you can reach us at:
                  </h3>
                  <p className="flex gap-4 py-1">
                    <Mail className="text-primary" />
                    info@ugapost.co.ug
                  </p>
                  <p className="flex gap-4 py-1">
                    <Phone className="text-primary" />
                    +256 41 4231707
                  </p>
                  <p className="flex gap-4 py-1">
                    <MapPin className="text-primary" />
                    Plot 35, Kampala Road, Kampala, Uganda
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center h-[300px] mt-12">
              
                <div className="flex-1 h-full  overflow-hidden rounded-xl ">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7584983917045!2d32.578805076600624!3d0.31375589968316586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc808cc2ab43%3A0x7dd3e9e39634c3b!2sUganda%20Post%20Office!5e0!3m2!1sen!2sug!4v1721133815090!5m2!1sen!2sug"
                    width="800"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
      <FAQSection/>
    </main>
  );
};

export default page;
