import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
export const postaUgandaServices = [
  {
    name: "Postal Addresses",
    subServices: [
      {
        name: "Physical Box",
        description: "A physical mailbox located at a post office.",
        howToUse: "Apply at any post office or online at www.eposta.ug. Annual fees vary based on location.",
      },
      {
        name: "Virtual Box (eBox)",
        description: "An electronic postal address accessible 24/7 from any device.",
        howToUse: "Register online at www.eposta.ug. Receive notifications for new mail and manage your box digitally.",
      },
    ],
  },
  {
    name: "Mail Services",
    subServices: [
      {
        name: "Domestic Mail",
        description: "Delivery of letters, parcels, and packages within Uganda.",
        howToUse: "Visit any post office to send items. Postage rates depend on weight and destination.",
      },
      {
        name: "International Mail",
        description: "Sending and receiving mail to/from other countries.",
        howToUse: "Available at all post offices. Rates vary based on destination and weight.",
      },
      {
        name: "Bulk Mail",
        description: "Service for sending large quantities of similar mail items.",
        howToUse: "Contact Posta Uganda for bulk mailing rates and arrangements.",
      },
    ],
  },
  {
    name: "Express Mail Service (EMS)",
    description: "Fast, reliable domestic and international courier service.",
    howToUse: "Available at major post offices. Offers tracking and guaranteed delivery times.",
  },
  {
    name: "Financial Services",
    subServices: [
      {
        name: "EURO GIRO",
        description: "International money transfer service.",
        howToUse: "Visit a participating post office to send or receive international money transfers.",
      },
      {
        name: "Domestic Money Orders",
        description: "Send money within Uganda.",
        howToUse: "Available at all post offices. Requires sender and recipient information.",
      },
    ],
  },
  {
    name: "Philately",
    description: "Collection and study of postage stamps.",
    howToUse: "Purchase commemorative and collectible stamps at major post offices or through the Philatelic Bureau.",
  },
  {
    name: "E-commerce Services",
    description: "Support for online businesses through delivery and returns management.",
    howToUse: "Contact Posta Uganda for e-commerce integration and shipping solutions.",
  },
  {
    name: "Posta Parcel",
    description: "Parcel delivery service for items up to 30kg.",
    howToUse: "Available at all post offices. Rates based on weight and destination.",
  },
  {
    name: "Easy Mail",
    description: "Subscription-based mail delivery service for businesses.",
    howToUse: "Apply through Posta Uganda for unlimited mail delivery at a fixed annual fee.",
  },
  {
    name: "Property Services",
    description: "Rental of office spaces, commercial areas, and land owned by Posta Uganda.",
    howToUse: "Contact Posta Uganda's Estates Office for availability and rental information.",
  },
  {
    name: "Post Bus",
    description: "Affordable public transport service.",
    howToUse: "Check Post Bus schedules and book tickets at major post offices or online.",
  },
  {
    name: "Agency Services",
    subServices: [
      {
        name: "Utility Bill Payments",
        description: "Pay for utilities at post offices.",
        howToUse: "Bring your bill to any post office to make payments.",
      },
      {
        name: "Government Services",
        description: "Access various government services through post offices.",
        howToUse: "Inquire at your local post office for available government services.",
      },
    ],
  },
  {
    name: "Track and Trace",
    description: "Online tracking system for mail and parcels.",
    howToUse: "Use the tracking number on www.eposta.ug or the Posta Uganda mobile app to track your items.",
  },
];

export const ServicesCard: React.FC<{
  service: (typeof postaUgandaServices)[0];
}> = ({ service }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{service.name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{service.description}</p>
      {service.subServices && (
        <ul className="list-disc pl-5 mt-2">
          {service.subServices.map((subService, index) => (
            <li key={index}>
              <strong>{subService.name}</strong>: {subService.description}
              <p className="text-sm text-muted-foreground">
                How to use: {subService.howToUse}
              </p>
            </li>
          ))}
        </ul>
      )}
      {service.howToUse && (
        <p className="mt-2">
          <strong>How to use:</strong> {service.howToUse}
        </p>
      )}
      <Button className="mt-4">Learn More</Button>
    </CardContent>
  </Card>
);

export const FAQCard: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>FAQ</CardTitle>
    </CardHeader>
    <CardContent>
      <h3 className="font-bold">{question}</h3>
      <p>{answer}</p>
    </CardContent>
  </Card>
);

export const ContactCard: React.FC<{

}> = () => {
  const contact = {
    phone: "+256-414-2555115",
    email: "customercare@ugapost.co.ug",
    address: "Plot 35, Kampala Road P.O Box 7106, Kampala, Uganda",
  };
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Contact Posta Uganda</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Phone: {contact.phone}</p>
        <p>Email: {contact.email}</p>
        <p>Address: {contact.address}</p>
      </CardContent>
    </Card>
  );
};

export const TrackingForm: React.FC = () => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>Track Your Package</CardTitle>
    </CardHeader>
    <CardContent>
      <form className="flex gap-2">
        <Input placeholder="Enter tracking number" />
        <Button type="submit">Track</Button>
      </form>
    </CardContent>
  </Card>
);
