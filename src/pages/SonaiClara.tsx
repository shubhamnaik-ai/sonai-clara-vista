
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import EnquiryForm from "@/components/EnquiryForm";

const SonaiClara = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-deepblue">
        <Navbar />
      </div>
      
      <div className="pt-24 pb-16">
        {/* Project Details View */}
        <div className="container-custom">
          <Button 
            onClick={() => window.history.back()} 
            variant="outline" 
            className="mb-6"
          >
            ← Back
          </Button>
          
          <div className="bg-white shadow-lg">
            <div className="aspect-video w-full">
              <img 
                src="/lovable-uploads/704fe54f-500c-4e0d-8092-fbaf95de6743.png" 
                alt="Sonai Clara" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h1 className="text-4xl font-nasalization font-bold text-deepblue">SONAI CLARA</h1>
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-logo/20 text-logo">
                    Under Construction
                  </span>
                </div>
                <p className="text-xl text-charcoal">Ravet, Pune</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-playfair font-bold text-deepblue mb-3">About the Project</h2>
                <p className="text-lg mb-4">Palatial 2 & 3 BHK residences with panoramic views, designed for modern luxury living. Located in the thriving neighborhood of Ravet, Sonai Clara offers an exceptional lifestyle with carefully crafted spaces and world-class amenities.</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-ivory px-3 py-1 text-sm rounded-full">5-Star Amenities</span>
                  <span className="bg-ivory px-3 py-1 text-sm rounded-full">22 Storeys</span>
                  <span className="bg-ivory px-3 py-1 text-sm rounded-full">Spacious Layouts</span>
                  <span className="bg-ivory px-3 py-1 text-sm rounded-full">Modern Architecture</span>
                </div>
              </div>
              
              <div className="mt-10">
                <h2 className="text-2xl font-playfair font-bold text-deepblue mb-6">SPECIFICATIONS</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* STRUCTURAL */}
                  <div className="border p-6 shadow-sm">
                    <h3 className="text-lg font-bold mb-4 text-logo">STRUCTURAL</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Earthquake resistant RCC frame structure</li>
                      <li>AAC block work for external & internal walls</li>
                      <li>External sand faced cement plaster</li>
                      <li>Internal gypsum finish with emulsion paint</li>
                    </ul>
                  </div>
                  
                  {/* FLOORING */}
                  <div className="border p-6 shadow-sm">
                    <h3 className="text-lg font-bold mb-4 text-logo">FLOORING</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Branded Vitrified designer tile for flat</li>
                      <li>Wooden finish tile for Balcony</li>
                    </ul>
                  </div>
                  
                  {/* DOORS & WINDOWS */}
                  <div className="border p-6 shadow-sm">
                    <h3 className="text-lg font-bold mb-4 text-logo">DOORS & WINDOWS</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Video Door Phone</li>
                      <li>Both side Laminated doors</li>
                      <li>Terrace Doors – Sliding doors with mosquito mesh</li>
                      <li>Sliding windows with mosquito net & MS safety grills</li>
                      <li>Aluminum/UPVC Windows</li>
                      <li>MS railings</li>
                    </ul>
                  </div>
                  
                  {/* KITCHEN */}
                  <div className="border p-6 shadow-sm">
                    <h3 className="text-lg font-bold mb-4 text-logo">KITCHEN</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Modular Kitchen</li>
                      <li>Kitchen Platform with Quartz & Dado up to 4' Height</li>
                      <li>Provision of electric & water connection for washing machine & dishwasher in dry balcony</li>
                      <li>Exhaust point in Kitchen</li>
                    </ul>
                  </div>
                  
                  {/* BATHROOMS */}
                  <div className="border p-6 shadow-sm">
                    <h3 className="text-lg font-bold mb-4 text-logo">BATHROOMS</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Bathroom: Dado tiles up to lintel level</li>
                      <li>CP fittings of Jaquar or equivalent</li>
                      <li>Designer Cp fittings</li>
                      <li>Designer Sanitary ware</li>
                      <li>Geyser point in Bath</li>
                      <li>Exhaust point in Bath</li>
                      <li>Concealed plumbing & concealed flush valve</li>
                    </ul>
                  </div>
                  
                  {/* ELECTRIFICATION */}
                  <div className="border p-6 shadow-sm">
                    <h3 className="text-lg font-bold mb-4 text-logo">ELECTRIFICATION</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Concealed fire resistant copper wiring with circuit breaker</li>
                      <li>Branded Modular switches</li>
                      <li>Provision for AC point in Living & Bedroom</li>
                      <li>Provision for TV point in master bedrooms & living room</li>
                      <li>Electric point for inverter</li>
                    </ul>
                  </div>
                  
                  {/* PAINTS */}
                  <div className="border p-6 shadow-sm">
                    <h3 className="text-lg font-bold mb-4 text-logo">PAINTS</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Tractor Emulsion – Internal paint</li>
                      <li>Tractor Emulsion – Exterior paint</li>
                    </ul>
                  </div>
                  
                  {/* SPECIAL FEATURES */}
                  <div className="border p-6 shadow-sm">
                    <h3 className="text-lg font-bold mb-4 text-logo">SPECIAL FEATURES</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Energy saving LED lighting for common areas</li>
                      <li>Elegant entrance lobby</li>
                      <li>Attractive entrance gate with security cabin</li>
                      <li>CCTV in common area</li>
                      <li>DG backup for common area</li>
                      <li>Centralised dish connection</li>
                      <li>Visitor's car parking area</li>
                      <li>Electrical vehicle charging points in parking area (Chargeable)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 flex justify-center">
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-logo hover:bg-logo-dark text-white px-8 py-6">
                      Request Brochure
                    </Button>
                  </DialogTrigger>
                  <EnquiryForm planType="Sonai Clara" downloadBrochure={true} />
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SonaiClara;
