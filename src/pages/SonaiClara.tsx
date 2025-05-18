import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import EnquiryForm from "@/components/EnquiryForm";
import { Flame, Activity, Droplet, Accessibility, ParkingCircle, ChevronsUp, Building, Cable, CloudRain, Zap, Shield, Toilet, Sofa } from "lucide-react";

const SonaiClara = () => {
  const [open, setOpen] = useState(false);
  const [fullImageView, setFullImageView] = useState(false);

  // List of amenities with icons - updating Basketball Court and Drivers Room icons
  const amenitiesList = [
    { icon: <ParkingCircle className="h-6 w-6" />, name: "Ample covered Parking for 2 Wheelers" },
    { icon: <ChevronsUp className="h-6 w-6" />, name: "Grand Entrance Lobby" },
    { icon: <ChevronsUp className="h-6 w-6" />, name: "Designer Lift" },
    { icon: <Building className="h-6 w-6" />, name: "Society Office" },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <circle cx="12" cy="8" r="4" />
          <path d="M12 12v4" />
          <circle cx="12" cy="20" r="2" />
          <circle cx="18" cy="16" r="3" />
          <path d="M15 16h6" />
          <path d="M18 13v6" />
        </svg>
      ), 
      name: "Drivers Room" 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <rect x="2" y="4" width="20" height="16" rx="1" />
          <line x1="12" y1="4" x2="12" y2="20" />
          <circle cx="12" cy="12" r="2" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
          <path d="M4 4c4 3 6 5 6 8s-2 5-6 8" />
          <path d="M20 4c-4 3-6 5-6 8s2 5 6 8" />
        </svg>
      ), 
      name: "Basketball Court" 
    },
    { icon: <Flame className="h-6 w-6" />, name: "Firefighting System" },
    { icon: <Activity className="h-6 w-6" />, name: "OWC Plant" },
    { icon: <Cable className="h-6 w-6" />, name: "EV Charging Points as per Norms" },
    { icon: <Activity className="h-6 w-6" />, name: "STP" },
    { icon: <CloudRain className="h-6 w-6" />, name: "Rainwater Harvesting" },
    { icon: <Zap className="h-6 w-6" />, name: "DG Backup for Common areas" },
    { icon: <Shield className="h-6 w-6" />, name: "CCTV Surveillance" },
    { icon: <Toilet className="h-6 w-6" />, name: "Common Toilet" },
    { icon: <Sofa className="h-6 w-6" />, name: "Seating Area" }
  ];

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
            {/* Full image view with click to expand */}
            <div 
              className="aspect-video w-full cursor-pointer relative overflow-hidden" 
              onClick={() => setFullImageView(true)}
            >
              <img 
                src="/lovable-uploads/704fe54f-500c-4e0d-8092-fbaf95de6743.png" 
                alt="Sonai Clara" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm">
                Click to expand
              </div>
            </div>
            
            {/* Full image view dialog */}
            <Dialog open={fullImageView} onOpenChange={setFullImageView}>
              <DialogContent className="max-w-7xl p-0 bg-transparent border-none" onInteractOutside={(e) => e.preventDefault()}>
                <div className="relative flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/704fe54f-500c-4e0d-8092-fbaf95de6743.png" 
                    alt="Sonai Clara" 
                    className="max-w-full max-h-[90vh] object-contain" 
                  />
                  <Button 
                    className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 h-8 w-8"
                    onClick={() => setFullImageView(false)}
                  >
                    ✕
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            
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
              
              {/* Amenities Section */}
              <div className="my-12">
                <h2 className="text-2xl font-playfair font-bold text-deepblue mb-6 text-center">AMENITIES</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {amenitiesList.map((amenity, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-4 border rounded-lg hover:bg-ivory/30 transition-colors"
                    >
                      <div className="bg-gray-100 p-3 rounded-full text-gray-700">
                        {amenity.icon}
                      </div>
                      <span className="text-sm md:text-base">{amenity.name}</span>
                    </motion.div>
                  ))}
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
