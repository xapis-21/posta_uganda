"use client"
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card";

const Bids = () => {
     const [activeTab, setActiveTab] = useState("jobs");

     const jobsData = [
       {
         title: "Postal Clerk",
         excerpt:
           "Join our front-line team serving customers and processing mail.",
         downloadLink: "/jobs/postal-clerk.pdf",
       },
       {
         title: "Logistics Manager",
         excerpt: "Lead our package delivery operations and optimize routes.",
         downloadLink: "/jobs/logistics-manager.pdf",
       },
       {
         title: "IT Support Specialist",
         excerpt: "Maintain and troubleshoot our digital systems and networks.",
         downloadLink: "/jobs/it-support-specialist.pdf",
       },
       {
         title: "Financial Analyst",
         excerpt:
           "Analyze financial data and prepare reports for decision-making.",
         downloadLink: "/jobs/financial-analyst.pdf",
       },
       {
         title: "Marketing Coordinator",
         excerpt:
           "Develop and implement marketing strategies for our services.",
         downloadLink: "/jobs/marketing-coordinator.pdf",
       },
       {
         title: "Human Resources Manager",
         excerpt: "Oversee recruitment, training, and employee relations.",
         downloadLink: "/jobs/hr-manager.pdf",
       },
       {
         title: "Postal Driver",
         excerpt: "Deliver mail and packages across various routes in Uganda.",
         downloadLink: "/jobs/postal-driver.pdf",
       },
       {
         title: "Customer Service Representative",
         excerpt:
           "Assist customers with inquiries and resolve issues promptly.",
         downloadLink: "/jobs/customer-service-rep.pdf",
       },
       {
         title: "Facility Maintenance Technician",
         excerpt: "Ensure our post offices and facilities are well-maintained.",
         downloadLink: "/jobs/maintenance-technician.pdf",
       },
       {
         title: "E-commerce Solutions Developer",
         excerpt:
           "Create innovative online solutions for our digital services.",
         downloadLink: "/jobs/ecommerce-developer.pdf",
       },
     ];

     const tendersData = [
       {
         title: "Supply of Motor Cycles",
         excerpt: "Seeking suppliers for our delivery fleet expansion.",
         downloadLink: "/tenders/motor-cycles.pdf",
       },
       {
         title: "Refurbishment of Postal Building",
         excerpt:
           "Construction company needed for renovations of our main office.",
         downloadLink: "/tenders/building-refurb.pdf",
       },
       {
         title: "Procurement of Mail Sorting Equipment",
         excerpt:
           "Looking for advanced mail sorting machines to improve efficiency.",
         downloadLink: "/tenders/sorting-equipment.pdf",
       },
       {
         title: "IT Infrastructure Upgrade",
         excerpt: "Vendor needed for comprehensive IT systems modernization.",
         downloadLink: "/tenders/it-upgrade.pdf",
       },
       {
         title: "Printing Services for Stamps and Stationery",
         excerpt: "Seeking a printing partner for official postal products.",
         downloadLink: "/tenders/printing-services.pdf",
       },
       {
         title: "Vehicle Fleet Maintenance Services",
         excerpt: "Maintenance provider needed for our delivery vehicle fleet.",
         downloadLink: "/tenders/fleet-maintenance.pdf",
       },
       {
         title: "Security Systems Installation",
         excerpt: "Installation of modern security systems in all branches.",
         downloadLink: "/tenders/security-systems.pdf",
       },
       {
         title: "Solar Power Installation for Rural Offices",
         excerpt: "Green energy solutions needed for our rural post offices.",
         downloadLink: "/tenders/solar-power.pdf",
       },
       {
         title: "Uniforms and Safety Gear Supply",
         excerpt:
           "Supplier needed for staff uniforms and protective equipment.",
         downloadLink: "/tenders/uniforms-safety-gear.pdf",
       },
       {
         title: "Digital Signage Solutions",
         excerpt:
           "Implementing digital displays across our major post offices.",
         downloadLink: "/tenders/digital-signage.pdf",
       },
     ];
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Careers and Opportunities</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="jobs">Job Vacancies</TabsTrigger>
          <TabsTrigger value="tenders">Bids and Tenders</TabsTrigger>
        </TabsList>

        <TabsContent value="jobs">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:block">Description</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobsData.map((job, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{job.title}</TableCell>
                  <TableCell className="hidden md:block">
                    {job.excerpt}
                  </TableCell>
                  <TableCell>
                    <Button asChild>
                      <a href={job.downloadLink} download>
                        Download Info
                      </a>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="tenders">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:block">Description</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tendersData.map((tender, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{tender.title}</TableCell>
                  <TableCell className="hidden md:block">
                    {tender.excerpt}
                  </TableCell>
                  <TableCell>
                    <Button asChild>
                      <a href={tender.downloadLink} download>
                        Download Info
                      </a>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Bids


const ListingCard = ({ title, excerpt, downloadLink }:any) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{excerpt}</p>
    </CardContent>
    <CardFooter>
      <Button asChild>
        <a href={downloadLink} download>
          Download Info
        </a>
      </Button>
    </CardFooter>
  </Card>
);